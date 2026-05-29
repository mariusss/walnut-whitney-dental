import { motion } from "framer-motion";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Expertise() {
  // Fetch images from database
  const headerImage = useWebsiteImage('expertise_header', '/images/patient_3_female_dental_chair.png');
  const preventiveImg = useWebsiteImage("services_preventive_1", "/images/placeholder-dental-1.jpg");
  const restorativeImg = useWebsiteImage("services_restorative_1", "/images/placeholder-dental-4.jpg");
  const cosmeticImg = useWebsiteImage("services_cosmetic_1", "/images/placeholder-dental-3.jpg");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Header Section */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden">
        <img
          src={headerImage}
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative container mx-auto px-6 md:px-12 h-full flex flex-col justify-end py-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl font-light italic"
          >
            Comprehensive Dental Care Tailored for You
          </motion.p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Walnut Whitney Dental, we offer a wide range of services to meet your dental needs. Our expertise spans Preventive Care, Restorative & Emergency Care, and Cosmetic Dentistry, ensuring that every patient receives the best possible treatment. We are dedicated to providing compassionate care that enhances your oral health and overall well-being.
          </p>
        </motion.div>
      </section>

      {/* Three Main Service Categories */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Preventive Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                Preventive Care for a Bright and Healthy Smile
              </h3>
              <p className="text-muted-foreground/80 leading-relaxed mb-6">
                Our preventive services help you maintain optimal oral health.
              </p>
              <button
                onClick={() => document.getElementById('preventive-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
                aria-label="Scroll to Preventive Care section"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Restorative & Emergency Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                Restorative & Emergency Care When You Need It
              </h3>
              <p className="text-muted-foreground/80 leading-relaxed mb-6">
                We provide prompt and effective solutions for dental emergencies.
              </p>
              <button
                onClick={() => document.getElementById('restorative-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
                aria-label="Scroll to Restorative & Emergency Care section"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Cosmetic Dentistry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                Transform Your Smile with Cosmetic Dentistry
              </h3>
              <p className="text-muted-foreground/80 leading-relaxed mb-6">
                Our cosmetic services enhance your smile's appearance and confidence.
              </p>
              <button
                onClick={() => document.getElementById('cosmetic-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
                aria-label="Scroll to Cosmetic Dentistry section"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preventive Care Detail Section */}
      <section id="preventive-section" className="container mx-auto px-6 md:px-12 py-16 md:py-24 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Comprehensive Preventive Care for Your Smile
            </h2>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-12">
              At Walnut Whitney Dental, we prioritize your oral health through our extensive preventive care services. Our goal is to help you maintain a healthy smile and prevent dental issues before they arise.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl mb-3">Oral Hygiene</h3>
                <p className="text-muted-foreground/80 leading-relaxed">
                  Brushing and flossing are essential for optimal dental health and preventing cavities.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl mb-3">Protective Treatments</h3>
                <p className="text-muted-foreground/80 leading-relaxed">
                  Sealants and fluoride treatments shield your teeth from decay and strengthen enamel.
                </p>
              </div>
            </div>

            <Link href="/services/preventive-care">
              <Button variant="outline" className="mt-8 rounded-full px-8 py-6 text-xs tracking-widest font-medium">
                LEARN MORE
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={preventiveImg}
                alt="Preventive dental care"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Restorative & Emergency Care Section */}
      <section id="restorative-section" className="container mx-auto px-6 md:px-12 py-16 md:py-24 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={restorativeImg}
                alt="Restorative dental care"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Comprehensive Restorative & Emergency Dental Services
            </h2>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-12">
              At Walnut Whitney Dental, we understand that dental emergencies can happen at any time. Our dedicated team is here to provide prompt and effective care to restore your smile and comfort.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl mb-3">Root Canals</h3>
                <p className="text-muted-foreground/80 leading-relaxed">
                  Save your tooth with our gentle root canal treatments.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl mb-3">Extractions</h3>
                <p className="text-muted-foreground/80 leading-relaxed">
                  We perform safe and comfortable tooth extractions when necessary.
                </p>
              </div>
            </div>

            <Link href="/services/restorative-emergency-care">
              <Button variant="outline" className="mt-8 rounded-full px-8 py-6 text-xs tracking-widest font-medium">
                LEARN MORE
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cosmetic Dentistry Section */}
      <section id="cosmetic-section" className="container mx-auto px-6 md:px-12 py-16 md:py-24 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Transform Your Smile with Cosmetic Dentistry
            </h2>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-12">
              At Walnut Whitney Dental, we offer a range of cosmetic dentistry services designed to enhance your smile. From teeth whitening to dental implants, our expert team is here to help you achieve the look you've always wanted.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl mb-3">Teeth Whitening</h3>
                <p className="text-muted-foreground/80 leading-relaxed">
                  Brighten your smile with our professional teeth whitening treatments for a radiant appearance.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl mb-3">Dental Veneers</h3>
                <p className="text-muted-foreground/80 leading-relaxed">
                  Achieve a flawless smile with custom dental veneers tailored to your unique needs.
                </p>
              </div>
            </div>

            <Link href="/services/cosmetic-dentistry">
              <Button variant="outline" className="mt-8 rounded-full px-8 py-6 text-xs tracking-widest font-medium">
                LEARN MORE
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={cosmeticImg}
                alt="Cosmetic dentistry"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0a0a0a] text-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Schedule Your Preventive Appointment
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Protect your smile with our preventive care services.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-6 text-xs tracking-widest font-medium min-w-[200px] transition-all duration-300">
                BOOK CONSULTATION
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
