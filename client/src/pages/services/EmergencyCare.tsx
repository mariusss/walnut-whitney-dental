import { useEffect } from "react";

export default function EmergencyCare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Emergency Dental Care</h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">We're Here When You Need Us</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
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
        </div>
      </section>
    </div>
  );
}
