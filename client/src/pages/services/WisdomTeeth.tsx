import { useEffect } from "react";

export default function WisdomTeeth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Wisdom Teeth</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Expert Extraction Services</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                Wisdom teeth are types of molars found in the very back of your mouth. These teeth usually appear in late 
                teens or early twenties but may become impacted (fail to erupt) due to lack of room in the jaw or angle 
                of entry. The most common type of impacted wisdom tooth is "mesial", meaning that the tooth is angled 
                forward toward the front of your mouth. When a wisdom tooth is impacted, it may need to be removed. If it 
                is not removed, you may develop gum tenderness, swelling, or even severe pain.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                Impacted wisdom teeth that are partially or fully erupted tend to be quite difficult to clean and are 
                susceptible to tooth decay, recurring infections, and even gum disease. Each patient's situation is unique. 
                Your dentist will usually take a panoramic X-ray to determine whether your wisdom teeth will need to be 
                removed. If your dentist recommends removal of your wisdom teeth, it is best to have them removed sooner 
                rather than later. Wisdom teeth are typically removed in the late teens or early twenties because there is 
                a greater chance that the teeth's roots have not fully formed and the bone surrounding the teeth is less 
                dense. These two factors can make extraction easier, as well as making the recovery time much shorter.
              </p>
            </div>

            {/* Video Embed */}
            <div className="my-12">
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

            <div>
              <p className="text-lg leading-relaxed">
                To remove a wisdom tooth, your dentist first needs to numb the area around the tooth with a local 
                anesthetic. Your dentist can use additional medication to safely sedate you during the extraction if you 
                are feeling nervous about the procedure. Since the impacted tooth may still be under the gums and imbedded 
                in your jaw bone, your dentist will need to remove a portion of the covering bone to extract the tooth. To 
                minimize the amount of bone that is removed with the tooth, your dentist will often "section" your wisdom 
                tooth so that each piece can be removed through a small opening in the bone.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                Once your wisdom teeth have been extracted, the healing process begins. Healing time varies depending on 
                the degree of difficulty related to the extraction. Your dentist let you know what to expect and will 
                provide instructions for a comfortable, efficient healing process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
