import { useEffect } from "react";

export default function ZoomWhitening() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Zoom Whitening</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Brighten Your Smile</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                Zoom is a bleaching process widely used throughout the country and around the world to lighten 
                discoloration of enamel and dentin. Tooth discoloration may result from drinking coffee, tea, cola 
                and red wine; or from smoking. The aging process also can stain and darken your teeth.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                The Zoom in-office tooth whitening procedure uses the Zoom Advanced Power Chairside Lamp – said to 
                accelerate the bleaching process – to activate the 25 percent hydrogen peroxide whitening. As the 
                hydrogen peroxide is broken down, oxygen enters the enamel and dentin to bleach the stained substances, 
                leaving the structure of the tooth unchanged.
              </p>
            </div>

            {/* Video Embed */}
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/5VVtzd0guas"
                  title="How Tooth Whitening Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                Before deciding whether Zoom in-office teeth whitening is right for you, your dentist will conduct a 
                comprehensive examination of your teeth and gums to ensure proper health, as well as talk with you 
                about your oral hygiene and lifestyle habits to determine if you will benefit from whitening. This 
                will help you and your dentist agree on the whitening product or technique that's best for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
