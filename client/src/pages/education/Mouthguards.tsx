import { useEffect } from "react";

export default function Mouthguards() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Mouthguards</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Protect Your Smile During Sports</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                Whether you wear braces or not, protecting your smile while playing sports is essential. Injuries to the 
                mouth and jaw are some of the most common injuries received by athletes. Mouthguards help protect your 
                teeth and gums. If you participate in basketball, boxing, hockey, football, gymnastics, lacrosse, martial 
                arts, racquetball, rugby, track and field, skateboarding, skiing and snowboarding, skydiving, soccer, 
                surfing, volleyball, water polo, weightlifting or wrestling, it is recommended by the American Dental 
                Association that you wear a mouthguard.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-4">Types of Mouthguards</h2>
              <p className="text-lg leading-relaxed">
                Choosing the right mouthguard is important. There are three basic types of mouthguards: the pre-made 
                mouthguard, the "boil-and-bite" fitted mouthguard, and a custom-made mouthguard. When you choose a 
                mouthguard, be sure to pick one that is tear-resistant, well fitted for your mouth and easy to keep clean. 
                Also make sure it does not prevent you from breathing properly during use. If you wear braces or a retainer, 
                it is imperative for you to wear a mouthguard. Your dentist can show you how to wear a mouthguard properly 
                and how to choose the right mouthguard to protect your smile.
              </p>
            </div>
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/d0ktAyLnGTE"
                  title="Why is having a mouthguard important?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-4">Taking Care of Your Mouthguard</h2>
              <p className="text-lg leading-relaxed mb-4">
                Similar to a retainer, braces, or any other special dental appliance, it is important to take care of your 
                mouthguard by storing it properly and keeping it clean. You should also know when to replace your old 
                mouthguard with a new one. Here are a few simple ways to keep your mouthguard clean and working correctly:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Gently scrub your mouthguard after each use with a toothbrush and toothpaste.</li>
                <li>Store your mouthguard in a protective case.</li>
                <li>Do not leave your mouthguard in the sun or in hot water; it may melt or become deformed.</li>
                <li>Replace your mouthguard at the beginning of every new sports season.</li>
                <li>Do not wear a retainer with your mouthguard. If you wear braces, your dentist will help design a mouthguard to protect your teeth and your braces.</li>
                <li>Do not chew on or cut pieces off of your mouthguard.</li>
                <li>Bring your mouthguard to each dental checkup.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
