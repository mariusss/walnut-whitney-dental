import { useEffect } from "react";

export default function Fluoride() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Fluoride</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Using Fluoride to Protect Your Teeth</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                You brush your teeth twice a day, floss regularly and visit the dentist every six months, but did you know 
                that rinsing with fluoride — a mineral that helps prevent cavities and tooth decay — also helps keep your 
                teeth healthy and strong?
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                Fluoride is effective in preventing cavities and tooth decay by coating your teeth and preventing plaque 
                from building up and hardening on the tooth's surface.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">Fluoride Comes in Two Varieties, Systemic and Topical</h2>
              <p className="text-lg leading-relaxed">
                Systemic fluoride is ingested, usually through a public water supply. While teeth are forming under the 
                gums, the fluoride strengthens tooth enamel, making it stronger and more resistant to cavities. Fluoride 
                can also be applied topically to help prevent caries (cavities) on teeth present in the mouth. It is 
                delivered through toothpaste, mouthwash, and professional fluoride applications.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">Receiving a Fluoride Treatment With Your Dentist</h2>
              <p className="text-lg leading-relaxed">
                A fluoride treatment in your dentist's office takes just a few minutes. After the treatment, patients may 
                be asked not to rinse, eat, or drink for at least 30 minutes in order to allow the teeth to absorb the 
                fluoride. Depending on your oral health or your doctor's recommendation, you may be required to have a 
                fluoride treatment every three, six, or 12 months. Your doctor may also prescribe an at-home fluoride 
                product such as a mouthwash, gel, or antibacterial rinse.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-4">How to Choose the Right Fluoride Treatment</h2>
              <p className="text-lg leading-relaxed">
                When choosing your own at-home fluoride product (such as toothpaste or mouthwash), always check for the 
                American Dental Association's (ADA) seal of acceptance. Products marked with the ADA seal of approval have 
                been carefully examined by the ADA, and approved based on safety and effectiveness. Take care of your teeth 
                and smile bright with dental fluoride treatments!
              </p>
            </div>

            {/* Video: Fluoride - The Superhero of Cavity Fighting */}
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/o9UuXmQH1fo"
                  title="Fluoride: The Superhero of Cavity Fighting"
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
