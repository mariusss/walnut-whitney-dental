import { useEffect } from "react";

export default function RootCanals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Root Canals</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Save Your Natural Teeth</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-3xl mb-4">Dental Health and Root Canals</h2>
              <p className="text-lg leading-relaxed">
                In the past, if you had a tooth with a diseased nerve, you would probably lose that tooth. Today, 
                with a special dental procedure called root canal treatment, your tooth can be saved. Root canals 
                are a relatively simple procedure involving one to three office visits. Best of all, having a root 
                canal when necessary can save your tooth and your smile!
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">What is the Purpose of a Root Canal?</h3>
              <p className="text-lg leading-relaxed mb-4">
                A tooth's nerve is not vitally important to a tooth's health and function after the tooth has emerged 
                through the gums. Its only function is sensory – to provide the sensation of hot or cold. The presence 
                or absence of a nerve will not affect the day-to-day functioning of the tooth.
              </p>
              <p className="text-lg leading-relaxed">
                When a tooth is cracked or has a deep cavity, bacteria can enter the pulp tissue and germs can cause 
                an infection inside the tooth. If left untreated, an abscess may form. If the infected tissue is not 
                removed, pain and swelling can result. This can not only injure your jawbones, but it is detrimental 
                to your overall health.
              </p>
            </div>

            {/* Video Embed */}
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/3pDwBbaGsnw"
                  title="Treatment of Abscessed Teeth"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">What Happens During a Root Canal?</h3>
              <p className="text-lg leading-relaxed">
                Root canal treatment involves one to three visits. During treatment, your general dentist or endodontist 
                removes the affected tissue. Next, the interior of the tooth will be cleaned and sealed. Finally, the 
                tooth is filled with a dental composite. If your tooth had extensive decay, your doctor may suggest 
                placing a crown to strengthen and protect the tooth from breakage. As long as you continue to care for 
                your teeth and gums with regular brushing, flossing, and checkups, your restored tooth can last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
