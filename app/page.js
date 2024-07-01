import dynamic from "next/dynamic";
import HeroSection from "../components/Sections/HeroSection";

const AboutSection = dynamic(() => import("../components/Sections/AboutSection"), { ssr: false });
const FreeHatSection = dynamic(() => import("../components/Sections/FreeHatSection"), {
  ssr: false,
});

const VenuesSection = dynamic(() => import("../components/Sections/VenuesSection"), { ssr: false });

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
