import { motion } from "framer-motion";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";

export default function Doctor() {
  const doctorPhoto = useWebsiteImage('doctor_photo', '/images/dr-camelia-cifor.png');
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <h1 className="font-serif text-5xl md:text-6xl mb-12 leading-tight">
            The{" "}
            <span className="italic text-muted-foreground/70 font-light">Artist</span>
          </h1>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              Dr. Camelia Cifor founded Walnut Whitney Dental with a singular vision: to provide exceptional dental care in a welcoming, patient-centered environment.
            </p>
            <p>
              With over a decade of clinical excellence and expertise in general and cosmetic dentistry, Dr. Cifor approaches every case not just as a medical procedure, but as an opportunity to transform lives through beautiful, healthy smiles.
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src={doctorPhoto} 
              alt="Dr. Camelia Cifor" 
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
