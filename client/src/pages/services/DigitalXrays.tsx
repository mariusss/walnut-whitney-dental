import { useEffect } from "react";

export default function DigitalXrays() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Digital X-rays</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Advanced Imaging Technology</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Using the most advanced dental technology possible is just as important as staying up-to-date on the 
              latest treatment techniques. Because our practice is dedicated to providing you with the safest and most 
              convenient treatment options available, we utilize advanced digital X-ray technology in our office.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Digital X-rays provide several advanced imaging options designed to save time, provide clearer dental 
              photos, and expose patients to less radiation than traditional X-ray technology.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Our practice is focused on making your dental experience as comfortable as possible. At your next 
              appointment, we'll be happy to answer any questions you may have.
            </p>

            {/* Video Embed */}
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/KLwwzSnlaPc"
                  title="Why X-Ray?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
