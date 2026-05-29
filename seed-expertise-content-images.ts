import { getDb } from "./server/db";
import { websiteImages } from "./drizzle/schema";

const expertiseImages = [
  {
    imageKey: 'services_preventive_1',
    label: 'Preventive Care - Image 1',
    page: 'Our Services',
    section: 'Preventive Care Section',
    boxColor: '#8B5CF6',
    displayNumber: 2,
    fileKey: 'default/placeholder-dental-1.jpg',
    url: '/images/placeholder-dental-1.jpg',
    filename: 'placeholder-dental-1.jpg',
    mimeType: 'image/jpeg',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'services_preventive_2',
    label: 'Preventive Care - Image 2',
    page: 'Our Services',
    section: 'Preventive Care Section',
    boxColor: '#8B5CF6',
    displayNumber: 3,
    fileKey: 'default/placeholder-dental-2.jpg',
    url: '/images/placeholder-dental-2.jpg',
    filename: 'placeholder-dental-2.jpg',
    mimeType: 'image/jpeg',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'services_cosmetic_1',
    label: 'Cosmetic Dentistry - Image',
    page: 'Our Services',
    section: 'Cosmetic Dentistry Section',
    boxColor: '#8B5CF6',
    displayNumber: 4,
    fileKey: 'default/placeholder-dental-3.jpg',
    url: '/images/placeholder-dental-3.jpg',
    filename: 'placeholder-dental-3.jpg',
    mimeType: 'image/jpeg',
    fileSize: 1024,
    updatedBy: 1,
  },
];

async function seed() {
  console.log('Adding Expertise page content images...');
  
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }
  
  for (const image of expertiseImages) {
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
  
  console.log('All Expertise page content images added successfully!');
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
