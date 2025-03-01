"use client";

import { Button } from "../ui/button";
import Link from "../navigation/link";
import { H1, P } from "../ui/typography";
import { lilita_one } from "@/utils/general/fonts";
const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center md:py-24 lg:py-32 bg-lightBg/90 dark:bg-darkBg/80">
      <div className="container flex flex-col gap-3 items-center justify-center mx-auto px-4 md:px-6">
        <H1 className={`${lilita_one.className} text-center`}>Master Computer Science at Your Own Pace</H1>
        <P className="max-w-md text-wrap text-center">
          Self-paced, structured learning paths for programming, algorithms,
          system design, and more. Build your CS foundation from the ground up.
        </P>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link href="#courses">
            <Button className="px-6 py-3 rounded-md bg-white text-green-700 text-sm font-medium hover:bg-gray-100 transition-colors">
              Explore Courses
            </Button>
          </Link>
          <Link href="#topics">
            <Button className="px-6 py-3 rounded-md border border-white text-white text-sm font-medium hover:bg-green-800 transition-colors">
              Browse Topics
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
