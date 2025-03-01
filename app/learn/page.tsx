"use client";

import Link from "next/link";
import { courseTopics } from "@/lib/data";
import { lilita_one } from "@/utils/general/fonts";
import { H1, H4, P } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen pb-10 sm:pb-0 flex flex-col items-center px-4">
      <H1 className={`${lilita_one.className} my-10 text-3xl font-extrabold `}>
        Start Your Learning
      </H1>
      <div className="max-h-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {courseTopics.map((topic, index) => (
          <div
            key={index}
            className="max-w-max flex flex-col justify-between items-center rounded-md p-6 border bg-slate-100 text-center"
          >
            <H4 className="text-xl font-bold ">{topic.title}</H4>
            <P className=" text-gray-600 mt-1">{topic.description}</P>
            <Link href={topic.link} className="mt-2">
              <Button>Start Learning</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
