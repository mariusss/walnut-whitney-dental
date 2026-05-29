import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Patient carousel images table.
 * Stores the images displayed in the homepage carousel.
 */
export const carouselImages = mysqlTable("carousel_images", {
  id: int("id").autoincrement().primaryKey(),
  /** S3 file key for the image */
  fileKey: varchar("fileKey", { length: 512 }).notNull(),
  /** Public URL to access the image */
  url: text("url").notNull(),
  /** Alt text for accessibility */
  altText: varchar("altText", { length: 255 }).notNull(),
  /** Display order (lower numbers appear first) */
  displayOrder: int("displayOrder").notNull().default(0),
  /** Original filename */
  filename: varchar("filename", { length: 255 }).notNull(),
  /** MIME type of the image */
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  /** File size in bytes */
  fileSize: int("fileSize").notNull(),
  /** ID of the user who uploaded this image */
  uploadedBy: int("uploadedBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CarouselImage = typeof carouselImages.$inferSelect;
export type InsertCarouselImage = typeof carouselImages.$inferInsert;
/**
 * Website images table.
 * Stores all images used across the website with location identifiers.
 */
export const websiteImages = mysqlTable("website_images", {
  id: int("id").autoincrement().primaryKey(),
  /** Unique identifier for the image location (e.g., "homepage_hero", "preventive_care_header") */
  imageKey: varchar("imageKey", { length: 100 }).notNull().unique(),
  /** Human-readable label for the admin interface */
  label: varchar("label", { length: 255 }).notNull(),
  /** Page where this image is used (e.g., "Homepage", "Preventive Care") */
  page: varchar("page", { length: 100 }).notNull(),
  /** Section within the page (e.g., "Hero Section", "Content Image - Top") */
  section: varchar("section", { length: 255 }).notNull(),
  /** Color code for the numbered box in admin (e.g., "#3B82F6" for blue) */
  boxColor: varchar("boxColor", { length: 7 }).notNull(),
  /** Display order number for the admin interface */
  displayNumber: int("displayNumber").notNull(),
  /** S3 file key for the image */
  fileKey: varchar("fileKey", { length: 512 }).notNull(),
  /** Public URL to access the image */
  url: text("url").notNull(),
  /** Original filename */
  filename: varchar("filename", { length: 255 }).notNull(),
  /** MIME type of the image */
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  /** File size in bytes */
  fileSize: int("fileSize").notNull(),
  /** ID of the user who last updated this image */
  updatedBy: int("updatedBy").notNull(),
  /** Mobile variant: S3 file key for mobile-specific image (optional) */
  mobileFileKey: varchar("mobileFileKey", { length: 512 }),
  /** Mobile variant: Public URL to access mobile-specific image (optional) */
  mobileUrl: text("mobileUrl"),
  /** Mobile variant: Original filename (optional) */
  mobileFilename: varchar("mobileFilename", { length: 255 }),
  /** Mobile variant: MIME type (optional) */
  mobileMimeType: varchar("mobileMimeType", { length: 100 }),
  /** Mobile variant: File size in bytes (optional) */
  mobileFileSize: int("mobileFileSize"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type WebsiteImage = typeof websiteImages.$inferSelect;
export type InsertWebsiteImage = typeof websiteImages.$inferInsert;
