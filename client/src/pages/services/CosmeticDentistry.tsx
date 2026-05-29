import { useEffect } from "react";

export default function CosmeticDentistry() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Cosmetic Dentistry</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Transform Your Smile with Confidence</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A beautiful smile can boost your confidence and leave a lasting impression. At Walnut Whitney Dental, 
              we offer a comprehensive range of cosmetic dentistry services designed to enhance the appearance of 
              your teeth and give you the smile you've always wanted.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Our cosmetic treatments combine artistry with advanced dental techniques to deliver natural-looking, 
              stunning results that complement your facial features and personality.
            </p>

            <h2 className="font-serif text-3xl md:text-4xl mt-12 mb-6">Our Cosmetic Services</h2>

            <h3 className="font-serif text-2xl mt-8 mb-4">Porcelain Veneers</h3>
            <p className="text-lg leading-relaxed mb-6">
              Veneers are thin, custom-made shells designed to cover the front surface of your teeth. They can 
              correct a variety of cosmetic issues including discoloration, chips, gaps, and misalignment. Made 
              from high-quality porcelain, veneers provide a natural appearance and are stain-resistant.
            </p>

            <h3 className="font-serif text-2xl mt-8 mb-4">Teeth Whitening</h3>
            <p className="text-lg leading-relaxed mb-6">
              Professional teeth whitening is one of the quickest and most effective ways to brighten your smile. 
              We offer both in-office Zoom whitening treatments that deliver dramatic results in just one visit, 
              as well as take-home whitening kits for gradual brightening at your convenience.
            </p>

            <h3 className="font-serif text-2xl mt-8 mb-4">Dental Bonding</h3>
            <p className="text-lg leading-relaxed mb-6">
              Bonding uses tooth-colored composite resin to repair chips, cracks, gaps, and discoloration. This 
              conservative treatment can often be completed in a single visit and provides immediate aesthetic 
              improvement with minimal tooth preparation.
            </p>

            <h3 className="font-serif text-2xl mt-8 mb-4">Smile Makeovers</h3>
            <p className="text-lg leading-relaxed mb-6">
              A smile makeover combines multiple cosmetic procedures to achieve a comprehensive transformation. 
              We'll work with you to create a customized treatment plan that addresses all your aesthetic concerns 
              and delivers the smile of your dreams.
            </p>

            <h2 className="font-serif text-3xl md:text-4xl mt-12 mb-6">Why Choose Cosmetic Dentistry?</h2>

            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed">
                <strong>Enhanced Confidence:</strong> A beautiful smile can significantly boost your self-esteem 
                and how you present yourself to the world.
              </li>
              <li className="text-lg leading-relaxed">
                <strong>Natural Results:</strong> Modern cosmetic dentistry techniques create results that look 
                and feel completely natural.
              </li>
              <li className="text-lg leading-relaxed">
                <strong>Long-Lasting:</strong> With proper care, many cosmetic treatments can last for years, 
                providing excellent value.
              </li>
              <li className="text-lg leading-relaxed">
                <strong>Improved Oral Health:</strong> Many cosmetic procedures also contribute to better overall 
                dental health.
              </li>
            </ul>

            <h2 className="font-serif text-3xl md:text-4xl mt-12 mb-6">Your Cosmetic Consultation</h2>

            <p className="text-lg leading-relaxed mb-6">
              During your consultation, we'll discuss your aesthetic goals, evaluate your oral health, and 
              recommend the best treatment options for your unique needs. We'll also provide detailed information 
              about the procedures, timeline, and expected results.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Our team is committed to helping you achieve the smile you've always wanted in a comfortable, 
              welcoming environment. Contact us today to schedule your cosmetic dentistry consultation and take 
              the first step toward your dream smile.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
