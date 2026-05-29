import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { websiteImages } from './drizzle/schema.js';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

// Define all website images with their locations and colors
const imageSeeds = [
  // Homepage - Blue (#3B82F6)
  {
    imageKey: 'homepage_hero_bg',
    label: 'Hero Background (Not currently used)',
    page: 'Homepage',
    section: 'Hero Section - Background',
    boxColor: '#3B82F6',
    displayNumber: 1,
    fileKey: 'default/homepage-hero.jpg',
    url: '/images/walnut-dental.jpg',
    filename: 'walnut-dental.jpg',
    mimeType: 'image/jpeg',
    fileSize: 0,
    updatedBy: 1,
  },
  {
    imageKey: 'homepage_testimonial',
    label: 'Testimonial Section Background',
    page: 'Homepage',
    section: 'Real Results - Background Image',
    boxColor: '#3B82F6',
    displayNumber: 2,
    fileKey: 'default/homepage-testimonial.jpg',
    url: '/images/real-results-bg.jpg',
    filename: 'real-results-bg.jpg',
    mimeType: 'image/jpeg',
    fileSize: 0,
    updatedBy: 1,
  },
  
  // Preventive Care - Green (#10B981)
  {
    imageKey: 'preventive_care_header',
    label: 'Header Hero Image',
    page: 'Preventive Care',
    section: 'Page Header',
    boxColor: '#10B981',
    displayNumber: 3,
    fileKey: 'default/preventive-care-header.png',
    url: '/images/patient_3_female_dental_chair.png',
    filename: 'patient_3_female_dental_chair.png',
    mimeType: 'image/png',
    fileSize: 0,
    updatedBy: 1,
  },
  {
    imageKey: 'preventive_care_content_1',
    label: 'Content Image - Brushing Techniques',
    page: 'Preventive Care',
    section: 'Content Section - Top',
    boxColor: '#10B981',
    displayNumber: 4,
    fileKey: 'default/preventive-care-content-1.png',
    url: '/images/patient_1_male.png',
    filename: 'patient_1_male.png',
    mimeType: 'image/png',
    fileSize: 0,
    updatedBy: 1,
  },
  
  // Porcelain Veneers - Purple (#8B5CF6)
  {
    imageKey: 'porcelain_veneers_header',
    label: 'Header Hero Image',
    page: 'Porcelain Veneers',
    section: 'Page Header',
    boxColor: '#8B5CF6',
    displayNumber: 5,
    fileKey: 'default/porcelain-veneers-header.png',
    url: '/images/patient_2_female_braces.png',
    filename: 'patient_2_female_braces.png',
    mimeType: 'image/png',
    fileSize: 0,
    updatedBy: 1,
  },
  {
    imageKey: 'porcelain_veneers_content_1',
    label: 'Content Image - Veneer Process',
    page: 'Porcelain Veneers',
    section: 'Content Section - Top',
    boxColor: '#8B5CF6',
    displayNumber: 6,
    fileKey: 'default/porcelain-veneers-content-1.png',
    url: '/images/patient_4_senior_female.png',
    filename: 'patient_4_senior_female.png',
    mimeType: 'image/png',
    fileSize: 0,
    updatedBy: 1,
  },
  
  // Full Mouth Rehab - Orange (#F59E0B)
  {
    imageKey: 'full_mouth_rehab_header',
    label: 'Header Hero Image',
    page: 'Full Mouth Rehab',
    section: 'Page Header',
    boxColor: '#F59E0B',
    displayNumber: 7,
    fileKey: 'default/full-mouth-rehab-header.jpg',
    url: '/images/patient_6_older_man.jpg',
    filename: 'patient_6_older_man.jpg',
    mimeType: 'image/jpeg',
    fileSize: 0,
    updatedBy: 1,
  },
  {
    imageKey: 'full_mouth_rehab_content_1',
    label: 'Content Image - Treatment Process',
    page: 'Full Mouth Rehab',
    section: 'Content Section - Top',
    boxColor: '#F59E0B',
    displayNumber: 8,
    fileKey: 'default/full-mouth-rehab-content-1.jpg',
    url: '/images/patient_7_middle_woman.jpg',
    filename: 'patient_7_middle_woman.jpg',
    mimeType: 'image/jpeg',
    fileSize: 0,
    updatedBy: 1,
  },
  
  // Whitening - Pink (#EC4899)
  {
    imageKey: 'whitening_header',
    label: 'Header Hero Image',
    page: 'Whitening',
    section: 'Page Header',
    boxColor: '#EC4899',
    displayNumber: 9,
    fileKey: 'default/whitening-header.jpg',
    url: '/images/patient_8_asian_woman.jpg',
    filename: 'patient_8_asian_woman.jpg',
    mimeType: 'image/jpeg',
    fileSize: 0,
    updatedBy: 1,
  },
  {
    imageKey: 'whitening_content_1',
    label: 'Content Image - Whitening Results',
    page: 'Whitening',
    section: 'Content Section - Top',
    boxColor: '#EC4899',
    displayNumber: 10,
    fileKey: 'default/whitening-content-1.jpg',
    url: '/images/patient_9_asian_girl.jpg',
    filename: 'patient_9_asian_girl.jpg',
    mimeType: 'image/jpeg',
    fileSize: 0,
    updatedBy: 1,
  },
  
  // Invisalign - Teal (#14B8A6)
  {
    imageKey: 'invisalign_header',
    label: 'Header Hero Image',
    page: 'Invisalign',
    section: 'Page Header',
    boxColor: '#14B8A6',
    displayNumber: 11,
    fileKey: 'default/invisalign-header.jpg',
    url: '/images/patient_5_boy.jpg',
    filename: 'patient_5_boy.jpg',
    mimeType: 'image/jpeg',
    fileSize: 0,
    updatedBy: 1,
  },
  {
    imageKey: 'invisalign_content_1',
    label: 'Content Image - Aligners',
    page: 'Invisalign',
    section: 'Content Section - Top',
    boxColor: '#14B8A6',
    displayNumber: 12,
    fileKey: 'default/invisalign-content-1.png',
    url: '/images/patient_3_female_dental_chair.png',
    filename: 'patient_3_female_dental_chair.png',
    mimeType: 'image/png',
    fileSize: 0,
    updatedBy: 1,
  },
];

try {
  console.log('Seeding website images...');
  
  for (const image of imageSeeds) {
    await db.insert(websiteImages).values(image).onDuplicateKeyUpdate({
      set: {
        url: image.url,
        label: image.label,
        page: image.page,
        section: image.section,
        boxColor: image.boxColor,
        displayNumber: image.displayNumber,
      }
    });
  }
  
  console.log(`✓ Successfully seeded ${imageSeeds.length} website images`);
} catch (error) {
  console.error('Error seeding website images:', error);
  process.exit(1);
} finally {
  await connection.end();
}
