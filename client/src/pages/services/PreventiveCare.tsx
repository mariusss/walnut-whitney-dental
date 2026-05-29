import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Shield, Activity, Moon, X as XRay, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PreventiveCare() {
  const headerImage = useWebsiteImage('preventive_care_header', '/images/patient_3_female_dental_chair.png');
  const brushingImage = useWebsiteImage('preventive_care_brushing', '/images/patient_1_male.png');
  const sleepImage = useWebsiteImage('preventive_care_sleep', '/images/patient_2_female_braces.png');
  const xrayImage = useWebsiteImage('preventive_care_xray', '/images/patient_4_senior_female.png');
  const wisdomTeethImage = useWebsiteImage('preventive_care_wisdom_teeth', '/images/patient_1_male.png');
  const educationImage = useWebsiteImage('preventive_care_education', '/images/patient_4_senior_female.png');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden">
        <img
          src={headerImage}
          alt="Preventive Care"
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
              Preventive Care
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl font-light italic"
            >
              Protect Your Smile
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
              Preventive dental care is essential for maintaining long-term oral health and enhancing overall well-being. Regular check-ups, cleanings, and good hygiene practices play a crucial role in preventing dental issues and ensuring a healthy smile.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
              BOOK CONSULTATION →
            </Button>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Mastering Brushing and Flossing */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Mastering Brushing and Flossing Techniques
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Effective brushing and flossing are essential for maintaining optimal oral health. Discover the best practices to keep your smile bright and healthy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Brushing Tips
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Use a soft-bristled toothbrush and fluoride toothpaste for optimal cleaning.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Flossing Tips
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Floss daily to remove plaque and food particles between teeth.
                  </p>
                </div>
              </div>

              <div className="aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src={brushingImage}
                  alt="Brushing techniques"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Dental Sealants */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Shield className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Protect Your Teeth with Dental Sealants
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dental sealants are a preventive measure that shields teeth from decay. They create a protective barrier, especially for molars, to keep cavities at bay.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    How They Work
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sealants fill in the grooves of teeth, preventing food particles and bacteria from settling.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Benefits
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    They are quick to apply and can significantly reduce the risk of cavities.
                  </p>
                </div>
              </div>
            </section>

            {/* Essential Preventive Care */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Activity className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Essential Preventive Care for Your Dental Health
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Preventive care is vital for maintaining optimal oral health. Our services help you avoid serious dental issues and keep your smile bright.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Fluoride Treatments
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fluoride treatments help to remineralize enamel and prevent cavities.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Custom Mouthguards
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Custom mouthguards are essential for safeguarding teeth during athletic activities.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Oral Cancer Screening
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Regular screenings can identify potential issues before they become serious.
                  </p>
                </div>
              </div>
            </section>

            {/* Sleep Apnea */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Moon className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Effective Solutions for Snoring and Sleep Apnea
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Struggling with snoring or sleep apnea? Our dental solutions can help improve your sleep quality and overall health.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={sleepImage}
                    alt="Sleep solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={xrayImage}
                    alt="Dental examination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Digital X-Rays */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <XRay className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Enhancing Care with Digital X-Rays
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Digital X-rays revolutionize the way we diagnose dental issues. They provide clearer images and reduce radiation exposure, ensuring safer and more effective treatment planning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Clear Imaging
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Experience superior image quality for accurate diagnosis and treatment.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Safer Procedures
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lower radiation levels protect your health while ensuring effective care.
                  </p>
                </div>
              </div>
            </section>

            {/* Wisdom Teeth */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Users className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Understanding Wisdom Teeth
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wisdom teeth, often emerging in late adolescence, can lead to various dental issues. Our team is here to provide expert management and safe extraction when necessary.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Expert Care
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We ensure a comfortable experience during wisdom teeth evaluations and procedures.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Patient Education
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Learn about the importance of timely wisdom teeth management for your oral health.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={wisdomTeethImage}
                    alt="Wisdom teeth consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={educationImage}
                    alt="Patient education"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Occlusal Disease */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Activity className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Understanding Occlusal Disease
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Occlusal disease refers to issues related to the alignment of your teeth and jaw. Proper management can alleviate discomfort and prevent further dental complications.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="bg-muted/30 p-8 md:p-12 rounded-sm">
              <h3 className="font-serif text-2xl md:text-3xl mb-8">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    What is preventive care?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Preventive care includes regular dental check-ups, cleanings, and practices that help maintain oral health and prevent dental issues before they develop.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    How often should I visit?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We recommend visiting every six months for routine check-ups and cleanings to maintain optimal oral health.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    What are sealants?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Dental sealants are thin protective coatings applied to the chewing surfaces of back teeth to prevent cavities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Do I need fluoride?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Fluoride treatments help strengthen tooth enamel and prevent decay, especially beneficial for children and those at higher risk of cavities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    What is oral cancer screening?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Oral cancer screening is a routine examination to detect early signs of oral cancer, allowing for prompt treatment if needed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
