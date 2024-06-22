import AboutSection from "../components/Sections/AboutSection";
import FreeHatSection from "../components/Sections/FreeHatSection";
import HeroSection from "../components/Sections/HeroSection";
import VenuesSection from "../components/Sections/VenuesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FreeHatSection />
      <VenuesSection />
      <AboutSection />
    </>
  );
}
