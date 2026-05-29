import { useEffect } from "react";

export default function Implants() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Dental Implants</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Permanent Solutions for Missing Teeth</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-3xl mb-4">What Are Dental Implants?</h2>
              <p className="text-lg leading-relaxed">
                Dental implants are the gold standard for replacing missing teeth. They provide a permanent, 
                natural-looking solution that functions just like your real teeth, restoring both your smile 
                and your confidence.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Dental implants are titanium posts surgically placed into the jawbone to serve as artificial 
                tooth roots. Once healed, they provide a stable foundation for custom-made crowns that look, 
                feel, and function like natural teeth.
              </p>
            </div>

            {/* Video Embed */}
            <div className="my-8">
              <h3 className="font-serif text-2xl mb-6">Learn More About Dental Implants</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/3hEHxrEJMhs"
                  title="What to Expect From Dental Implant Surgery"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">How Implants Work</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Titanium Post:</strong> The implant fuses with your jawbone through a process called 
                osseointegration, creating a permanent anchor.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Custom Crown:</strong> Each crown is custom-crafted to match your natural teeth in 
                color, shape, and size.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Benefits of Dental Implants</h3>
              <p className="text-lg leading-relaxed mb-4">
                Dental implants offer numerous advantages over traditional tooth replacement options like 
                bridges or dentures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Permanent solution that can last a lifetime with proper care</li>
                <li>Preserves jawbone and prevents bone loss</li>
                <li>No impact on adjacent healthy teeth</li>
                <li>Natural appearance and comfortable fit</li>
                <li>Restores full chewing function</li>
                <li>Easy to care for—just brush and floss normally</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">The Implant Process</h3>
              <p className="text-lg leading-relaxed mb-4">
                Our team will guide you through every step of the implant process, ensuring your comfort 
                and satisfaction.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>1. Consultation & Planning:</strong> We evaluate your oral health, take digital 
                imaging, and create a personalized treatment plan.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>2. Implant Placement:</strong> The titanium post is surgically placed into your 
                jawbone under local anesthesia.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>3. Healing Period:</strong> Over 3-6 months, the implant fuses with your bone 
                for a secure foundation.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>4. Crown Placement:</strong> Your custom crown is attached, completing your new, 
                natural-looking smile.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Frequently Asked Questions</h3>
              
              <p className="text-lg leading-relaxed mb-2">
                <strong>Am I a good candidate for dental implants?</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Most adults with good general health are candidates for dental implants. Adequate jawbone 
                density is important, but bone grafting can help if needed. We'll evaluate your specific 
                situation during your consultation.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                <strong>How long do dental implants last?</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                With proper care and regular dental check-ups, dental implants can last a lifetime. The 
                crown may need replacement after 10-15 years due to normal wear.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                <strong>Is the procedure painful?</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The procedure is performed under local anesthesia, so you won't feel pain during placement. 
                Most patients report mild discomfort afterward, easily managed with over-the-counter pain medication.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                <strong>How do I care for my dental implants?</strong>
              </p>
              <p className="text-lg leading-relaxed">
                Care for implants just like natural teeth—brush twice daily, floss regularly, and visit us 
                for routine check-ups and cleanings.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
