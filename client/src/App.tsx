import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Contact from "@/pages/Contact";
import Doctors from "@/pages/Doctors";
import CameliaCifor from "@/pages/doctors/CameliaCifor";
import AlbertoVargas from "@/pages/doctors/AlbertoVargas";
import Expertise from "@/pages/Expertise";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import CarouselManager from "@/pages/CarouselManager";
import ImagesAdmin from "@/pages/ImagesAdmin";
// Overview pages
import Services from "@/pages/Services";
import TakingCare from "@/pages/TakingCare";
// Active service pages
import PreventiveCare from "@/pages/services/PreventiveCare";
import RestorativeEmergencyCare from "@/pages/services/RestorativeEmergencyCare";
import CosmeticDentistry from "@/pages/services/CosmeticDentistry";
// New service pages from Oak Leaf Dental
import DigitalXrays from "@/pages/services/DigitalXrays";
import DentalCare from "@/pages/services/DentalCare";
import OralSurgery from "@/pages/services/OralSurgery";
import RootCanals from "@/pages/services/RootCanals";
import SnoringTherapy from "@/pages/services/SnoringTherapy";
// TMJ-TMD and Wisdom Teeth content consolidated into DentalCare page
import ZoomWhitening from "@/pages/services/ZoomWhitening";
import Implants from "@/pages/services/Implants";
import Invisalign from "@/pages/services/Invisalign";
import HybridDentures from "@/pages/services/HybridDentures";
// Patient education pages
import Brushing from "@/pages/education/Brushing";
import Fluoride from "@/pages/education/Fluoride";
import Mouthguards from "@/pages/education/Mouthguards";
import OralCancer from "@/pages/education/OralCancer";
import Sealants from "@/pages/education/Sealants";
// Financial option pages
import SmileClubPlan from "@/pages/SmileClubPlan";
import FinancingOptions from "@/pages/FinancingOptions";
import InsuranceInfo from "@/pages/InsuranceInfo";
import About from "@/pages/About";
import ForPatients from "@/pages/ForPatients";
// Temporarily hidden - old individual service pages
// import PorcelainVeneers from "@/pages/services/PorcelainVeneers";
// import FullMouthRehab from "@/pages/services/FullMouthRehab";
// import Whitening from "@/pages/services/Whitening";
// import Invisalign from "@/pages/services/Invisalign";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/expertise" component={Expertise} /> */}
        {/* Overview pages */}
        <Route path="/services" component={Services} />
        <Route path="/taking-care" component={TakingCare} />
        {/* Active service pages */}
        <Route path="/services/preventive-care" component={PreventiveCare} />
        <Route path="/services/restorative-emergency-care" component={RestorativeEmergencyCare} />
        <Route path="/services/cosmetic-dentistry" component={CosmeticDentistry} />
        {/* New service pages */}
        <Route path="/services/implants" component={Implants} />
        <Route path="/services/invisalign" component={Invisalign} />
        <Route path="/services/hybrid-dentures" component={HybridDentures} />
        <Route path="/services/digital-xrays" component={DigitalXrays} />
        <Route path="/services/dental-care" component={DentalCare} />
        <Route path="/services/oral-surgery" component={OralSurgery} />
        <Route path="/services/root-canals" component={RootCanals} />
        <Route path="/services/snoring-therapy" component={SnoringTherapy} />
        {/* TMJ-TMD and Wisdom Teeth consolidated into Dental Care page */}
        <Route path="/services/zoom-whitening" component={ZoomWhitening} />
        {/* Patient education pages */}
        <Route path="/education/brushing" component={Brushing} />
        <Route path="/education/fluoride" component={Fluoride} />
        <Route path="/education/mouthguards" component={Mouthguards} />
        <Route path="/education/oral-cancer" component={OralCancer} />
        <Route path="/education/sealants" component={Sealants} />
        {/* Financial option pages */}
        <Route path="/smile-club-plan" component={SmileClubPlan} />
        <Route path="/financing-options" component={FinancingOptions} />
        <Route path="/insurance-info" component={InsuranceInfo} />
        {/* Temporarily hidden - old individual service pages */}
        {/* <Route path="/services/porcelain-veneers" component={PorcelainVeneers} /> */}
        {/* <Route path="/services/full-mouth-rehab" component={FullMouthRehab} /> */}
        {/* <Route path="/services/whitening" component={Whitening} /> */}
        {/* <Route path="/services/invisalign" component={Invisalign} /> */}
        <Route path="/doctors" component={Doctors} />
        <Route path="/doctors/camelia-cifor" component={CameliaCifor} />
        <Route path="/doctors/alberto-vargas" component={AlbertoVargas} />
        <Route path="/about" component={About} />
        <Route path="/for-patients" component={ForPatients} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin/carousel" component={CarouselManager} />
        <Route path="/admin/images" component={ImagesAdmin} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
