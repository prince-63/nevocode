import { CourseTopicTypes, CoursesContentTypes } from "@/utils/types";
import { allCProgrammings, allDbms } from "@/.contentlayer/generated";

export const courseTopics: CourseTopicTypes[] = [
  {
    title: "C Programming",
    description:
      "Learn C programming, data structures, memory management, and pointers with real-world applications.",
    link: "/learn/c",
  },
  {
    title: "Database Management System (DBMS)",
    description:
      "Learn DBMS fundamentals, SQL, ACID properties, normalization, NoSQL, and advanced database techniques with hands-on projects.",
    link: "/learn/dbms",
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
    title: "Learn Database Management System (DBMS)",
    name: "dbms",
    docs: allDbms,
    slug: "dbms",
  },
];
