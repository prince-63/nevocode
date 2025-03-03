import FeatureSection from "@/components/home/feature-section";
import HeroSection from "@/components/home/hero-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import TopicSection from "@/components/home/topic-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TopicSection />
      <TestimonialsSection />
    </>
  );
}
