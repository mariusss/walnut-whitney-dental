import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Award, GraduationCap, Heart } from "lucide-react";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { useEffect } from "react";

export default function CameliaCifor() {
  const drCiforPhoto = useWebsiteImage('doctor_vance_photo', '/images/dr-camelia-cifor.png');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden bg-muted/30">
        <div className="relative container mx-auto px-6 md:px-12 h-full flex flex-col justify-end py-12">
          <Link href="/doctors" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-wider mb-6">
            <ArrowLeft className="w-4 h-4" />
            BACK TO DOCTORS
          </Link>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl mb-4"
            >
              Dr. Camelia Cifor
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm tracking-widest text-muted-foreground uppercase"
            >
              Founder & Lead Cosmetic Dentist
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={drCiforPhoto}
                alt="Dr. Camelia Cifor"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 space-y-8"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Introducing{" "}
                <span className="italic text-muted-foreground/70 font-light">Dr. Cifor</span>
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
                <p>
                  Dr. Camelia Cifor is a dedicated dental professional with a passion for providing exceptional care to her patients. With over a decade of experience, she combines her expertise in general and cosmetic dentistry to help individuals achieve their dream smiles. Dr. Cifor believes in a patient-centered approach, ensuring that each person feels comfortable and informed throughout their treatment journey.
                </p>
                <p>
                  After earning her Doctor of Dental Surgery (DDS) degree, Dr. Cifor completed extensive training in aesthetic procedures, which allows her to offer a range of services from routine check-ups to advanced cosmetic enhancements. Her commitment to continuing education ensures that she stays updated with the latest techniques and technologies in dentistry.
                </p>
                <p>
                  Patients appreciate Dr. Cifor's compassionate demeanor and her ability to explain complex procedures in an understandable way. She takes the time to listen to her patients' concerns, tailoring her approach to meet their unique needs. This dedication has earned her a loyal patient base who trust her with their dental health.
                </p>
                <p>
                  Outside of the office, Dr. Cifor enjoys spending time with her family and engaging in community service. She believes in giving back and often participates in local health fairs and educational programs to promote oral health awareness.
                </p>
                <p>
                  At Walnut Whitney Dental, Dr. Cifor is excited to welcome new patients and help them embark on their journey to optimal oral health. Schedule an appointment today to experience her exceptional care firsthand.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-6 pt-8 border-t border-foreground/10">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-foreground/60 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Graduated from a prestigious dental school with honors
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-foreground/60 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Credentials</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Licensed dentist with certifications in advanced cosmetic dentistry
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-foreground/60 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Philosophy</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    "I believe in a patient-centered approach, ensuring that each person feels comfortable and informed throughout their treatment journey."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Schedule a Consultation with Dr. Cifor
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience personalized dental care that combines expertise with compassion.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 text-sm tracking-wider uppercase">
                Book Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
