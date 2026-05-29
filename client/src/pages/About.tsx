import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, Clock, Phone, Award, Heart, Shield } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locationImages = [
    {
      src: "/images/about/waiting-room.jpg",
      alt: "Welcoming waiting room with comfortable seating",
      title: "Welcoming Reception"
    },
    {
      src: "/images/about/smile-wall.jpg",
      alt: "SMILE photo wall featuring our patients and team",
      title: "Our SMILE Wall"
    },
    {
      src: "/images/about/treatment-room.jpg",
      alt: "Modern treatment room with state-of-the-art equipment",
      title: "Treatment Room"
    },
    {
      src: "/images/about/sterilization.jpg",
      alt: "State-of-the-art sterilization center",
      title: "Sterilization Center"
    },
    {
      src: "/images/about/team-photos.jpg",
      alt: "Team photos displayed on the wall",
      title: "Our Team Memories"
    },
    {
      src: "/images/about/awards.jpg",
      alt: "America's Best Dentists 2023 award",
      title: "Award-Winning Care"
    },
    {
      src: "/images/about/exterior.jpg",
      alt: "Dental office exterior",
      title: "Our Location"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your comfort and well-being are our top priorities. We take the time to listen, understand, and address your unique dental needs."
    },
    {
      icon: Shield,
      title: "Safety & Cleanliness",
      description: "Our state-of-the-art sterilization center ensures the highest standards of hygiene and safety for every patient."
    },
    {
      icon: Award,
      title: "Excellence in Dentistry",
      description: "Recognized as one of America's Best Dentists, we're committed to providing exceptional care using the latest techniques and technology."
    }
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
            About{" "}
            <span className="italic text-muted-foreground/70 font-light">Our Practice</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Welcome to Walnut Whitney Dental, where modern dentistry meets warm, personalized care. 
            Step inside our practice and experience the difference.
          </p>
        </motion.div>

        {/* Featured Image - Exterior */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <img
              src="/images/about-office-exterior.jpg"
              alt="Walnut Whitney Dental office exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white hidden md:block">
              <h2 className="font-serif text-3xl md:text-4xl mb-2">Walnut Whitney Dental</h2>
              <p className="text-white/80">Serving Carmichael and surrounding communities</p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 bg-muted/30 rounded-sm">
              <value.icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">
            Tour Our <span className="italic text-muted-foreground/70 font-light">Office</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From our comfortable waiting areas to our modern treatment rooms, every detail is designed with your comfort in mind.
          </p>
          
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large featured image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
                <img
                  src={locationImages[1].src}
                  alt={locationImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl">{locationImages[1].title}</h3>
                </div>
              </div>
            </motion.div>

            {/* Smaller images */}
            {[locationImages[0], locationImages[2], locationImages[3], locationImages[4], locationImages[5]].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-lg">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-sm p-8 md:p-12 mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-medium mb-2">Address</h3>
              <p className="text-muted-foreground">
                3501 Walnut Avenue<br />
                Carmichael, CA 95608
              </p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-medium mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon - Tue: 9:00 AM - 5:30 PM<br />
                Wed - Thu: 7:00 AM - 3:30 PM<br />
                Fri - Sun: Closed
              </p>
            </div>
            <div>
              <Phone className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-medium mb-2">Contact</h3>
              <p className="text-muted-foreground">
                <a href="tel:916-489-9944" className="hover:text-[#D4AF37] transition-colors">
                  (916) 489-9944
                </a><br />
                <a href="mailto:smile@walnutwhitneydental.com" className="hover:text-[#D4AF37] transition-colors">
                  smile@walnutwhitneydental.com
                </a>
              </p>
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
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Schedule your visit today and discover why our patients love coming to Walnut Whitney Dental.
          </p>
          <Link href="/contact">
            <button className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm hover:bg-foreground/90 transition-colors duration-300">
              <span className="text-sm tracking-wider">SCHEDULE YOUR VISIT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
