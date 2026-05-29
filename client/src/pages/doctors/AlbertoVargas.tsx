import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Award, GraduationCap, Heart } from "lucide-react";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { useEffect } from "react";

export default function AlbertoVargas() {
  const drVargasPhoto = useWebsiteImage('doctor_vargas_photo', '/images/dr-alberto-vargas.png');

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
              Dr. Alberto Vargas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm tracking-widest text-muted-foreground uppercase"
            >
              Associate Dentist
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
                src={drVargasPhoto}
                alt="Dr. Alberto Vargas"
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
                <span className="italic text-muted-foreground/70 font-light">Dr. Vargas</span>
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
                <p>
                  Dr. Vargas is a dedicated associate dentist who takes pride in providing compassionate, high-quality care for patients of all ages. He earned his Doctor of Dental Surgery degree from the Indiana University School of Dentistry in 2019, graduating with high marks.
                </p>
                <p>
                  With a strong focus on restorative and family dentistry, Dr. Vargas is committed to helping patients achieve healthy, confident smiles. He stays current with the latest advancements in dental technology and techniques through continuing education, ensuring his patients receive the most effective and comfortable care possible.
                </p>
                <p>
                  As a father of three, Dr. Vargas enjoys working with children and creating positive dental experiences for young patients. Outside the office, he loves playing soccer, golfing, and spending time with his family.
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
                    Doctor of Dental Surgery (DDS), Indiana University School of Dentistry, 2019
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-foreground/60 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Specialization</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Restorative & Family Dentistry
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-foreground/60 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Philosophy</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    "I take pride in providing compassionate, high-quality care for patients of all ages, helping them achieve healthy, confident smiles."
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
              Schedule a Consultation with Dr. Vargas
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
