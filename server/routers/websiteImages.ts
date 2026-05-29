import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../_core/trpc.js";
import { getDb } from "../db.js";
import { websiteImages } from "../../drizzle/schema.js";
import { eq } from "drizzle-orm";
import { storagePut } from "../storage.js";

export const websiteImagesRouter = router({
  /**
   * Get all website images
   */
  getAll: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) {
      throw new Error("Database not available");
    }
    const images = await db.select().from(websiteImages).orderBy(websiteImages.displayNumber);
    return images;
  }),

  /**
   * Get a single website image by key
   * Public procedure since images need to be accessible to all visitors
   */
  getByKey: publicProcedure
    .input(z.object({ imageKey: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }
      const [image] = await db
        .select()
        .from(websiteImages)
        .where(eq(websiteImages.imageKey, input.imageKey))
        .limit(1);
      return image || null; // Return null instead of undefined when not found
    }),

  /**
   * Update an image
   */
  updateImage: protectedProcedure
    .input(
      z.object({
        imageId: z.number(),
        fileData: z.string(), // base64 encoded file data
        filename: z.string(),
        mimeType: z.string(),
        fileSize: z.number(),
        isMobile: z.boolean().optional().default(false), // Whether this is a mobile variant
      })
    )
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }
      
      // Get the existing image record
      const [existingImage] = await db
        .select()
        .from(websiteImages)
        .where(eq(websiteImages.id, input.imageId))
        .limit(1);

      if (!existingImage) {
        throw new Error("Image not found");
      }

      // Convert base64 to buffer
      const buffer = Buffer.from(input.fileData, 'base64');

      // Upload to S3
      const suffix = input.isMobile ? 'mobile' : 'desktop';
      const fileKey = `website/${existingImage.imageKey}/${suffix}/${Date.now()}-${input.filename}`;
      const { url } = await storagePut(fileKey, buffer, input.mimeType);

      // Update database - different fields for mobile vs desktop
      if (input.isMobile) {
        await db
          .update(websiteImages)
          .set({
            mobileFileKey: fileKey,
            mobileUrl: url,
            mobileFilename: input.filename,
            mobileMimeType: input.mimeType,
            mobileFileSize: input.fileSize,
            updatedBy: ctx.user.id,
          })
          .where(eq(websiteImages.id, input.imageId));
      } else {
        await db
          .update(websiteImages)
          .set({
            fileKey,
            url,
            filename: input.filename,
            mimeType: input.mimeType,
            fileSize: input.fileSize,
            updatedBy: ctx.user.id,
          })
          .where(eq(websiteImages.id, input.imageId));
      }

      return { success: true, url };
    }),
});
