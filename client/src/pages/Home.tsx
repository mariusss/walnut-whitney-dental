import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";

// Updated: Real Results background image replaced
export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  // Fetch Real Results background image from database (Box #2)
  const realResultsBgImage = useWebsiteImage("homepage_testimonial_bg", "/images/walnut-dental.jpg");

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "From the moment you walk in, the anxiety vanishes. It feels more like a high-end wellness sanctuary than a clinic. My smile feels completely natural.",
      author: "MICHAEL ROSS",
      service: "Full Mouth Rehab"
    },
    {
      id: 2,
      quote: "Dr. Cifor sees things other doctors miss. She didn't just fix my teeth; she harmonized my entire facial aesthetic. Truly a master of her craft.",
      author: "ELENA D.",
      service: "Invisalign & Whitening"
    },
    {
      id: 3,
      quote: "The attention to detail is unmatched. I never thought I could feel this confident about my smile. It's not just dentistry, it's art.",
      author: "SARAH J.",
      service: "Porcelain Veneers"
    }
  ];

  // Scroll to top on page load and set page title
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Walnut Whitney Dental - Carmichael Dentist";
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Fetch carousel images from database
  const { data: carouselImages, isLoading: imagesLoading } = trpc.carousel.list.useQuery();

  // Fallback to static images if no images in database
  const patients = carouselImages && carouselImages.length > 0
    ? carouselImages.map(img => ({ id: img.id, img: img.url, alt: img.altText }))
    : [
        { id: 1, img: "/images/patient_1_male.png", alt: "Male patient smiling" },
        { id: 2, img: "/images/patient_2_female_braces.png", alt: "Young female patient with braces" },
        { id: 3, img: "/images/patient_3_female_dental_chair.png", alt: "Female patient in dental chair" },
        { id: 4, img: "/images/patient_4_senior_female.png", alt: "Senior female patient smiling" },
        { id: 5, img: "/images/patient_5_boy.jpg", alt: "Young boy smiling" },
        { id: 6, img: "/images/patient_6_older_man.jpg", alt: "Older man smiling" },
        { id: 7, img: "/images/patient_7_middle_woman.jpg", alt: "Middle aged woman smiling" },
        { id: 8, img: "/images/patient_9_asian_girl.jpg", alt: "Young girl smiling" },
        { id: 9, img: "/images/patient_8_asian_woman.jpg", alt: "Asian woman smiling" },
      ];
  
  // No JavaScript needed - pure CSS animation



  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-10 md:pt-20 pb-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            variants={fadeIn}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 md:mb-8"
          >
            Modern Aesthetic Dentistry
          </motion.p>
          
          <motion.h1 
            variants={fadeIn}
            className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground text-center"
          >
            The Art of <br />
            <span className="italic text-muted-foreground font-light">Transformation</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* Full Width Infinite Scrolling Carousel */}
      {!imagesLoading && (
      <section className="w-full overflow-hidden mb-6 relative max-h-[112px] md:max-h-[225px]">
        <div className="flex animate-infinite-scroll w-max">
          {/* Render images 3 times for seamless loop */}
          {[...patients, ...patients, ...patients].map((patient, index) => (
            <div key={`patient-${index}`} className="flex-shrink-0 mr-2 md:mr-4">
              <div className="w-[112px] h-[112px] md:w-[225px] md:h-[225px] overflow-hidden rounded-sm">
                <img 
                  src={patient.img} 
                  alt={patient.alt}
                  loading="lazy" 
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Bottom Content */}
      <section className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center pb-20">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 40 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-px bg-border mb-4"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl text-muted-foreground leading-relaxed mb-12 font-light text-lg"
        >
          Experience dentistry reimagined. Where science meets sculpture, and your smile becomes our masterpiece.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link to="/contact" onClick={() => sessionStorage.setItem('contactReferrer', window.location.pathname)}>
            <Button className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-10 py-6 text-xs tracking-widest font-medium min-w-[200px] transition-all duration-300 group">
              BEGIN YOUR JOURNEY <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Expertise List Section */}
      <section className="w-full py-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-16 border-b border-foreground/10 pb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Our Services</span>
            <Link to="/expertise">
              <Button variant="link" className="p-0 h-auto text-xs tracking-[0.2em] uppercase hover:no-underline text-muted-foreground hover:text-foreground transition-colors">
                View All
              </Button>
            </Link>
          </div>

          {/* Services List */}
          <div className="flex flex-col">
            {[
              { id: "01", title: "Implants", desc: "Permanent tooth replacement solutions that look, feel, and function like natural teeth. Restore your smile with confidence.", link: "/services/implants" },
              { id: "02", title: "Cosmetic Dentistry", desc: "Transform your smile with advanced aesthetic treatments. From veneers to bonding, we create beautiful, natural-looking results.", link: "/services/cosmetic-dentistry" },
              { id: "03", title: "Invisalign", desc: "Straighten your teeth discreetly with clear aligners. Achieve the smile you've always wanted without traditional braces.", link: "/services/invisalign" },
              { id: "04", title: "Zoom Whitening", desc: "Professional teeth whitening that delivers dramatic results in just one visit. Brighten your smile with confidence.", link: "/services/zoom-whitening" }
            ].map((service, index) => (
              <Link key={service.id} to={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center py-10 px-6 md:px-10 border-b border-foreground/10 cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-sm hover:border-transparent -mx-6 md:-mx-10 rounded-sm"
                >
                <span className="text-xs tracking-widest text-muted-foreground w-16 md:w-24 font-light group-hover:text-foreground transition-colors duration-300">{service.id}</span>
                <h3 className="font-serif text-3xl md:text-5xl text-foreground transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {service.title}
                </h3>
                
                <div className="ml-auto flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <span className="hidden md:block text-sm text-muted-foreground font-light max-w-md leading-relaxed">
                    {service.desc}
                  </span>
                  <ArrowRight className="w-5 h-5 text-foreground flex-shrink-0" />
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Options Section */}
      <section className="container mx-auto px-6 md:px-12 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Financial Options</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            No Insurance?<br />
            <span className="italic text-muted-foreground/70 font-light">Join Our Smile Club Plan</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We believe quality dental care should be accessible to everyone. Whether you have insurance or not, we have a plan that fits your budget.
          </p>
        </motion.div>

        {/* Financial Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Option 1: In-House Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-background border border-foreground/10 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute top-4 right-4 bg-[#D4AF37] text-white text-xs px-3 py-1 rounded-full tracking-wider">POPULAR</div>
            <h3 className="font-serif text-2xl mb-4">Smile Club Plan</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Get comprehensive coverage including cleanings, exams, and X-rays for one low annual fee. No waiting periods or deductibles.
            </p>
            <Link href="/smile-club-plan">
              <button className="group flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors duration-300">
                <span className="text-sm tracking-wider">VIEW PLAN DETAILS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>

          {/* Option 2: CareCredit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="font-serif text-2xl mb-4">Flexible Financing</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Split your treatment costs into manageable monthly payments. 0% interest options available for qualified patients.
            </p>
            <Link href="/financing-options">
              <button className="group flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors duration-300">
                <span className="text-sm tracking-wider">LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>

          {/* Option 3: PPO Insurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="font-serif text-2xl mb-4">PPO Insurance</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We accept most major PPO plans and handle all the paperwork for you. Call us to verify your specific coverage.
            </p>
            <Link href="/insurance-info">
              <button className="group flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors duration-300">
                <span className="text-sm tracking-wider">LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="w-full h-[40vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={realResultsBgImage} 
            alt="Beautiful smile"
            loading="lazy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl mb-8"
          >
            Real Results
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/gallery">
              <Button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black rounded-full px-10 py-6 text-xs tracking-widest font-medium min-w-[200px] transition-all duration-300">
                VIEW GALLERY
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="w-full bg-[#0a0a0a] text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
          <div className="absolute top-24 left-10 md:left-32 opacity-[0.05] font-serif text-[10rem] leading-none select-none pointer-events-none">
            <img src="/images/quote-icon.svg" alt="Quote" className="w-24 h-24 opacity-20 invert" />
          </div>
          
          {/* Fallback quote icon if image fails */}
          <div className="absolute top-24 left-10 md:left-32 opacity-[0.05] font-serif text-[10rem] leading-none select-none pointer-events-none">
             <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
             </svg>
          </div>

          <div className="max-w-4xl mx-auto min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 italic font-light">
                  "{testimonials[currentTestimonial].quote}"
                </h2>
                
                <div className="flex flex-col items-center">
                  <span className="text-xs tracking-[0.2em] uppercase text-white/60 mb-6">{testimonials[currentTestimonial].author}</span>
                  
                  <div className="w-px h-8 bg-white/20 mb-6"></div>
                  
                  <span className="font-serif text-lg italic text-white/40 mb-12">{testimonials[currentTestimonial].service}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex gap-2 mt-4 justify-center items-center">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-[2px] cursor-pointer transition-all duration-500 ${
                    currentTestimonial === index ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            
            {/* Google Reviews Button */}
            <div className="mt-12">
              <a 
                href="https://www.google.com/search?sca_esv=8d3b04ba9c2ae8a2&sxsrf=ANbL-n5JtvfU6JiWXuL4jn53anr7l6ejuA:1768509093071&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOQ9hrUcEFRATbwuCuY_1sHbvR4grQ6-6TFtlk6kZCMdxKJWJHrUhYcJBLCwNVQs_HLcg4Bwcj0G4xYvueIdT_hbkTP8PO3ZUiSoYCQcd9lFNW4FgBA%3D%3D&q=Walnut+Whitney+Dental+Reviews&sa=X&ved=2ahUKEwiH75jisY6SAxUbETQIHfz1B6cQ0bkNegQIRxAH&biw=2560&bih=1231&dpr=2&aic=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 transition-all"
                >
                  Read more reviews on Google
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
