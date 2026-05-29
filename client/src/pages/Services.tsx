import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
      link: "/services/implants"
    },
    {
      id: 2,
      title: "Invisalign",
      description: "Straighten your teeth discreetly with clear aligners for a confident smile.",
      link: "/services/invisalign"
    },
    {
      id: 3,
      title: "Hybrid Dentures",
      description: "Implant-supported dentures that combine stability with natural aesthetics.",
      link: "/services/hybrid-dentures"
    },
    {
      id: 4,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with advanced aesthetic treatments including veneers, bonding, and whitening.",
      link: "/services/cosmetic-dentistry"
    },
    {
      id: 5,
      title: "Digital X-rays",
      description: "Advanced imaging technology for safer, more accurate diagnostics.",
      link: "/services/digital-xrays"
    },
    {
      id: 6,
      title: "Dental Care",
      description: "Comprehensive care including emergency services, TMJ-TMD treatment, and wisdom teeth.",
      link: "/services/dental-care"
    },
    {
      id: 7,
      title: "Oral Surgery",
      description: "Expert surgical procedures performed with precision and care.",
      link: "/services/oral-surgery"
    },
    {
      id: 8,
      title: "Root Canals",
      description: "Save your natural teeth with gentle, effective endodontic treatment.",
      link: "/services/root-canals"
    },
    {
      id: 9,
      title: "Preventive Care",
      description: "Regular cleanings, exams, and preventive treatments to maintain optimal oral health.",
      link: "/services/preventive-care"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Our Services</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Comprehensive Dental Care for Your Entire Family</p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={service.link}>
                <div className="group relative p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl mb-4">What is Dentistry?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dentistry is the diagnosis, treatment, and prevention of conditions, disorders, and diseases of the teeth, gums, mouth, and jaw. Often considered necessary for complete oral health, dentistry can have an impact on the health of your entire body.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">Who is a Dentist?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A dentist is a specialist who works to diagnose, treat, and prevent oral health problems. Your dentist has completed at least eight years of schooling, and received either a DDS (Doctor of Dental Surgery) degree, or a DMD (Doctor of Dental Medicine) degree. If your doctor is a pediatric dentist, this means that he or she specializes in caring for children from infancy through their teen years. A pediatric dentist has received the proper education and training needed to work with young kids. Other specializations include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Endodontics (root canals)</li>
                <li>Oral and maxillofacial (including pathology, radiology, and surgery)</li>
                <li>Orthodontics and dentofacial orthopedics</li>
                <li>Periodontics (gum disease)</li>
                <li>Prosthodontics (implants)</li>
              </ul>
            </div>

            {/* First Video - After "Who is a Dentist?" */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Ew54eu7e3fs"
                title="Dentists: Doctors of Oral Health"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">Why is Visiting the Dentist so Important?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Visiting the dentist regularly will not only help keep your teeth and mouth healthy, but will also help keep the rest of your body healthy. Dental care is important because it:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Helps prevent tooth decay</li>
                <li>Protects against periodontal (gum) disease, which can lead to tooth and bone loss</li>
                <li>Prevents bad breath - brushing, flossing, and seeing the dentist regularly will help reduce the amount of bacteria in your mouth that causes bad breath</li>
                <li>Gives you a more attractive smile and increases your self-confidence</li>
                <li>Helps keep teeth looking bright by preventing them from becoming stained by food, drinks, and tobacco</li>
                <li>Strengthens your teeth so that you can enjoy healthy, beautiful smiles for the rest of your life</li>
              </ul>
            </div>

            {/* Second Video - After "Why is Visiting the Dentist so Important?" */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/AB2GDn6O-wQ"
                title="Dental Check-ups"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">My Teeth Feel Fine. Do I Still Need to See a Dentist?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your teeth may feel fine, but it's still important to see the dentist regularly because problems can exist without you knowing. Your smile's appearance is important, and your dentist can help keep your smile healthy and looking beautiful. With so many advances in dentistry, you no longer have to settle for stained, chipped, missing, or misshapen teeth. Today's dentists offer many treatment choices that can help you smile with confidence, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Professional teeth whitening</li>
                <li>Fillings that mimic the appearance of natural teeth</li>
                <li>Tooth replacement and full smile makeovers</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">What Should I Look For When Choosing the Right Dentist for Me?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Choosing a dentist who "clicks" with you and your family is important, and you may wish to consider several dentists before making your final decision. During your first visit, you should be able to determine whether the dentist is right for you. During your appointment, consider the following:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Is the appointment schedule convenient?</li>
                <li>Is the office easy to get to and close by?</li>
                <li>Does the office appear to be clean and orderly?</li>
                <li>Was your medical and dental history recorded and placed in a permanent file?</li>
                <li>Does the dentist explain techniques for good oral health?</li>
                <li>Is information about cost presented to you before treatment is scheduled?</li>
                <li>Is your dentist a member of the ADA (American Dental Association)?</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">How Can I Take Care of My Teeth Between Dental Checkups?</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>ALWAYS remember to brush your teeth at least two times a day, and floss at least once</li>
                <li>Make sure to use toothpaste that contains fluoride, and ask your dentist if you need a fluoride rinse. This will help prevent cavities</li>
                <li>Avoid foods with a lot of sugar and avoid tobacco</li>
                <li>Don't be afraid to brush your tongue! By brushing your tongue, you will remove food particles and reduce the amount of plaque-causing bacteria</li>
                <li>Be sure to schedule your routine checkup. It is recommended that you visit the dentist every six months</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">How Often Should I See the Dentist?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Children, teens, and adults should all see the dentist for a regular checkup at least once every six months. Patients who are at a greater risk for oral cancer or gum disease may be required to see the dentist more than just twice a year. Your doctor will help determine how often you should visit the dentist for regular checkups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
