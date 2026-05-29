import { describe, it, expect, beforeAll } from 'vitest';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/context';
import { getDb } from './db';
import { websiteImages } from '../drizzle/schema';
import { eq } from 'drizzle-orm';

type AuthenticatedUser = NonNullable<TrpcContext['user']>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: 'admin-user',
    email: 'admin@example.com',
    name: 'Admin User',
    loginMethod: 'manus',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: 'https',
      headers: {},
    } as TrpcContext['req'],
    res: {
      clearCookie: () => {},
    } as TrpcContext['res'],
  };

  return ctx;
}

describe('Website Images API', () => {
  let caller: ReturnType<typeof appRouter.createCaller>;
  let testUserId: number;

  beforeAll(async () => {
    const ctx = createAdminContext();
    caller = appRouter.createCaller(ctx);
    testUserId = 1;
  });

  it('should get all website images', async () => {
    const images = await caller.websiteImages.getAll();
    
    expect(images).toBeDefined();
    expect(Array.isArray(images)).toBe(true);
    expect(images.length).toBeGreaterThan(0);
    
    // Check structure of first image
    const firstImage = images[0];
    expect(firstImage).toHaveProperty('id');
    expect(firstImage).toHaveProperty('imageKey');
    expect(firstImage).toHaveProperty('label');
    expect(firstImage).toHaveProperty('page');
    expect(firstImage).toHaveProperty('section');
    expect(firstImage).toHaveProperty('boxColor');
    expect(firstImage).toHaveProperty('displayNumber');
    expect(firstImage).toHaveProperty('url');
  });

  it('should get image by key', async () => {
    const image = await caller.websiteImages.getByKey({
      imageKey: 'homepage_hero_bg',
    });
    
    expect(image).toBeDefined();
    expect(image?.imageKey).toBe('homepage_hero_bg');
    expect(image?.page).toBe('Homepage');
    expect(image?.boxColor).toBe('#3B82F6'); // Blue
  });

  it('should have correct color coding for different pages', async () => {
    const images = await caller.websiteImages.getAll();
    
    // Homepage should be blue
    const homepageImages = images.filter(img => img.page === 'Homepage');
    expect(homepageImages.every(img => img.boxColor === '#3B82F6')).toBe(true);
    
    // Preventive Care should be green
    const preventiveCareImages = images.filter(img => img.page === 'Preventive Care');
    expect(preventiveCareImages.every(img => img.boxColor === '#10B981')).toBe(true);
    
    // Porcelain Veneers should be purple
    const porcelainVeneersImages = images.filter(img => img.page === 'Porcelain Veneers');
    expect(porcelainVeneersImages.every(img => img.boxColor === '#8B5CF6')).toBe(true);
  });

  it('should have sequential display numbers', async () => {
    const images = await caller.websiteImages.getAll();
    const displayNumbers = images.map(img => img.displayNumber).sort((a, b) => a - b);
    
    // Check that display numbers are sequential starting from 1
    for (let i = 0; i < displayNumbers.length; i++) {
      expect(displayNumbers[i]).toBe(i + 1);
    }
  });

  it('should update an image', async () => {
    const db = await getDb();
    if (!db) {
      throw new Error('Database not available');
    }

    // Get an existing image
    const [existingImage] = await db
      .select()
      .from(websiteImages)
      .where(eq(websiteImages.imageKey, 'homepage_hero_bg'))
      .limit(1);

    expect(existingImage).toBeDefined();

    // Create a small test image (1x1 red pixel PNG in base64)
    const testImageBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';
    
    const result = await caller.websiteImages.updateImage({
      imageId: existingImage.id,
      fileData: testImageBase64,
      filename: 'test-image.png',
      mimeType: 'image/png',
      fileSize: 68,
    });

    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(result.url).toBeDefined();
    expect(typeof result.url).toBe('string');

    // Verify the image was updated in the database
    const [updatedImage] = await db
      .select()
      .from(websiteImages)
      .where(eq(websiteImages.id, existingImage.id))
      .limit(1);

    expect(updatedImage.filename).toBe('test-image.png');
    expect(updatedImage.mimeType).toBe('image/png');
    expect(updatedImage.updatedBy).toBe(testUserId);
  });
});
