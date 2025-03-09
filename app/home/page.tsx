import FeatureSection from "@/components/sections/feature-section";
import HeroSection from "@/components/sections/hero-section";
import TopicSection from "@/components/sections/topic-section";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  // console.log(cookieStore.getAll());
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TopicSection />
    </>
  );
}
