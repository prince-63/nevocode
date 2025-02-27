import { CourseTopicTypes, CoursesContentTypes } from "@/utils/types";
import { allCProgrammings, allProgrammings } from "@/.contentlayer/generated";

export const courseTopics: CourseTopicTypes[] = [
  {
    title: "C Programming",
    description:
      "Learn C programming, data structures, memory management, and pointers with real-world applications.",
    link: "/learn/c",
  },
  {
    title: "C++ Programming",
    description:
      "Master C++ programming, STL, object-oriented design, and advanced problem-solving techniques in depth.",
    link: "/learn/cpp",
  },
  {
    title: "Java Programming",
    description:
      "Understand Java, OOP, multithreading, backend development, and build scalable applications efficiently.",
    link: "/learn/java",
  },
  {
    title: "Java Programming",
    description:
      "Understand Java, OOP, multithreading, backend development, and build scalable applications efficiently.",
    link: "/learn/java",
  },
];

export const CoursesContent: CoursesContentTypes[] = [
  {
    title: "Learn C Programming",
    name: "c-programming",
    docs: allCProgrammings,
    slug: "c",
  },
  {
    title: "Learn Java Programming",
    name: "java",
    docs: allProgrammings,
    slug: "java",
  },
];