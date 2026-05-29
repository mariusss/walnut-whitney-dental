import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft, Sparkles, Zap, Clock, Shield } from "lucide-react";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Whitening() {
  const headerImage = useWebsiteImage('whitening_header', '/images/patient_8_asian_woman.jpg');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden">
        <img
          src={headerImage}
          alt="Whitening"
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
              Whitening
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl font-light italic"
            >
              Radiant Confidence
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
              Professional teeth whitening delivers dramatic results that over-the-counter products cannot match. Our advanced whitening systems safely and effectively brighten your smile by several shades in just one visit.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
              BOOK CONSULTATION →
            </Button>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Professional vs. Over-the-Counter */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Professional-Grade Results
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our professional whitening treatments use higher concentrations of whitening agents under controlled conditions, delivering superior results compared to store-bought products.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Powerful Formulation
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Professional-strength whitening gel penetrates deeper for more dramatic results.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Customized Treatment
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tailored to your specific needs and sensitivity levels for optimal comfort.
                  </p>
                </div>
              </div>
            </section>

            {/* In-Office Whitening */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Zap className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  In-Office Power Whitening
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our in-office whitening treatment delivers immediate, dramatic results in just one appointment. Advanced LED technology accelerates the whitening process for maximum effectiveness.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Immediate Results
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    See your smile brighten by 6-8 shades in just 60-90 minutes.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    LED Acceleration
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Advanced light technology enhances the whitening process for faster, more consistent results.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Protected Gums
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We carefully protect your gums and soft tissues throughout the procedure.
                  </p>
                </div>
              </div>
            </section>

            {/* Take-Home Whitening */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Clock className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Custom Take-Home Whitening
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For those who prefer to whiten at their own pace, we offer custom-fitted trays and professional-grade whitening gel for convenient at-home treatment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Custom-Fitted Trays
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Precision-molded trays ensure even coverage and prevent gel from irritating gums.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Flexible Schedule
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Whiten on your own schedule over 1-2 weeks for gradual, natural-looking results.
                  </p>
                </div>
              </div>
            </section>

            {/* Safety & Sensitivity */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Shield className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Safe & Comfortable Treatment
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We prioritize your comfort and safety with desensitizing treatments and careful monitoring throughout the whitening process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Sensitivity Management
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Special formulations and pre-treatment protocols minimize tooth sensitivity.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Enamel Protection
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our whitening systems are formulated to protect and strengthen tooth enamel.
                  </p>
                </div>
              </div>
            </section>

            {/* Maintaining Results */}
            <section>
              <div className="flex items-start gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-muted-foreground mt-1" />
                <h3 className="font-serif text-2xl md:text-3xl">
                  Maintaining Your Bright Smile
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With proper care, your whitening results can last for years. We'll provide guidance on maintaining your brilliant smile.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                  <p className="text-sm text-muted-foreground">Avoid staining foods and beverages (coffee, red wine, berries)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                  <p className="text-sm text-muted-foreground">Practice excellent oral hygiene with whitening toothpaste</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                  <p className="text-sm text-muted-foreground">Consider periodic touch-up treatments every 6-12 months</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-foreground mt-2" />
                  <p className="text-sm text-muted-foreground">Regular professional cleanings help maintain brightness</p>
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
                    How white will my teeth get?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Most patients see improvement of 6-8 shades with in-office treatment. Results vary based on your starting shade and tooth structure.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Will whitening damage my teeth?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    No. Professional whitening is safe when performed correctly. Our systems are designed to protect enamel while delivering excellent results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    How long do results last?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    With proper maintenance, whitening results typically last 1-3 years. Touch-up treatments can extend your results indefinitely.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-border">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Will my teeth be sensitive?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Some temporary sensitivity is normal but typically mild and short-lived. We use desensitizing treatments to minimize discomfort.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Can I whiten crowns or veneers?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Whitening only works on natural tooth enamel. If you have visible restorations, we can discuss options to match them to your newly whitened smile.
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
