import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { Context } from "./_core/trpc";

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

describe("Contact Form Email", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    // Create a mock context
    const mockContext: Context = {
      req: {} as any,
      res: {} as any,
      user: null,
    };

    // Create a caller with the mock context
    caller = appRouter.createCaller(mockContext);
  });

  it("should successfully send contact form email with valid data", async () => {
    const result = await caller.contact.sendEmail({
      name: "John Doe",
      email: "john@example.com",
      message: "I would like to schedule an appointment.",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject empty name", async () => {
    await expect(
      caller.contact.sendEmail({
        name: "",
        email: "john@example.com",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("should reject invalid email", async () => {
    await expect(
      caller.contact.sendEmail({
        name: "John Doe",
        email: "invalid-email",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("should reject empty message", async () => {
    await expect(
      caller.contact.sendEmail({
        name: "John Doe",
        email: "john@example.com",
        message: "",
      })
    ).rejects.toThrow();
  });

  it("should call notifyOwner with correct data", async () => {
    const { notifyOwner } = await import("./_core/notification");

    await caller.contact.sendEmail({
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Looking for cosmetic dentistry options.",
    });

    expect(notifyOwner).toHaveBeenCalledWith({
      title: "New Contact Form: Jane Smith",
      content: expect.stringContaining("Jane Smith"),
    });

    expect(notifyOwner).toHaveBeenCalledWith({
      title: expect.any(String),
      content: expect.stringContaining("jane@example.com"),
    });

    expect(notifyOwner).toHaveBeenCalledWith({
      title: expect.any(String),
      content: expect.stringContaining("Looking for cosmetic dentistry options."),
    });
  });
});
