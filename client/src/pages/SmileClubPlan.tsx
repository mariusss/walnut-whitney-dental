import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";

export default function SmileClubPlan() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Two Prophy/Cleaning per year",
    "Fluoride treatments",
    "Two Check-up Exams",
    "One Emergency Exam",
    "Oral Cancer Screening",
    "Unlimited X-rays (as deemed necessary)",
    "15% Discount on Diagnostics, Restorative, Endodontic, Periodontic and Oral Surgery procedures"
  ];

  const whyChoose = [
    "NO Maximums",
    "NO Deductibles",
    "NO Waiting Periods"
  ];

  const importantTerms = [
    "Membership fee due at enrollment",
    "12-month agreement term",
    "Benefits do not roll over",
    "Cannot be combined with insurance",
    "Unused benefits are non-refundable"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Walnut Whitney<br />
            <span className="italic text-muted-foreground/70 font-light">Smile Club</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A membership based program offering dental benefits and discounts without the hassles of traditional insurance.
          </p>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-sm p-8 md:p-12 mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">Why Choose Smile Club?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits and Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Membership Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 rounded-sm p-8"
          >
            <h2 className="font-serif text-3xl mb-8">Membership Benefits</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Annual Fees */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 rounded-sm p-8"
          >
            <h2 className="font-serif text-3xl mb-8">Annual Fees</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-foreground/10">
                <span className="text-lg">Adult Patients</span>
                <span className="text-2xl font-serif text-[#D4AF37]">$320.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-foreground/10">
                <span className="text-lg">Additional Family Member</span>
                <span className="text-2xl font-serif text-[#D4AF37]">$300.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-foreground/10">
                <span className="text-lg">Children (under 15)</span>
                <span className="text-2xl font-serif text-[#D4AF37]">$200.00</span>
              </div>
            </div>

            {/* Important Terms */}
            <div className="mt-8 p-6 bg-muted/30 rounded-sm">
              <h3 className="font-serif text-xl mb-4 flex items-center gap-2">
                <span className="text-[#D4AF37]">ⓘ</span> Important Terms
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {importantTerms.map((term, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0"></span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Join?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Start saving on your dental care today. Contact us to enroll in the Walnut Whitney Smile Club and enjoy comprehensive coverage without the insurance hassles.
          </p>
          <Link href="/contact">
            <button className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm hover:bg-foreground/90 transition-colors duration-300">
              <span className="text-sm tracking-wider">ENROLL NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
