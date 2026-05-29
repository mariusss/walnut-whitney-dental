import { useEffect } from "react";

export default function SnoringTherapy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Snoring Therapy</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Sleep Better Tonight</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-3xl mb-4">Snoring Prevention</h2>
              <p className="text-lg leading-relaxed">
                While snoring is a common problem for many people, it can also be a sign of other major health 
                complications. It is estimated that more than 80 million people in North America snore while sleeping, 
                which not only affects the quality of sleep of the person snoring, but also the quality of sleep of 
                their loved ones and other family members. Luckily, there is a way to treat chronic snoring.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">What Causes Snoring?</h3>
              <p className="text-lg leading-relaxed mb-4">
                Snoring can be the result of several factors. Typically, snoring is caused by the relaxing of the muscles 
                and soft tissues in the throat and mouth, making the air passage smaller. The decrease in space through 
                the airway makes it harder for each breath to get through, and when it does get through, it moves over 
                the soft tissues in the mouth and throat and causes a vibration that results in the snoring sound. Other 
                causes of snoring may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Excess body weight</li>
                <li>Alcohol consumption</li>
                <li>Certain sleep aides or sedatives</li>
                <li>Obstructive Sleep Apnea (OSA)</li>
              </ul>
            </div>

            {/* Video Embed */}
            <div className="my-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/4JkiWvWn2aU"
                  title="Shaq Attacks Sleep Apnea"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">What is a Mandibular Advancement Device?</h3>
              <p className="text-lg leading-relaxed mb-4">
                If you snore at night, then a mandibular advancement device (MAD) may represent a solution and a 
                better night's sleep! The MAD is a specially designed dental device that gently helps keep the lower 
                jaw, or mandible, in a forward position, increasing the space between the airway passage and helping 
                you breathe better so you can get a full, quiet night's sleep.
              </p>
              <p className="text-lg leading-relaxed">
                Some devices also stop the tongue from falling back over your windpipe. Your dentist will fit these 
                special appliances to meet your individual condition.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Is a MAD Comfortable?</h3>
              <p className="text-lg leading-relaxed">
                The answer is simple — YES! A mandibular advancement device is made to be comfortable, so that you 
                can sleep without even noticing you're wearing it. It does not prevent you from breathing with your 
                mouth open and will even eliminate snoring for patients with sinus congestion or allergies. You may 
                experience some slight stiffness of the jaw for the first few mornings after wearing the device, but 
                this feeling is only temporary, and will go away after you wake up and remove the device. To learn 
                more about a mandibular advancement device, contact our practice and schedule an appointment and consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
