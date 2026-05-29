import { useEffect } from "react";

export default function Brushing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Brushing Your Teeth</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">Essential Daily Care</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                It's very important to brush and floss your teeth to keep your teeth and gums healthy. If 
                you need help choosing the right toothbrush or toothpaste, or if you need help learning how to brush and floss, please ask us and we can help 
                you choose the right products for your teeth.
              </p>
            </div>

            {/* Video 1: How to Brush Your Teeth */}
            <div className="my-12">
              <h2 className="font-serif text-3xl mb-4">How to Brush Your Teeth</h2>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/xm9c5HAUBpY"
                  title="How to Brush Your Teeth"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 2: How to Teach Your Child to Brush His Teeth */}
            <div className="my-12">
              <h2 className="font-serif text-3xl mb-4">How to Teach Your Child to Brush His Teeth</h2>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/kuLxz5IrZ6Y"
                  title="How to Teach Your Child to Brush His Teeth"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 3: How to Floss Your Teeth */}
            <div className="my-12">
              <h2 className="font-serif text-3xl mb-4">How to Floss Your Teeth</h2>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/HhdoPXNKNm4"
                  title="How to Floss Your Teeth"
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
