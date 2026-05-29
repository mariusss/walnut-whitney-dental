import { motion } from "framer-motion";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { useEffect } from "react";

export default function Gallery() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch gallery images from database
  const galleryImg1 = useWebsiteImage("gallery_item_1", "/images/patient_1_male.png");
  const galleryImg2 = useWebsiteImage("gallery_item_2", "/images/patient_2_female_braces.png");
  const galleryImg3 = useWebsiteImage("gallery_item_3", "/images/patient_3_female_dental_chair.png");
  const galleryImg4 = useWebsiteImage("gallery_item_4", "/images/patient_4_senior_female.png");

  const works = [
    { id: 1, title: "The Minimalist", category: "Natural Brights", img: galleryImg1 },
    { id: 2, title: "The Classic", category: "Full Alignment", img: galleryImg2 },
    { id: 3, title: "The Radiance", category: "Whitening", img: galleryImg3 },
    { id: 4, title: "The Restoration", category: "Reconstruction", img: galleryImg4 },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-5xl md:text-6xl mb-16"
      >
        Selected Works
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={work.img} 
                alt={work.title}
                loading="lazy" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
