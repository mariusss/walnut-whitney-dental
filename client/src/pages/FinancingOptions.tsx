import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CreditCard, Clock } from "lucide-react";
import { useEffect } from "react";

export default function FinancingOptions() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            CareCredit{" "}
            <span className="italic text-muted-foreground/70 font-light">Information</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Think of CareCredit as your own health, wellness and beauty credit card. Whether it's oral surgery, getting a crown or a general check up, you shouldn't have to worry about how to get the procedures you want. That's why we're pleased to accept the CareCredit health, wellness and beauty credit card.
          </p>
        </motion.div>

        {/* Flexible Financing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-background border border-foreground/10 rounded-sm p-8 md:p-12 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-8 h-8 text-[#D4AF37]" />
            <h2 className="font-serif text-3xl md:text-4xl">Flexible Financing</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              CareCredit lets you say "Yes" to recommended surgical and non-surgical dental procedures, and pay for them in convenient monthly payments that fit your financial situation.
            </p>
            <p>
              CareCredit is a healthcare credit card that helps you pay for treatments and procedures for you or your family that may not be covered by insurance. With special financing options* You can use your CareCredit card again and again for your dental needs, as well as at 200,000 other healthcare providers, including dentists, optometrists, veterinarians, ophthalmologists and hearing specialists.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Instant Decision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="font-serif text-2xl">Instant Decision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              It's free and easy to apply and you'll receive a decision immediately. If you're approved, you can schedule your procedures even before you receive your card.
            </p>
          </motion.div>

          {/* Trusted Source */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 text-[#D4AF37] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl">Trusted Source</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              With more than 21 million accounts opened since CareCredit began nearly 30 years ago, they are the trusted source for healthcare credit cards.
            </p>
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
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Apply?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Apply online for your CareCredit healthcare credit card today. You'll be smiling brighter in no time!
          </p>
          <a href="https://www.carecredit.com" target="_blank" rel="noopener noreferrer">
            <button className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm hover:bg-foreground/90 transition-colors duration-300">
              <span className="text-sm tracking-wider">APPLY FOR CARECREDIT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
          <p className="text-sm text-muted-foreground mt-6">
            *Subject to credit approval. Minimum monthly payments required. Visit www.carecredit.com for details.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
