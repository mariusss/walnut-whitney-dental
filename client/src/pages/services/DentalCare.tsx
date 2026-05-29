import { useEffect } from "react";

export default function DentalCare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Dental Care</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Comprehensive Care for Your Oral Health</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-12">
            
            {/* Emergency Dental Care Section */}
            <div>
              <h2 className="font-serif text-3xl mb-4">Emergency Dental Care</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you experience a dental emergency, be sure to call our practice as soon as possible. If you need 
                immediate attention after hours, call our emergency phone number and our on-call staff member will help 
                you. If you are unable to reach our office during an emergency, dial 911.
              </p>
              <p className="text-lg leading-relaxed">
                We are here to help you, any time, any day. When your dental health is at risk, we will do everything 
                we can to make sure that you're treated as soon as possible. While dental emergencies are rare, they 
                can happen, and it's important to know how to take care of your teeth no matter what.
              </p>
            </div>

            {/* TMJ-TMD Section */}
            <div className="pt-8 border-t border-foreground/10">
              <h2 className="font-serif text-3xl mb-4">TMJ-TMD Treatment</h2>
              <p className="text-lg leading-relaxed mb-4">
                Millions of Americans suffer from chronic facial and neck pain as well as recurring headaches. In some 
                cases, this pain is due to Temporomandibular Disorder, or TMD.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Your temporomandibular joints (TMJ) connect your lower jawbone to your skull. These joints get a lot of 
                use throughout the day as you speak, chew, swallow, and yawn. Pain in and around these joints can be 
                unpleasant and may even restrict movement.
              </p>

              <h3 className="font-serif text-2xl mb-4">Symptoms Of TMD Include:</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
                <li>Pain in the jaw area</li>
                <li>Pain, ringing, or stuffiness in the ears</li>
                <li>Frequent headaches or neck aches</li>
                <li>Clicking or popping sound when the jaw moves</li>
                <li>Swelling on the sides of the face</li>
                <li>Muscle spasms in the jaw area</li>
                <li>A change in the alignment of top and bottom teeth</li>
                <li>Locked jaw or limited opening of the mouth</li>
              </ul>
              <p className="text-lg leading-relaxed mb-6">
                Should you notice any of these symptoms, let your doctor know. Your dentist can help indicate the 
                presence of TMD and create an effective treatment just for you.
              </p>

              {/* TMJ Video Embed */}
              <div className="my-8">
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

            {/* Wisdom Teeth Section */}
            <div className="pt-8 border-t border-foreground/10">
              <h2 className="font-serif text-3xl mb-4">Wisdom Teeth</h2>
              <p className="text-lg leading-relaxed mb-4">
                Wisdom teeth are types of molars found in the very back of your mouth. These teeth usually appear in late 
                teens or early twenties but may become impacted (fail to erupt) due to lack of room in the jaw or angle 
                of entry. The most common type of impacted wisdom tooth is "mesial", meaning that the tooth is angled 
                forward toward the front of your mouth. When a wisdom tooth is impacted, it may need to be removed. If it 
                is not removed, you may develop gum tenderness, swelling, or even severe pain.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Impacted wisdom teeth that are partially or fully erupted tend to be quite difficult to clean and are 
                susceptible to tooth decay, recurring infections, and even gum disease. Each patient's situation is unique. 
                Your dentist will usually take a panoramic X-ray to determine whether your wisdom teeth will need to be 
                removed. If your dentist recommends removal of your wisdom teeth, it is best to have them removed sooner 
                rather than later. Wisdom teeth are typically removed in the late teens or early twenties because there is 
                a greater chance that the teeth's roots have not fully formed and the bone surrounding the teeth is less 
                dense. These two factors can make extraction easier, as well as making the recovery time much shorter.
              </p>

              {/* Wisdom Teeth Video Embed */}
              <div className="my-8">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/mv0w_uoesks"
                    title="Get Wise About Wisdom Teeth"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-4">
                To remove a wisdom tooth, your dentist first needs to numb the area around the tooth with a local 
                anesthetic. Your dentist can use additional medication to safely sedate you during the extraction if you 
                are feeling nervous about the procedure. Since the impacted tooth may still be under the gums and imbedded 
                in your jaw bone, your dentist will need to remove a portion of the covering bone to extract the tooth. To 
                minimize the amount of bone that is removed with the tooth, your dentist will often "section" your wisdom 
                tooth so that each piece can be removed through a small opening in the bone.
              </p>

              <p className="text-lg leading-relaxed">
                Once your wisdom teeth have been extracted, the healing process begins. Healing time varies depending on 
                the degree of difficulty related to the extraction. Your dentist will let you know what to expect and will 
                provide instructions for a comfortable, efficient healing process.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
