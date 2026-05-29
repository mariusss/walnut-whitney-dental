import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, X, Menu } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileEducationOpen, setMobileEducationOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileEducationOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const servicesItems = [
    { label: "Implants", path: "/services/implants" },
    { label: "Invisalign", path: "/services/invisalign" },
    { label: "Hybrid Dentures", path: "/services/hybrid-dentures" },
    { label: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
    { label: "Digital X-rays", path: "/services/digital-xrays" },
    { label: "Dental Care", path: "/services/dental-care" },
    { label: "Oral Surgery", path: "/services/oral-surgery" },
    { label: "Root Canals", path: "/services/root-canals" },
    { label: "Snoring Therapy", path: "/services/snoring-therapy" },
    { label: "Zoom Whitening", path: "/services/zoom-whitening" },
  ];

  const educationItems = [
    { label: "Brushing Your Teeth", path: "/education/brushing" },
    { label: "Fluoride", path: "/education/fluoride" },
    { label: "Mouthguards", path: "/education/mouthguards" },
    { label: "Oral Cancer Screening", path: "/education/oral-cancer" },
    { label: "Sealants", path: "/education/sealants" },
  ];

  const footerNavItems = [
    { label: "HOME", path: "/" },
    { label: "DOCTORS", path: "/doctors" },
    { label: "ABOUT", path: "/about" },
    { label: "GALLERY", path: "/gallery" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Navigation */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12 md:py-6",
          scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-3 md:py-4" : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group cursor-pointer">
            <img 
              src="/images/logo.png" 
              alt="Walnut Whitney Dental" 
              className="h-[57.6px] md:h-[76.8px] w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {/* HOME */}
            <Link 
              href="/"
              className="text-[10px] tracking-[0.2em] font-medium hover:text-muted-foreground transition-colors uppercase"
            >
              HOME
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link 
                href="/services"
                className="flex items-center gap-1 text-[10px] tracking-[0.2em] font-medium hover:text-muted-foreground transition-colors uppercase"
              >
                SERVICES <ChevronDown className="h-3 w-3" />
              </Link>
              <div 
                className={cn(
                  "absolute top-full left-0 pt-2 w-56 transition-all duration-200",
                  servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="bg-background/95 backdrop-blur-md shadow-lg border border-border/40 rounded-md overflow-hidden">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-3 text-xs tracking-wider hover:bg-accent/20 transition-colors border-b border-border/20 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Patient Education Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setEducationOpen(true)}
              onMouseLeave={() => setEducationOpen(false)}
            >
              <Link 
                href="/taking-care"
                className="flex items-center gap-1 text-[10px] tracking-[0.2em] font-medium hover:text-muted-foreground transition-colors uppercase"
              >
                TAKING CARE OF YOUR TEETH <ChevronDown className="h-3 w-3" />
              </Link>
              <div 
                className={cn(
                  "absolute top-full left-0 pt-2 w-56 transition-all duration-200",
                  educationOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="bg-background/95 backdrop-blur-md shadow-lg border border-border/40 rounded-md overflow-hidden">
                  {educationItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-3 text-xs tracking-wider hover:bg-accent/20 transition-colors border-b border-border/20 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* DOCTORS */}
            <Link 
              href="/doctors"
              className="text-[10px] tracking-[0.2em] font-medium hover:text-muted-foreground transition-colors uppercase"
            >
              DOCTORS
            </Link>

            {/* ABOUT */}
            <Link 
              href="/about"
              className="text-[10px] tracking-[0.2em] font-medium hover:text-muted-foreground transition-colors uppercase"
            >
              ABOUT
            </Link>

            {/* FOR PATIENTS */}
            <Link 
              href="/for-patients"
              className="text-[10px] tracking-[0.2em] font-medium hover:text-muted-foreground transition-colors uppercase"
            >
              FOR PATIENTS
            </Link>

            {/* GALLERY */}
            <Link 
              href="/gallery"
              className="text-[10px] tracking-[0.2em] font-medium hover:text-muted-foreground transition-colors uppercase"
            >
              GALLERY
            </Link>

            {/* CONTACT */}
            <Link 
              href="/contact"
              onClick={() => sessionStorage.setItem('contactReferrer', location)}
              className="text-[10px] tracking-[0.2em] font-medium hover:text-muted-foreground transition-colors uppercase"
            >
              CONTACT
            </Link>

            {/* Phone Number */}
            <a 
              href="tel:9164899944"
              className="text-foreground hover:text-muted-foreground px-4 py-2 text-xs tracking-[0.2em] font-medium uppercase transition-colors border border-foreground/20 rounded-sm hover:border-foreground/40"
            >
              916-489-9944
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden p-2 hover:bg-accent/20 rounded-full transition-colors z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 xl:hidden transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={cn(
            "absolute top-0 right-0 h-full w-full bg-background shadow-xl transition-transform duration-300 ease-out overflow-y-auto",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="pt-32 pb-8 px-6">
            {/* Phone Number - Prominent at top */}
            <a 
              href="tel:9164899944"
              className="flex items-center justify-center w-full py-4 mb-6 text-sm tracking-[0.2em] font-medium uppercase border border-foreground/20 rounded-sm hover:bg-accent/10 transition-colors"
            >
              📞 916-489-9944
            </a>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {/* HOME */}
              <Link 
                href="/"
                className="block py-4 text-sm tracking-[0.15em] font-medium uppercase border-b border-border/20 hover:bg-accent/10 transition-colors px-2"
              >
                HOME
              </Link>

              {/* Services Accordion */}
              <div className="border-b border-border/20">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-4 text-sm tracking-[0.15em] font-medium uppercase hover:bg-accent/10 transition-colors px-2"
                >
                  SERVICES
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}>
                  <Link 
                    href="/services"
                    className="block py-3 pl-6 pr-2 text-xs tracking-wider text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                  >
                    Overview
                  </Link>
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block py-3 pl-6 pr-2 text-xs tracking-wider text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Education Accordion */}
              <div className="border-b border-border/20">
                <button
                  onClick={() => setMobileEducationOpen(!mobileEducationOpen)}
                  className="flex items-center justify-between w-full py-4 text-sm tracking-[0.15em] font-medium uppercase hover:bg-accent/10 transition-colors px-2"
                >
                  TAKING CARE OF YOUR TEETH
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileEducationOpen && "rotate-180")} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  mobileEducationOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                )}>
                  <Link 
                    href="/taking-care"
                    className="block py-3 pl-6 pr-2 text-xs tracking-wider text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                  >
                    Overview
                  </Link>
                  {educationItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block py-3 pl-6 pr-2 text-xs tracking-wider text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* DOCTORS */}
              <Link 
                href="/doctors"
                className="block py-4 text-sm tracking-[0.15em] font-medium uppercase border-b border-border/20 hover:bg-accent/10 transition-colors px-2"
              >
                DOCTORS
              </Link>

              {/* ABOUT */}
              <Link 
                href="/about"
                className="block py-4 text-sm tracking-[0.15em] font-medium uppercase border-b border-border/20 hover:bg-accent/10 transition-colors px-2"
              >
                ABOUT
              </Link>

              {/* FOR PATIENTS */}
              <Link 
                href="/for-patients"
                className="block py-4 text-sm tracking-[0.15em] font-medium uppercase border-b border-border/20 hover:bg-accent/10 transition-colors px-2"
              >
                FOR PATIENTS
              </Link>

              {/* GALLERY */}
              <Link 
                href="/gallery"
                className="block py-4 text-sm tracking-[0.15em] font-medium uppercase border-b border-border/20 hover:bg-accent/10 transition-colors px-2"
              >
                GALLERY
              </Link>

              {/* CONTACT */}
              <Link 
                href="/contact"
                onClick={() => sessionStorage.setItem('contactReferrer', location)}
                className="block py-4 text-sm tracking-[0.15em] font-medium uppercase border-b border-border/20 hover:bg-accent/10 transition-colors px-2"
              >
                CONTACT
              </Link>
            </nav>

            {/* Address at bottom */}
            <div className="mt-8 pt-6 border-t border-border/20 text-center">
              <p className="text-xs text-muted-foreground tracking-wider">
                3501 Walnut Avenue<br />
                Carmichael, CA 95608
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-24 md:pt-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background py-12 md:py-20 border-t border-border/40">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src="/images/walnut-whitney-logo.png" alt="Walnut Whitney Dental" className="h-12 w-auto" />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
            {footerNavItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                onClick={() => {
                  if (item.path === '/contact') {
                    sessionStorage.setItem('contactReferrer', location);
                  }
                }}
                className="text-xs tracking-widest hover:text-muted-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </nav>
          
          <div className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} WALNUT WHITNEY DENTAL
          </div>
        </div>
      </footer>
    </div>
  );
}
