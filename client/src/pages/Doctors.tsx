import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useWebsiteImage } from "@/hooks/useWebsiteImage";
import { useEffect } from "react";

export default function Doctors() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const drCiforPhoto = useWebsiteImage('doctor_vance_photo', '/images/dr-camelia-cifor.png');
  const drVargasPhoto = useWebsiteImage('doctor_vargas_photo', '/images/dr-alberto-vargas.png');

  const doctors = [
    {
      id: 1,
      name: "Dr. Camelia Cifor",
      title: "Founder & Lead Cosmetic Dentist",
      specialty: "General & Cosmetic Dentistry",
      image: drCiforPhoto,
      synopsis: "Dr. Camelia Cifor is a dedicated dental professional with a passion for providing exceptional care to her patients. With over a decade of experience, she combines her expertise in general and cosmetic dentistry to help individuals achieve their dream smiles. Dr. Cifor believes in a patient-centered approach, ensuring that each person feels comfortable and informed throughout their treatment journey.",
      link: "/doctors/camelia-cifor"
    },
    {
      id: 2,
      name: "Dr. Alberto Vargas",
      title: "Associate Dentist",
      specialty: "Restorative & Family Dentistry",
      image: drVargasPhoto,
      synopsis: "Dr. Vargas is a dedicated associate dentist who takes pride in providing compassionate, high-quality care for patients of all ages. He earned his Doctor of Dental Surgery degree from the Indiana University School of Dentistry in 2019, graduating with high marks.",
      link: "/doctors/alberto-vargas"
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Meet Our{" "}
            <span className="italic text-muted-foreground/70 font-light">Doctors</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our team of experienced dental professionals is dedicated to providing exceptional care with artistry and precision.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="space-y-32">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-2">
                      {doctor.name}
                    </h2>
                    <p className="text-sm tracking-widest text-muted-foreground uppercase">
                      {doctor.title}
                    </p>
                    <p className="text-base text-muted-foreground/80 mt-2">
                      {doctor.specialty}
                    </p>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                    {doctor.synopsis}
                  </p>

                  <Link href={doctor.link}>
                    <button className="group flex items-center gap-3 text-foreground hover:text-foreground/70 transition-colors duration-300">
                      <span className="text-sm tracking-wider uppercase">Learn More</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience personalized dental care from our expert team. Book your appointment today.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 text-sm tracking-wider uppercase">
                Book Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
