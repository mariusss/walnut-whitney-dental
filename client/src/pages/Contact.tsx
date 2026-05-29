import { motion, AnimatePresence } from "framer-motion";
import { Clock, Mail, MapPin, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function Contact() {
  const [location, setLocation] = useLocation();
  const [isClosing, setIsClosing] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Listen for close event from header button
  useEffect(() => {
    const handleCloseEvent = () => handleClose();
    window.addEventListener('closeContactPage', handleCloseEvent);
    return () => window.removeEventListener('closeContactPage', handleCloseEvent);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      const previousPage = sessionStorage.getItem('contactReferrer') || '/';
      sessionStorage.removeItem('contactReferrer');
      setLocation(previousPage);
    }, 600);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "ADDRESS",
      content: (
        <a
          href="https://maps.google.com/?q=3501+Walnut+Avenue,+Carmichael,+CA+95608"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 hover:text-white transition-colors"
        >
          3501 Walnut Avenue<br />Carmichael, CA 95608
        </a>
      ),
    },
    {
      icon: Phone,
      label: "DIRECT LINE",
      content: (
        <a href="tel:+19164899944" className="text-white/90 hover:text-white transition-colors">
          (916) 489-9944
        </a>
      ),
    },
    {
      icon: Mail,
      label: "EMAIL",
      content: (
        <a href="mailto:smile@walnutwhitneydental.com" className="text-white/90 hover:text-white transition-colors">
          smile@walnutwhitneydental.com
        </a>
      ),
    },
    {
      icon: Clock,
      label: "HOURS",
      content: (
          <div className="text-white/90 space-y-1">
                  <p className="whitespace-nowrap">Mon – Tue: 9:00 AM – 5:30 PM</p>
                  <p className="whitespace-nowrap">Wed – Thu: 7:00 AM – 3:30 PM</p>
                  <p className="whitespace-nowrap">Fri – Sun: Closed</p>
                </div>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          className="bg-[#0a0a0a] min-h-screen pt-32 md:pt-48 text-white relative"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="fixed top-32 md:top-40 right-6 md:right-12 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors group cursor-pointer"
            aria-label="Close contact page"
          >
            <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="container mx-auto px-6 md:px-12 pb-20">
            {/* Page Header */}
            <div className="mb-16 md:mb-20">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white">
                Let's Discuss<br />
                <span className="font-serif italic text-white/80">Your Smile.</span>
              </h1>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16" style={{gridTemplateColumns: 'repeat(3, minmax(0, 1fr)) minmax(0, 1.6fr)'}}>
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0a0a0a] p-8 md:p-10 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-white/50 flex-shrink-0" />
                    <p className="text-xs uppercase tracking-widest text-white/50">{item.label}</p>
                  </div>
                  <div className="text-white/90 leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-white/10 mb-16" />

            {/* Map Section */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-white/50 mb-6">FIND US</h2>
              <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.877760392419!2d-121.34656400000001!3d38.62869310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adc0276fa7c87%3A0x6f5f1dcd680fdd!2s3501%20Walnut%20Ave%2C%20Carmichael%2C%20CA%2095608!5e0!3m2!1sen!2sus!4v1768007890524!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Walnut Whitney Dental Location"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
