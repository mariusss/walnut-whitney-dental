import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure, adminProcedure } from "./_core/trpc";
import { getAllCarouselImages, insertCarouselImage, deleteCarouselImage, updateCarouselImageOrder } from "./db";
import { storagePut } from "./storage";
import { z } from "zod";
import { nanoid } from "nanoid";
import { websiteImagesRouter } from "./routers/websiteImages.js";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  websiteImages: websiteImagesRouter,

  contact: router({
    sendEmail: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        // TODO: Implement email sending logic
        // For now, we'll use the notification system to notify the owner
        const { notifyOwner } = await import("./_core/notification");
        
        const emailContent = `
New Contact Form Submission

From: ${input.name}
Email: ${input.email}

Message:
${input.message}
        `;
        
        await notifyOwner({
          title: `New Contact Form: ${input.name}`,
          content: emailContent,
        });
        
        return { success: true };
      }),
  }),

  carousel: router({
    // Public endpoint to get all carousel images
    list: publicProcedure.query(async () => {
      return await getAllCarouselImages();
    }),

    // Admin endpoint to upload a new carousel image
    upload: adminProcedure
      .input(
        z.object({
          filename: z.string(),
          contentType: z.string(),
          base64Data: z.string(),
          altText: z.string(),
          displayOrder: z.number().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        // Convert base64 to buffer
        const buffer = Buffer.from(input.base64Data, "base64");
        const fileSize = buffer.length;

        // Generate unique file key
        const fileKey = `carousel/${nanoid()}-${input.filename}`;

        // Upload to S3
        const { url } = await storagePut(fileKey, buffer, input.contentType);

        // Save to database
        const image = await insertCarouselImage({
          fileKey,
          url,
          altText: input.altText,
          displayOrder: input.displayOrder ?? 0,
          filename: input.filename,
          mimeType: input.contentType,
          fileSize,
          uploadedBy: ctx.user.id,
        });

        return image;
      }),

    // Admin endpoint to delete a carousel image
    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deleteCarouselImage(input.id);
        return { success: true };
      }),

    // Admin endpoint to update image display order
    updateOrder: adminProcedure
      .input(
        z.object({
          id: z.number(),
          displayOrder: z.number(),
        })
      )
      .mutation(async ({ input }) => {
        await updateCarouselImageOrder(input.id, input.displayOrder);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
