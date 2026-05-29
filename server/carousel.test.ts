import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("carousel.list", () => {
  it("allows public access to list carousel images", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.carousel.list();

    expect(Array.isArray(result)).toBe(true);
  });

  it("returns an array of carousel images", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.carousel.list();

    expect(Array.isArray(result)).toBe(true);
    result.forEach((image) => {
      expect(image).toHaveProperty("id");
      expect(image).toHaveProperty("url");
      expect(image).toHaveProperty("altText");
      expect(image).toHaveProperty("displayOrder");
    });
  });
});

describe("carousel.upload", () => {
  it("requires admin role to upload images", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.carousel.upload({
        filename: "test.jpg",
        contentType: "image/jpeg",
        base64Data: "dGVzdA==",
        altText: "Test image",
        displayOrder: 0,
      })
    ).rejects.toThrow();
  });

  it("accepts valid upload data", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.carousel.upload({
      filename: "test.jpg",
      contentType: "image/jpeg",
      base64Data: "dGVzdA==",
      altText: "Test image",
      displayOrder: 0,
    });

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("url");
    expect(result.altText).toBe("Test image");
  });
});

describe("carousel.delete", () => {
  it("requires admin role to delete images", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.carousel.delete({ id: 1 })
    ).rejects.toThrow();
  });

  it("accepts valid delete request", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.carousel.delete({ id: 999 });
    expect(result).toEqual({ success: true });
  });
});

describe("carousel.updateOrder", () => {
  it("requires admin role to update order", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.carousel.updateOrder({ id: 1, displayOrder: 5 })
    ).rejects.toThrow();
  });

  it("accepts valid update order request", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.carousel.updateOrder({ id: 1, displayOrder: 5 });
    expect(result).toEqual({ success: true });
  });
});
