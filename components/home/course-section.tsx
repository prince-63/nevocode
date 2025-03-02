import Image, { StaticImageData } from "next/image";
import Link from "../navigation/link";
import PythonImage from "@/assets/images/python.png";
import DataStructureImage from "@/assets/images/data-structure.png";
import SystemDesignImage from "@/assets/images/system-design.png";
import { H1, H4, P } from "../ui/typography";
import { lilita_one } from "@/utils/general/fonts";
import { Button } from "../ui/button";

interface CourseListType {
  title: string;
  description: string;
  image: StaticImageData;
  duration: string;
  previewHref: string;
  courseHref: string;
}

const courseList: CourseListType[] = [
  {
    title: "Python Programming from Zero to Hero",
    description:
      "Start your programming journey with Python, one of the most beginner-friendly languages.",
    image: PythonImage,
    duration: "Beginner Friendly • 24 Lessons",
    previewHref: "/",
    courseHref: "/",
  },

  {
    title: "Data Structures Fundamentals",
    description:
      "Learn essential data structures like arrays, linked lists, trees, and graphs.",
    image: DataStructureImage,
    duration: "Intermediate • 18 Lessons",
    previewHref: "/",
    courseHref: "/",
  },
  {
    title: "System Design for Beginners",
    description:
      "Learn how to design scalable systems and understand architectural patterns.",
    image: SystemDesignImage,
    duration: "Advanced • 15 Lessons",
    previewHref: "/",
    courseHref: "/",
  },
];

const CourseSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full pt-8 py-2 sm:py-8 md:py-12 lg:py-16"
      id="courses"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <H1 className={`${lilita_one.className} text-primary text-center`}>
              Featured Courses
            </H1>
            <P>
              Start your learning journey with our most popular computer science
              courses.
            </P>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {courseList.map((course, index) => {
            return (
              <div
                key={index}
                className="min-h-max flex flex-col rounded-lg border border-gray-200 hover:border-green-700 transition-all"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={course.image}
                    fill
                    alt="Python programming course showing code editor with Python syntax"
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col gap-[1.5px] p-6">
                  <H4 className="font-bold opacity-95">{course.title}</H4>
                  <P className="opacity-70 font-light text-sm">
                    {course.duration}
                  </P>
                  <P className="text-sm opacity-80">{course.description}</P>
                  <div className="flex justify-between gap-2 mt-3">
                    <Link href={course.previewHref}>
                      <Button variant="outline" size="lg">
                        Preview
                      </Button>
                    </Link>
                    <Link href={course.courseHref}>
                      <Button variant="default" size="lg" className="px-5">
                        Start Learning
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link href="/all-courses">
            <Button size="lg">Browse All Courses</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
