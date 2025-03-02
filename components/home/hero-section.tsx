"use client";

import { Button } from "../ui/button";
import Link from "../navigation/link";
import { H1, P } from "../ui/typography";
import { lilita_one } from "@/utils/general/fonts";
const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="container flex flex-col gap-3 items-center justify-center mx-auto px-4 md:px-6">
        <H1 className={`${lilita_one.className} text-primary text-center`}>
          Unlock Your Full Coding Potential
        </H1>
        <P className="max-w-xl text-wrap text-center">
          Structured learning for programming, algorithms, and system design.
        </P>
        <div className="w-full flex flex-col mt-2 gap-4 px-4 sm:flex-row sm:items-center sm:w-min">
          <Link href="/courses">
            <Button className="w-full" size="lg" variant="outline">
              Explore Courses
            </Button>
          </Link>
          <Link href="/topics">
            <Button className="w-full" size="lg">
              Browse Topics
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
