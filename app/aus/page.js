import HeroSection from "@/components/Sections/HeroSection";
import dynamic from "next/dynamic";
import AfterPaySection from "../../components/Sections/AfterPay";

const AboutSection = dynamic(() => import("@/components/Sections/AboutSection"), { ssr: false });
const FreeHatSection = dynamic(() => import("@/components/Sections/FreeHatSection"), {
  ssr: false,
});

const VenuesSection = dynamic(() => import("@/components/Sections/VenuesSection"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <HeroSection country={"aus"} />
      <AfterPaySection country={"aus"} />
      <VenuesSection country={"aus"} />
      <AboutSection country={"aus"} />
    </>
  );
}
