import { useEffect } from "react";

export default function Sealants() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Sealants</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Extra Protection Against Decay</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                Sometimes brushing is not enough, especially when it comes to those hard-to-reach spots in your mouth. 
                It is difficult for your toothbrush to get in between the small cracks and grooves on your teeth. If left 
                alone, those tiny areas can develop tooth decay. Sealants give your teeth extra protection against decay 
                and help prevent cavities.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Dental sealants are plastic resins that bond and harden in the deep grooves on your tooth's surface. When 
                a tooth is sealed, the tiny grooves become smooth and are less likely to harbor plaque. With sealants, 
                brushing your teeth becomes easier and more effective.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Sealants are typically applied to children's teeth after their permanent teeth have erupted as a preventive 
                measure against tooth decay. However, adults can also receive sealants on healthy teeth. It is more common 
                to seal permanent teeth rather than baby teeth, but every patient has unique needs, and your dentist will 
                recommend sealants on a case-by-case basis.
              </p>
            </div>
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/Mdyw7FyX7cM"
                  title="Adult Sealants"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Sealants typically last from three to five years, although it is fairly common to see adults with sealants 
                still intact from childhood. A dental sealant only provides protection when it is fully intact so if your 
                sealants come off, let your dentist know, and schedule an appointment for your teeth to be resealed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
