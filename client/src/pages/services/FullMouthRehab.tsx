import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft, Heart, Zap, Users, Award } from "lucide-react";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FullMouthRehab() {
  const headerImage = useWebsiteImage('full_mouth_rehab_header', '/images/patient_6_older_man.jpg');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden">
        <img
          src={headerImage}
          alt="Full Mouth Rehab"
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
              Full Mouth Rehab
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl font-light italic"
            >
              Complete Restoration & Transformation
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
              Full mouth rehabilitation restores function and aesthetics through a combination of restorative and cosmetic procedures. This comprehensive approach addresses multiple dental issues simultaneously, transforming your oral health and smile.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
              BOOK CONSULTATION →
            </Button>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Comprehensive Assessment */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Heart className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Comprehensive Evaluation
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We begin with a thorough assessment of your oral health, bite alignment, jaw function, and aesthetic goals. This holistic approach ensures every aspect of your smile is addressed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Functional Analysis
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We evaluate your bite, jaw joints, and muscle function to ensure optimal oral health.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Aesthetic Planning
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Digital smile design helps visualize your final results before treatment begins.
                  </p>
                </div>
              </div>
            </section>

            {/* Treatment Modalities */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Zap className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Integrated Treatment Approach
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Full mouth rehabilitation may combine multiple procedures tailored to your specific needs, including dental implants, crowns, bridges, veneers, and orthodontics.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Dental Implants
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Replace missing teeth with permanent, natural-looking implants that function like your own teeth.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Restorative Crowns & Bridges
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rebuild damaged or missing teeth with custom-crafted restorations.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Cosmetic Enhancements
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Veneers and whitening treatments perfect the aesthetic appearance of your smile.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Orthodontic Correction
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Align teeth and correct bite issues for optimal function and aesthetics.
                  </p>
                </div>
              </div>
            </section>

            {/* Ideal Candidates */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Users className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Who Benefits from Full Mouth Rehab?
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Full mouth rehabilitation is ideal for patients with extensive dental damage, multiple missing teeth, or those seeking a complete smile transformation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Multiple missing or damaged teeth</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Severe tooth wear or erosion</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">TMJ disorders or bite problems</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Failed previous dental work</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Chronic dental pain or discomfort</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                    <p className="text-sm text-muted-foreground">Desire for complete smile makeover</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Timeline */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Award className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  The Rehabilitation Journey
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Treatment timelines vary based on individual needs, typically ranging from several months to a year. We'll create a personalized treatment plan with clear milestones.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Phased Approach
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Treatment is carefully sequenced to ensure comfort and optimal results at each stage.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Ongoing Support
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We provide comprehensive care throughout your journey and beyond.
                  </p>
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
                    How long does full mouth rehab take?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Treatment duration varies based on complexity, typically ranging from 6 months to 18 months. We'll provide a detailed timeline during your consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Is the procedure painful?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We prioritize your comfort with sedation options and pain management. Most patients report minimal discomfort during and after procedures.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    What is the success rate?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    With proper planning and execution, full mouth rehabilitation has excellent long-term success rates, often exceeding 95% for well-maintained restorations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Will I have teeth during treatment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes! We provide temporary restorations throughout treatment so you're never without teeth. You'll maintain function and aesthetics at every stage.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    How do I maintain my results?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Regular dental visits, excellent home care, and following our maintenance recommendations will help your rehabilitation last for decades.
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
