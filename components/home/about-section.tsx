"use client";

import { lilita_one } from "@/utils/general/fonts";
import AboutCard from "./about-card";
import { H1, P } from "../ui/typography";
const AboutSection = () => {
  return (
    <section className="h-max bg-gray-100 flex flex-col items-center justify-center px-3 py-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-3">
        <H1 className={`text-3xl text-gray-700 ${lilita_one.className}`}>
          What&apos;s CSExplore?
        </H1>
        <P className="text-sm sm:text-base text-gray-700">
          CSExplore is a platform designed to make learning Computer Science
          simple, engaging, and effective. Whether you&apos;re a student, a
          self-learner, or a professional, our in-depth articles and structured
          courses help you understand CS fundamentals with ease.
        </P>
      </div>

      {/* Target Audience */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
        <AboutCard
          text="Students"
          icon="🎓"
          description="Strengthen your CS foundation with structured learning."
        />
        <AboutCard
          text="Self-Learners"
          icon="💡"
          description="Learn at your own pace with easy-to-follow articles."
        />
        <AboutCard
          text="Professionals"
          icon="👨‍💻"
          description="Refresh core concepts and stay updated with CS trends."
        />
      </div>
    </section>
  );
};

export default AboutSection;
