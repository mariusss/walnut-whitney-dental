import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { websiteImages } from './drizzle/schema.ts';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection, { mode: 'default' });

// Seed new service images
const newImages = [
  {
    imageKey: 'services_preventive_1',
    label: 'Services - Preventive Care Image 1',
    page: 'Services',
    section: 'Preventive Care Image 1',
    url: '/images/placeholder-dental-1.jpg',
    fileKey: '',
    filename: '',
    mimeType: '',
    fileSize: 0,
    boxColor: '#10b981', // Green
    displayNumber: 17,
    uploadedBy: 1,
    updatedBy: 1,
  },
  {
    imageKey: 'services_preventive_2',
    label: 'Services - Preventive Care Image 2',
    page: 'Services',
    section: 'Preventive Care Image 2',
    url: '/images/placeholder-dental-2.jpg',
    fileKey: '',
    filename: '',
    mimeType: '',
    fileSize: 0,
    boxColor: '#10b981', // Green
    displayNumber: 18,
    uploadedBy: 1,
    updatedBy: 1,
  },
  {
    imageKey: 'services_cosmetic_1',
    label: 'Services - Cosmetic Dentistry Image',
    page: 'Services',
    section: 'Cosmetic Dentistry Image',
    url: '/images/placeholder-dental-3.jpg',
    fileKey: '',
    filename: '',
    mimeType: '',
    fileSize: 0,
    boxColor: '#3b82f6', // Blue
    displayNumber: 19,
    uploadedBy: 1,
    updatedBy: 1,
  },
];

console.log('Seeding new service images...');

for (const image of newImages) {
  await db.insert(websiteImages).values(image);
  console.log(`✓ Seeded: ${image.imageKey}`);
}

console.log('✓ All service images seeded successfully!');

await connection.end();
process.exit(0);
