import { getDb } from "./server/db";
import { websiteImages } from "./drizzle/schema";

const restorativeImages = [
  {
    imageKey: 'services_restorative_1',
    label: 'Restorative Care - Image 1',
    page: 'Our Services',
    section: 'Restorative & Emergency Care Section',
    boxColor: '#8B5CF6',
    displayNumber: 5,
    fileKey: 'default/placeholder-dental-4.jpg',
    url: '/images/placeholder-dental-4.jpg',
    filename: 'placeholder-dental-4.jpg',
    mimeType: 'image/jpeg',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'services_restorative_2',
    label: 'Restorative Care - Image 2',
    page: 'Our Services',
    section: 'Restorative & Emergency Care Section',
    boxColor: '#8B5CF6',
    displayNumber: 6,
    fileKey: 'default/placeholder-dental-5.jpg',
    url: '/images/placeholder-dental-5.jpg',
    filename: 'placeholder-dental-5.jpg',
    mimeType: 'image/jpeg',
    fileSize: 1024,
    updatedBy: 1,
  },
];

async function seed() {
  console.log('Adding Restorative section images...');
  
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }
  
  for (const image of restorativeImages) {
    await db.insert(websiteImages).values(image).onDuplicateKeyUpdate({
      set: {
        label: image.label,
        page: image.page,
        section: image.section,
        boxColor: image.boxColor,
        displayNumber: image.displayNumber,
      },
    });
    console.log('Added: ' + image.label);
  }
  
  console.log('All Restorative section images added successfully!');
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
