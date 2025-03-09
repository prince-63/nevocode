import FeatureSection from "@/components/sections/feature-section";
import HeroSection from "@/components/sections/hero-section";
import TopicSection from "@/components/sections/topic-section";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TopicSection />
    </>
  );
}
