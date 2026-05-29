import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Palette, Clock, Heart } from "lucide-react";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PorcelainVeneers() {
  const headerImage = useWebsiteImage('porcelain_veneers_header', '/images/patient_2_female_braces.png');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden">
        <img
          src={headerImage}
          alt="Porcelain Veneers"
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
              Porcelain Veneers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl font-light italic"
            >
              Architectural Smile Design
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
              Porcelain veneers are ultra-thin ceramic shells customized to transform the color, shape, and size of your teeth. They offer a natural-looking solution for achieving your dream smile with minimal tooth preparation.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
              BOOK CONSULTATION →
            </Button>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Custom Design Process */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Palette className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Custom Design Process
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every veneer is meticulously crafted to match your facial features, personality, and desired aesthetic. We use advanced digital smile design technology to preview your results before treatment begins.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Digital Smile Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Visualize your new smile before we begin with our advanced 3D imaging technology.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Personalized Aesthetics
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Each veneer is custom-colored and shaped to complement your unique features.
                  </p>
                </div>
              </div>
            </section>

            {/* Material Excellence */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Premium Ceramic Materials
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We use only the highest quality porcelain materials that mimic the natural translucency and light-reflecting properties of tooth enamel, ensuring your veneers look completely natural.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Stain Resistant
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Porcelain veneers resist staining better than natural teeth, maintaining their brightness.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Long-Lasting Durability
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With proper care, veneers can last 10-15 years or longer.
                  </p>
                </div>
              </div>
            </section>

            {/* Treatment Timeline */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Clock className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  The Veneer Journey
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Your transformation typically requires 2-3 visits over 2-3 weeks. We'll guide you through each step with care and precision.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Consultation & Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We discuss your goals, take impressions, and create your custom smile design.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Preparation & Temporaries
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Minimal tooth preparation is done, and temporary veneers are placed while your custom veneers are crafted.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Final Placement
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your permanent veneers are bonded with precision, revealing your transformed smile.
                  </p>
                </div>
              </div>
            </section>

            {/* Ideal Candidates */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Heart className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Perfect For
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Veneers are an excellent solution for various cosmetic concerns, transforming smiles with minimal intervention.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Discolored or stained teeth</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Chipped or worn teeth</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Gaps between teeth</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Misaligned or uneven teeth</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Irregularly shaped teeth</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Overall smile enhancement</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-muted/30 p-8 md:p-12 rounded-sm">
              <h3 className="font-serif text-2xl md:text-3xl mb-8">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    How long do veneers last?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    With proper care and maintenance, porcelain veneers typically last 10-15 years or longer. Regular dental check-ups and good oral hygiene help maximize their lifespan.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Are veneers reversible?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Because a small amount of enamel is removed during preparation, veneers are considered a permanent treatment. However, they can be replaced if needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Do veneers look natural?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes! High-quality porcelain veneers are custom-crafted to match the translucency and color of natural teeth, making them virtually indistinguishable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Is the procedure painful?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    The procedure is minimally invasive and typically requires only local anesthesia. Most patients experience little to no discomfort during or after treatment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    How do I care for veneers?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Care for veneers just like natural teeth: brush twice daily, floss regularly, and visit your dentist for routine check-ups. Avoid using your teeth as tools and consider a night guard if you grind your teeth.
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
