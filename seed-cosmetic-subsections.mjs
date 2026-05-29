import { getDb } from './server/db.ts';

const db = getDb();

const images = [
  {
    imageKey: 'cosmetic_dentistry_bonding',
    label: 'Dental Bonding',
    url: '/images/placeholder-dental-6.jpg',
    page: 'Cosmetic Dentistry',
    section: 'Dental Bonding',
    boxColor: 'amber',
    displayNumber: 4,
    fileKey: null,
    filename: null,
    mimeType: null,
    fileSize: null,
    updatedBy: 1
  },
  {
    imageKey: 'cosmetic_dentistry_bridges',
    label: 'Dental Bridges',
    url: '/images/placeholder-dental-7.jpg',
    page: 'Cosmetic Dentistry',
    section: 'Dental Bridges',
    boxColor: 'amber',
    displayNumber: 5,
    fileKey: null,
    filename: null,
    mimeType: null,
    fileSize: null,
    updatedBy: 1
  },
  {
    imageKey: 'cosmetic_dentistry_solutions',
    label: 'Cosmetic Solutions',
    url: '/images/placeholder-dental-8.jpg',
    page: 'Cosmetic Dentistry',
    section: 'Expert Solutions',
    boxColor: 'amber',
    displayNumber: 6,
    fileKey: null,
    filename: null,
    mimeType: null,
    fileSize: null,
    updatedBy: 1
  },
  {
    imageKey: 'cosmetic_dentistry_implants',
    label: 'Dental Implants',
    url: '/images/placeholder-dental-9.jpg',
    page: 'Cosmetic Dentistry',
    section: 'Dental Implants',
    boxColor: 'amber',
    displayNumber: 7,
    fileKey: null,
    filename: null,
    mimeType: null,
    fileSize: null,
    updatedBy: 1
  }
];

for (const img of images) {
  await db.insert('websiteImages', img);
  console.log(`Inserted: ${img.imageKey}`);
}

console.log('Done!');
process.exit(0);
