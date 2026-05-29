import { motion } from "framer-motion";
import { ArrowLeft, Heart, Shield, Phone, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { useEffect } from "react";

export default function RestorativeEmergencyCare() {
  const headerImage = useWebsiteImage('restorative_care_header', '/images/patient_3_female_dental_chair.png');
  const rootCanalImage = useWebsiteImage('restorative_care_root_canal', '/images/patient_1_male.png');
  const extractionImage = useWebsiteImage('restorative_care_extraction', '/images/patient_2_female_braces.png');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden">
        <img
          src={headerImage}
          alt="Restorative & Emergency Care"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative container mx-auto px-6 md:px-12 h-full flex flex-col justify-end py-12">
          <Link href="/expertise" className="text-white/90 hover:text-white transition-colors flex items-center gap-2 text-sm tracking-wider mb-6">
            <ArrowLeft className="w-4 h-4" />
            BACK TO SERVICES
          </Link>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl text-white mb-4"
            >
              Restorative & Emergency
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl font-light italic"
            >
              Compassionate Care When You Need It Most
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Sidebar - The Concept */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 self-start">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">The Concept</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Restorative care is essential for maintaining oral health and addressing urgent dental issues. This care rehabilitates damaged teeth and gums while supporting overall dental well-being.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
              BOOK CONSULTATION →
            </Button>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Understanding Root Canals */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Heart className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Understanding Root Canals: A Comprehensive Overview of the Procedure
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Root canals are essential for saving teeth that are infected or damaged. Our skilled team ensures a comfortable experience throughout the entire process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    The Procedure
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We carefully remove the infected pulp and seal the tooth to prevent further issues.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Aftercare Tips
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Follow our aftercare instructions to ensure a smooth recovery and lasting results.
                  </p>
                </div>
              </div>

              <div className="aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src={rootCanalImage}
                  alt="Root canal procedure"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Understanding Extractions */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Shield className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Understanding Extractions: What to Expect During Your Dental Procedure
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Extractions are sometimes necessary to maintain your oral health. Our team ensures a comfortable experience with gentle care.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    The Procedure
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use local anesthesia to minimize discomfort during the extraction process.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Aftercare Tips
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Follow our aftercare instructions for a smooth recovery and optimal healing.
                  </p>
                </div>
              </div>

              <div className="aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src={extractionImage}
                  alt="Tooth extraction"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Immediate Care */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Phone className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Immediate Care When You Need It: Emergency Dental Services Available
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dental emergencies can happen at any time, and we're here to help. Our team provides prompt and compassionate care to address your urgent dental needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Contact Us
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Call us immediately at (916) 489-9944 for emergency dental assistance.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Our Promise
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We prioritize your comfort and swift recovery during dental emergencies.
                  </p>
                </div>
              </div>
            </section>

            {/* Comprehensive Services */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Users className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Comprehensive Restorative and Emergency Dental Services
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Walnut Whitney Dental, we provide a range of restorative and emergency services designed to address your urgent dental needs. Our skilled team is dedicated to restoring your oral health with compassion and expertise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Custom Dentures
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our custom dentures are designed for comfort and functionality.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Oral & Maxillofacial Surgery
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We offer specialized surgical solutions for complex dental issues.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    TMJ-TMD Treatment
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our TMJ-TMD treatments help alleviate jaw pain and discomfort.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Emergency Care
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Count on us for prompt and effective emergency dental care.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
