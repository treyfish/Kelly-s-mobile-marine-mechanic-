import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import WaveDivider from "@/components/WaveDivider";
import ServicesPreview from "@/components/ServicesPreview";
import HowItWorks from "@/components/HowItWorks";
import BrandTicker from "@/components/BrandTicker";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <WaveDivider fill="#ffffff" />
      <ServicesPreview />
      <WaveDivider fill="#0a1628" />
      <HowItWorks />
      <WaveDivider fill="#ffffff" />
      <BrandTicker />
      <Reviews />
      <WaveDivider fill="#f59e0b" />
      <CTASection />
    </>
  );
}
