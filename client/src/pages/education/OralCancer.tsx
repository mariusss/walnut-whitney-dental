import { useEffect } from "react";

export default function OralCancer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Oral Cancer Screening</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Early Detection Saves Lives</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                Oral cancer screening is a routine part of a dental examination. Regular check-ups, including an 
                examination of the entire mouth, are essential in the early detection of cancerous and pre-cancerous 
                conditions. You may have a very small, but dangerous, oral spot or sore and not be aware of it.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-4">What to Expect</h2>
              <p className="text-lg leading-relaxed">
                Your dentist will carefully examine the inside of your mouth and tongue and in some patients may notice 
                a flat, painless, white or red spot or a small sore. Although most of these are harmless, some are not. 
                Harmful oral spots or sores often look identical to those that are harmless, but testing can tell them 
                apart. If you have a sore with a likely cause, such as a bitten cheek, your dentist may monitor it to 
                see if it goes away.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-4">Risk Factors</h2>
              <p className="text-lg leading-relaxed mb-4">
                While oral cancer can affect anyone, certain factors can increase your risk:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Tobacco use of any kind (cigarettes, cigars, pipes, chewing tobacco)</li>
                <li>Heavy alcohol use</li>
                <li>Previous oral cancer diagnosis</li>
                <li>History of significant sun exposure, which increases the risk of lip cancer</li>
              </ul>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Early detection is key. If you notice any changes in your mouth, such as a sore that doesn't heal, a 
                lump, or a white or red patch, contact us immediately for an evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
