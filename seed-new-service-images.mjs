import Database from "better-sqlite3";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, ".data", "sqlite.db"));

const newImages = [
  // Restorative & Emergency Care page
  { imageKey: 'restorative_care_header', label: 'Restorative Care - Header Image', url: '/images/patient_3_female_dental_chair.png' },
  { imageKey: 'restorative_care_root_canal', label: 'Restorative Care - Root Canal Image', url: '/images/patient_1_male.png' },
  { imageKey: 'restorative_care_extraction', label: 'Restorative Care - Extraction Image', url: '/images/patient_2_female_braces.png' },
  
  // Cosmetic Dentistry page
  { imageKey: 'cosmetic_dentistry_header', label: 'Cosmetic Dentistry - Header Image', url: '/images/patient_3_female_dental_chair.png' },
  { imageKey: 'cosmetic_dentistry_whitening', label: 'Cosmetic Dentistry - Whitening Image', url: '/images/patient_1_male.png' },
  { imageKey: 'cosmetic_dentistry_veneers', label: 'Cosmetic Dentistry - Veneers Image', url: '/images/patient_2_female_braces.png' },
];

const insertStmt = db.prepare(`
  INSERT OR IGNORE INTO websiteImages (imageKey, label, url)
  VALUES (?, ?, ?)
`);

for (const img of newImages) {
  insertStmt.run(img.imageKey, img.label, img.url);
  console.log('Added: ' + img.label);
}

console.log('All new service page images added successfully!');
db.close();
