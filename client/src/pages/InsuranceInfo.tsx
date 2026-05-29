import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, FileText, Phone, CreditCard, IdCard, ClipboardList } from "lucide-react";
import { useEffect } from "react";

export default function InsuranceInfo() {
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
            Insurance{" "}
            <span className="italic text-muted-foreground/70 font-light">Information</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We accept most major PPO plans and handle all the paperwork for you. Our team is here to help maximize your insurance benefits.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* PPO Insurance Accepted */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="font-serif text-3xl">PPO Plans Welcome</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We accept most major PPO dental insurance plans. Our experienced team will verify your coverage and help you understand your benefits before treatment begins.
              </p>
              <p>
                We handle all insurance paperwork and filing on your behalf, making the process as smooth and stress-free as possible. Our goal is to maximize your insurance benefits while providing exceptional dental care.
              </p>
            </div>
          </motion.div>

          {/* Verification Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="font-serif text-3xl">Verify Your Coverage</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every insurance plan is different, with varying coverage levels and benefits. We recommend calling our office to verify your specific coverage details.
              </p>
              <p>
                Our knowledgeable staff will review your plan and provide a clear breakdown of what's covered, any out-of-pocket costs, and help you plan your treatment accordingly.
              </p>
              <div className="mt-6 p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-sm">
                <p className="font-medium text-foreground mb-2">Call us today:</p>
                <a href="tel:916-489-9944" className="text-2xl font-serif text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors">
                  916-489-9944
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-sm p-8 md:p-12 mb-12"
        >
          <h2 className="font-serif text-3xl mb-6 text-center">What to Bring</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <CreditCard className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <h3 className="font-medium mb-2">Insurance Card</h3>
              <p className="text-sm text-muted-foreground">Bring your current insurance card to your appointment</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <IdCard className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <h3 className="font-medium mb-2">Photo ID</h3>
              <p className="text-sm text-muted-foreground">Valid driver's license or government-issued ID</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <ClipboardList className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <h3 className="font-medium mb-2">Medical History</h3>
              <p className="text-sm text-muted-foreground">Complete health history form before your visit</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Questions About Your Coverage?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our team is here to help you understand your insurance benefits and make the most of your coverage. Contact us today to discuss your options.
          </p>
          <Link href="/contact">
            <button className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm hover:bg-foreground/90 transition-colors duration-300">
              <span className="text-sm tracking-wider">CONTACT US</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
