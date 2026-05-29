import { FileText, Baby, Shield, CreditCard, Users, Wallet, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ForPatients() {
  const patientResources = [
    {
      icon: FileText,
      title: "Adult Health History",
      description: "Download and fill out your health history form before your visit.",
      link: "/adult-health-history.pdf",
    },
    {
      icon: Shield,
      title: "HIPAA Form",
      description: "Review and sign our privacy policy and HIPAA consent form.",
      link: "/hipaa-form.pdf",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8B7355] via-[#A0826D] to-[#8B7355] text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">For Patients</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Welcome to Walnut Whitney Dental! To streamline your visit, please access our patient forms and important information below.
          </p>
        </div>
      </section>

      {/* Patient Resources Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {patientResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a key={index} href={resource.link} download className="block">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer group relative">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-[#8B7355]/10 flex items-center justify-center mb-4 group-hover:bg-[#8B7355]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[#8B7355]" />
                      </div>
                      <Download className="w-5 h-5 text-[#8B7355] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription className="text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* First Visit Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">First Visit?</h2>
          <p className="text-lg text-muted-foreground mb-4">
            When you or your child are ready for your first visit to the office, please fill out the attached forms and bring them in. You can also find a form for your consent to release HIPAA information to our office.
          </p>
          <p className="text-base text-muted-foreground">
            If you have any questions about these forms, please don't hesitate to call us at{" "}
            <a href="tel:916-489-9944" className="text-[#8B7355] hover:underline font-medium">
              (916) 489-9944
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
