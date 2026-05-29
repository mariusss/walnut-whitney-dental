import { getDb } from "./server/db";
import { websiteImages } from "./drizzle/schema";

const serviceImages = [
  // Preventive Care Page
  {
    imageKey: 'preventive_care_header',
    label: 'Header Image',
    page: 'Preventive Care',
    section: 'Hero Section',
    boxColor: '#3B82F6',
    displayNumber: 1,
    fileKey: 'default/patient_3_female_dental_chair.png',
    url: '/images/patient_3_female_dental_chair.png',
    filename: 'patient_3_female_dental_chair.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'preventive_care_brushing',
    label: 'Brushing & Flossing Image',
    page: 'Preventive Care',
    section: 'Content - Brushing Techniques',
    boxColor: '#3B82F6',
    displayNumber: 2,
    fileKey: 'default/patient_1_male.png',
    url: '/images/patient_1_male.png',
    filename: 'patient_1_male.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'preventive_care_sleep',
    label: 'Sleep Apnea Image',
    page: 'Preventive Care',
    section: 'Content - Sleep Solutions',
    boxColor: '#3B82F6',
    displayNumber: 3,
    fileKey: 'default/patient_2_female_braces.png',
    url: '/images/patient_2_female_braces.png',
    filename: 'patient_2_female_braces.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'preventive_care_xray',
    label: 'Digital X-Ray Image',
    page: 'Preventive Care',
    section: 'Content - Digital X-Rays',
    boxColor: '#3B82F6',
    displayNumber: 4,
    fileKey: 'default/patient_4_senior_female.png',
    url: '/images/patient_4_senior_female.png',
    filename: 'patient_4_senior_female.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'preventive_care_wisdom_teeth',
    label: 'Wisdom Teeth Image 1',
    page: 'Preventive Care',
    section: 'Content - Wisdom Teeth',
    boxColor: '#3B82F6',
    displayNumber: 5,
    fileKey: 'default/patient_1_male.png',
    url: '/images/patient_1_male.png',
    filename: 'patient_1_male.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'preventive_care_education',
    label: 'Wisdom Teeth Image 2',
    page: 'Preventive Care',
    section: 'Content - Patient Education',
    boxColor: '#3B82F6',
    displayNumber: 6,
    fileKey: 'default/patient_4_senior_female.png',
    url: '/images/patient_4_senior_female.png',
    filename: 'patient_4_senior_female.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  
  // Restorative & Emergency Care Page
  {
    imageKey: 'restorative_care_header',
    label: 'Header Image',
    page: 'Restorative & Emergency Care',
    section: 'Hero Section',
    boxColor: '#10B981',
    displayNumber: 1,
    fileKey: 'default/patient_3_female_dental_chair.png',
    url: '/images/patient_3_female_dental_chair.png',
    filename: 'patient_3_female_dental_chair.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'restorative_care_root_canal',
    label: 'Root Canal Image',
    page: 'Restorative & Emergency Care',
    section: 'Content - Root Canals',
    boxColor: '#10B981',
    displayNumber: 2,
    fileKey: 'default/patient_1_male.png',
    url: '/images/patient_1_male.png',
    filename: 'patient_1_male.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'restorative_care_extraction',
    label: 'Extraction Image',
    page: 'Restorative & Emergency Care',
    section: 'Content - Extractions',
    boxColor: '#10B981',
    displayNumber: 3,
    fileKey: 'default/patient_2_female_braces.png',
    url: '/images/patient_2_female_braces.png',
    filename: 'patient_2_female_braces.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  
  // Cosmetic Dentistry Page
  {
    imageKey: 'cosmetic_dentistry_header',
    label: 'Header Image',
    page: 'Cosmetic Dentistry',
    section: 'Hero Section',
    boxColor: '#F59E0B',
    displayNumber: 1,
    fileKey: 'default/patient_3_female_dental_chair.png',
    url: '/images/patient_3_female_dental_chair.png',
    filename: 'patient_3_female_dental_chair.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'cosmetic_dentistry_whitening',
    label: 'Teeth Whitening Image',
    page: 'Cosmetic Dentistry',
    section: 'Content - Teeth Whitening',
    boxColor: '#F59E0B',
    displayNumber: 2,
    fileKey: 'default/patient_1_male.png',
    url: '/images/patient_1_male.png',
    filename: 'patient_1_male.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
  {
    imageKey: 'cosmetic_dentistry_veneers',
    label: 'Dental Veneers Image',
    page: 'Cosmetic Dentistry',
    section: 'Content - Veneers',
    boxColor: '#F59E0B',
    displayNumber: 3,
    fileKey: 'default/patient_2_female_braces.png',
    url: '/images/patient_2_female_braces.png',
    filename: 'patient_2_female_braces.png',
    mimeType: 'image/png',
    fileSize: 1024,
    updatedBy: 1,
  },
];

async function seed() {
  console.log('Seeding service page images...');
  
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    process.exit(1);
  }
  
  for (const image of serviceImages) {
    await db.insert(websiteImages).values(image).onDuplicateKeyUpdate({
      set: {
        label: image.label,
        page: image.page,
        section: image.section,
        boxColor: image.boxColor,
        displayNumber: image.displayNumber,
      },
    });
    console.log('Added: ' + image.page + ' - ' + image.label);
  }
  
  console.log('All service page images seeded successfully!');
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
