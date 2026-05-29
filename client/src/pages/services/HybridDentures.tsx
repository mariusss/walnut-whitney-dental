import { useEffect } from "react";

export default function HybridDentures() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Hybrid Dentures</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">A Permanent Solution for a Full, Confident Smile</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                Hybrid dentures are a modern, long-lasting solution for patients who are missing most or all 
                of their teeth. This advanced treatment replaces an entire arch of teeth using dental implants 
                to support a fixed, natural-looking set of teeth that looks, feels, and functions like the real thing.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">What Are Hybrid Dentures?</h2>
              <p className="text-lg leading-relaxed">
                Hybrid dentures are a full-arch restoration where dental implants are placed into the jawbone 
                to securely anchor a fixed set of prosthetic teeth. Unlike traditional dentures, hybrid dentures 
                are permanently attached, meaning they don't slip, move, or need to be removed.
              </p>
              <p className="text-lg leading-relaxed mt-4 font-medium">
                In many cases, patients can receive new teeth the same day as surgery.
              </p>
            </div>

            {/* Video Embed */}
            <div className="my-8">
              <h3 className="font-serif text-2xl mb-6">Learn More About Full-Arch Implants</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/Ushnj78EvH4"
                  title="All-on-4 Treatment Concept"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Key Benefits of Hybrid Dentures</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Permanent, fixed teeth — no adhesives or removal</li>
                <li>Natural look and feel — designed to match your smile</li>
                <li>Improved chewing and speech</li>
                <li>Helps preserve jawbone and facial structure</li>
                <li>Faster treatment and recovery compared to traditional methods</li>
                <li>More cost-effective than replacing each tooth individually with implants</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Who Is a Good Candidate?</h3>
              <p className="text-lg leading-relaxed mb-4">
                Hybrid dentures may be ideal if you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Are missing multiple or all teeth</li>
                <li>Currently wear dentures and want a permanent solution</li>
                <li>Have failing or severely damaged teeth</li>
                <li>Have been told you don't have enough bone for traditional implants</li>
                <li>Want a stable, confident smile that looks and feels natural</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4 italic">
                Thanks to strategic implant placement, many patients with bone loss may still qualify for hybrid dentures.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">The Hybrid Denture Treatment Process</h3>
              <p className="text-lg leading-relaxed mb-2">
                <strong>1. Consultation and Digital Planning:</strong> Your dentist evaluates your oral health 
                using advanced imaging and creates a personalized treatment plan.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>2. Implant Placement:</strong> Dental implants are precisely placed in the jaw to 
                provide strength and long-term stability.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>3. Same-Day Temporary Teeth Attached:</strong> A fixed temporary set of teeth is 
                attached the same day in many cases, allowing you to leave with a functional smile.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>4. Final Restoration:</strong> After healing, a custom-designed permanent bridge is 
                placed for optimal comfort, durability, and aesthetics.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Hybrid Dentures vs. Traditional Dentures</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-base border-collapse">
                  <thead>
                    <tr className="border-b-2 border-foreground/20">
                      <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                      <th className="text-left py-3 px-4 font-semibold">Hybrid Dentures</th>
                      <th className="text-left py-3 pl-4 font-semibold">Traditional Dentures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-foreground/10">
                      <td className="py-3 pr-4">Attachment</td>
                      <td className="py-3 px-4">Fixed and permanent</td>
                      <td className="py-3 pl-4">Removable</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-3 pr-4">Stability</td>
                      <td className="py-3 px-4">Do not slip or move</td>
                      <td className="py-3 pl-4">Can shift or loosen</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-3 pr-4">Bone Health</td>
                      <td className="py-3 px-4">Preserve jawbone over time</td>
                      <td className="py-3 pl-4">Contribute to bone loss</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-3 pr-4">Chewing Ability</td>
                      <td className="py-3 px-4">Allow strong, natural chewing</td>
                      <td className="py-3 pl-4">Limited chewing ability</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Longevity</td>
                      <td className="py-3 px-4">Long-term solution</td>
                      <td className="py-3 pl-4">Require frequent adjustments</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Life with Hybrid Dentures</h3>
              <p className="text-lg leading-relaxed">
                Patients often describe hybrid dentures as life-changing. You can enjoy your favorite foods, 
                speak clearly, smile confidently, and stop worrying about loose dentures.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                With proper care and regular dental visits, hybrid dentures can last for many years — often decades.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Schedule Your Hybrid Denture Consultation</h3>
              <p className="text-lg leading-relaxed">
                If you're looking for a permanent, natural-looking solution to missing teeth, hybrid dentures 
                may be right for you. Schedule a consultation to learn more about your options and take the 
                first step toward restoring your smile and confidence.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
