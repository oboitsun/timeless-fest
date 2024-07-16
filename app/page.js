import SplashSection from "@/components/Sections/SplashSection";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/Sections/AboutSection"), { ssr: false });
const FreeHatSection = dynamic(() => import("@/components/Sections/FreeHatSection"), {
  ssr: false,
});

const VenuesSection = dynamic(() => import("@/components/Sections/VenuesSection"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <SplashSection />
    </>
  );
}
