// @ts-ignore
import Navbar from "./components/Navbar.jsx";
// @ts-ignore
import HeroSection from "./components/HeroSection.jsx";
// @ts-ignore
import StatsSection from "./components/StatsSection.jsx";
// @ts-ignore
import CommunitySection from "./components/CommunitySection.jsx";
// @ts-ignore
import TamilSchoolSection from "./components/TamilSchoolSection.jsx";
// @ts-ignore
import ProgramsSection from "./components/ProgramsSection.jsx";
// @ts-ignore
import Gallery from "./components/Gallery.jsx";
// @ts-ignore
import EventsSection from "./components/EventsSection.jsx";
// @ts-ignore
import Testimonials from "./components/Testimonials.jsx";
// @ts-ignore
import DonationSection from "./components/DonationSection.jsx";
// @ts-ignore
import VolunteerSection from "./components/VolunteerSection.jsx";
// @ts-ignore
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#faf8f5" }}>

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main style={{ flexGrow: 1, width: "100%" }}>
        <div style={{ height: "80px" }}></div> {/* Spacer to offset fixed Navbar */}
        <HeroSection />
        <StatsSection />
        <CommunitySection />
        <TamilSchoolSection />
        <ProgramsSection />
        <Gallery />
        <EventsSection />
        <Testimonials />
        <DonationSection />
        <VolunteerSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

