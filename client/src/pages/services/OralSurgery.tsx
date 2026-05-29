import { useEffect } from "react";

export default function OralSurgery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Oral Surgery</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Comprehensive Surgical Care</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-3xl mb-4">Oral and Maxillofacial Surgery</h2>
              <p className="text-lg leading-relaxed">
                Oral and maxillofacial surgery treats a wide spectrum of diseases, injuries and defects in the head, 
                neck, face, jaws and the hard and soft tissues of the oral and maxillofacial region. It is a recognized 
                international surgical specialty of dentistry and one of the nine specialties of dentistry recognized 
                by the American Dental Association.
              </p>
            </div>

            {/* Video Embed */}
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/YS5EiDLPSao"
                  title="What is an Oral & Maxillofacial Surgeon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Corrective Jaw Surgery</h3>
              <p className="text-lg leading-relaxed">
                Corrective jaw or orthognathic surgery is a procedure in which the upper jaw, lower jaw and chin may 
                be repositioned to correct minor and major skeletal and dental irregularities, including the misalignment 
                of jaws and teeth which can improve chewing, speaking and breathing.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Wisdom Teeth</h3>
              <p className="text-lg leading-relaxed">
                Wisdom teeth are the last set of teeth to develop. Sometimes they emerge from the gum line, and the 
                jaw is large enough to allow room for them, but more often, they fail to emerge and become impacted. 
                The American Association of Oral and Maxillofacial Surgeons strongly recommends that wisdom teeth be 
                removed by the time the patient is a young adult in order to prevent future problems and to ensure 
                optimal healing.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Dental Implants</h3>
              <p className="text-lg leading-relaxed">
                Dental implants are long-term replacement teeth that your oral and maxillofacial surgeon surgically 
                places in the jawbone. They are made of titanium metal that fuses with the jawbone through a process 
                called osseointegration. Implants look, feel and function like natural teeth and never decay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
