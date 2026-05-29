import { getDb } from "./server/db";
import { websiteImages } from "./drizzle/schema";

async function seed() {
  console.log('Adding Expertise header image...');
  
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }
  
  await db.insert(websiteImages).values({
    imageKey: 'expertise_header',
    label: 'Header Image',
    page: 'Our Services',
    section: 'Hero Section',
    boxColor: '#8B5CF6',
    displayNumber: 1,
    fileKey: 'default/patient_3_female_dental_chair.png',
    url: '/images/patient_3_female_dental_chair.png',
    filename: 'patient_3_female_dental_chair.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  }).onDuplicateKeyUpdate({
    set: {
      label: 'Header Image',
      page: 'Our Services',
      section: 'Hero Section',
      boxColor: '#8B5CF6',
      displayNumber: 1,
    },
  });
  
  console.log('Expertise header image added successfully!');
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
