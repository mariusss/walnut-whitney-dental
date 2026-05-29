import { useEffect } from "react";

export default function TmjTmd() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">TMJ-TMD</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Jaw Pain Relief</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-3xl mb-4">Temporomandibular Disorder (TMD)</h2>
              <p className="text-lg leading-relaxed mb-4">
                Millions of Americans suffer from chronic facial and neck pain as well as recurring headaches. In some 
                cases, this pain is due to Temporomandibular Disorder, or TMD.
              </p>
              <p className="text-lg leading-relaxed">
                Your temporomandibular joints (TMJ) connect your lower jawbone to your skull. These joints get a lot of 
                use throughout the day as you speak, chew, swallow, and yawn. Pain in and around these joints can be 
                unpleasant and may even restrict movement.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Symptoms Of TMD Include:</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Pain in the jaw area</li>
                <li>Pain, ringing, or stuffiness in the ears</li>
                <li>Frequent headaches or neck aches</li>
                <li>Clicking or popping sound when the jaw moves</li>
                <li>Swelling on the sides of the face</li>
                <li>Muscle spasms in the jaw area</li>
                <li>A change in the alignment of top and bottom teeth</li>
                <li>Locked jaw or limited opening of the mouth</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Should you notice any of these symptoms, let your doctor know. Your dentist can help indicate the 
                presence of TMD and create an effective treatment just for you.
              </p>
            </div>

            {/* Video Embed */}
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/9dbFm7YhgGM"
                  title="Jaw Pain and TMJ Disorders: Mayo Clinic Radio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed mb-4">
                There are a few simple steps you can take at home or work to prevent TMD from becoming more severe, 
                or to prevent it from occurring:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Relax your face — remember the rule: "Lips together, teeth apart"</li>
                <li>Avoid grinding your teeth</li>
                <li>Avoid constant gum chewing</li>
                <li>Don't cradle the phone receiver between your head and shoulder — either use a headset or hold the receiver in your hand</li>
                <li>Chew food evenly on both sides of your mouth</li>
                <li>Do not sit with your chin rested on your hand</li>
                <li>Practice good posture — keep your head up, back straight, and shoulders squared</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
