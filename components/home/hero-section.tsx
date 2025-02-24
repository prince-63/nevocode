"use client";

import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { lilita_one } from "@/utils/common/fonts";

const HeroSection = () => {
  const router = useRouter();

  function exploreNow() {
    router.push("/courses");
  }

  return (
    <section className="px-3 h-[500px] w-full flex items-center justify-center sm:h-[500px]">
      <div className="flex flex-col items-center gap-2">
        <Typography
          variant="h1"
          className={`text-3xl sm:text-4xl text-gray-700 sm:font-bold ${lilita_one.className}`}
        >
          Explore, Learn & Excel<span className="text-green-600">.</span>
        </Typography>
        <Typography
          className="text-center text-wrap sm:w-[450px]"
          variant="body2"
        >
          CSExplore helps you understand core CS concepts with engaging,
          beginner-friendly, and in-depth articles.
        </Typography>
        <Button
          onClick={exploreNow}
          type="button"
          className="px-3 py-2 rounded-md text-gray-100 bg-green-600 transition delay-150 duration-300 ease-in-out hover:bg-green-700"
        >
          <Typography variant="body2">Start Learning Now</Typography>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
