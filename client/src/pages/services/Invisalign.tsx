import { useEffect } from "react";

export default function Invisalign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <img 
            src="/images/invisalign-logo.png" 
            alt="Invisalign" 
            className="h-16 md:h-20 mx-auto mb-6"
          />
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Invisalign</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Clear Aligners for a Beautiful Smile</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-3xl mb-4">What Is Invisalign?</h2>
              <p className="text-lg leading-relaxed">
                Invisalign is a modern orthodontic treatment that uses clear, removable aligners to straighten 
                teeth without the look and feel of traditional braces. Each set of aligners is custom-made to 
                fit your teeth and gradually shift them into the desired position.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Invisalign offers a virtually invisible way to straighten your teeth without traditional metal 
                braces. Using a series of custom-made, clear aligners, you can achieve a beautifully aligned 
                smile with minimal impact on your lifestyle.
              </p>
            </div>

            {/* Video Embed */}
            <div className="my-8">
              <h3 className="font-serif text-2xl mb-6">See How Invisalign Works</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/p_q0G4GhMnI"
                  title="How Does Invisalign Treatment Work?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Nearly Invisible Treatment</h3>
              <p className="text-lg leading-relaxed mb-4">
                Invisalign clear aligners are virtually undetectable, allowing you to straighten your teeth 
                discreetly. Most people won't even notice you're wearing them.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Clear & Comfortable:</strong> Made from smooth, BPA-free plastic that won't irritate 
                your cheeks or gums.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Removable Design:</strong> Take them out to eat, brush, and floss—no dietary 
                restrictions or special cleaning routines.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Your Invisalign Journey</h3>
              <p className="text-lg leading-relaxed mb-4">
                Treatment typically takes 12-18 months, with most patients seeing noticeable improvements 
                within just a few months.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>Digital Scanning:</strong> We create a precise 3D model of your teeth using advanced 
                digital scanning—no messy impressions needed.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>Custom Treatment Plan:</strong> See a virtual preview of your smile transformation 
                before you even begin treatment.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>Wear Your Aligners:</strong> Wear each set of aligners for 1-2 weeks, 20-22 hours 
                per day, gradually moving your teeth into position.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Regular Check-Ins:</strong> Brief appointments every 6-8 weeks ensure your treatment 
                is progressing as planned.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Why Choose Invisalign?</h3>
              <p className="text-lg leading-relaxed mb-4">
                Invisalign offers numerous advantages over traditional braces, making orthodontic treatment 
                more convenient and comfortable than ever.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>No metal brackets or wires</li>
                <li>Eat whatever you want</li>
                <li>Easy to maintain oral hygiene</li>
                <li>Fewer office visits required</li>
                <li>More comfortable than braces</li>
                <li>Predictable results with 3D planning</li>
                <li>Ideal for busy professionals</li>
                <li>Suitable for teens and adults</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Conditions We Treat</h3>
              <p className="text-lg leading-relaxed mb-4">
                Invisalign effectively treats a wide range of orthodontic issues, from simple to complex cases:
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>Crowding:</strong> When there isn't enough room for all your teeth to fit normally.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>Spacing:</strong> Gaps between teeth that can trap food and affect your bite.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>Overbite:</strong> When upper teeth overlap significantly with lower teeth.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>Underbite:</strong> When lower teeth protrude past the upper front teeth.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                <strong>Crossbite:</strong> When some upper teeth sit inside the lower teeth.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Open Bite:</strong> When upper and lower teeth don't touch when biting down.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Frequently Asked Questions</h3>
              
              <p className="text-lg leading-relaxed mb-2">
                <strong>How long does treatment take?</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Most Invisalign treatments take 12-18 months, though some cases may be shorter or longer 
                depending on complexity. You'll see progress within the first few months.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                <strong>How often do I change aligners?</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                You'll typically switch to a new set of aligners every 1-2 weeks, gradually moving your 
                teeth into their ideal positions.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                <strong>Will Invisalign affect my speech?</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Most patients adjust within a few days. Any initial lisp typically disappears quickly as 
                you get used to wearing the aligners.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                <strong>Is Invisalign painful?</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                You may feel pressure when starting a new set of aligners, but this is normal and indicates 
                the treatment is working. Most patients find Invisalign more comfortable than traditional braces.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                <strong>Do I need retainers after treatment?</strong>
              </p>
              <p className="text-lg leading-relaxed">
                Yes, retainers are essential to maintain your results. We'll provide custom retainers and 
                instructions for long-term care.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
