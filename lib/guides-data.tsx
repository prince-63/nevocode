import { allCProgrammings, allDbms } from "@/.contentlayer/generated";
import { GuideType } from "@/utils/types";
import { Code, Database } from "lucide-react";

export const guides: GuideType[] = [
  {
    title: "C Programming",
    description:
      "Learn C programming, data structures, memory management, and pointers with real-world applications.",
    icon: <Code className="h-8 w-8 text-primary" />,
    docs: allCProgrammings,
    slug: "c",
    href: "/learn/c/01-introduction",
  },
  // {
  //   title: "Data Structures and Algorithms",
  //   description:
  //     "Master the fundamentals of DSA to excel in coding interviews and problem-solving.",
  //   icon: <Code className="h-8 w-8 text-primary" />,
  //   href: "/learn/dsa",
  // },
  // {
  //   title: "System Design",
  //   description:
  //     "Learn how to design scalable systems and tackle complex architectural challenges.",
  //   icon: <Server className="h-8 w-8 text-primary" />,
  //   href: "/learn/system-design",
  // },
  {
    title: "Database Management",
    description:
      "Explore relational and NoSQL databases, query optimization, and data modeling.",
    icon: <Database className="h-8 w-8 text-primary" />,
    docs: allDbms,
    slug: "dbms",
    href: "/learn/dbms/01-introduction",
  },
  // {
  //   title: "Machine Learning",
  //   description:
  //     "Dive into the world of AI and machine learning algorithms and applications.",
  //   icon: <Cpu className="h-8 w-8 text-primary" />,
  //   href: "/learn/machine-learning",
  // },
  // {
  //   title: "Web Development",
  //   description:
  //     "Build modern, responsive web applications using the latest technologies.",
  //   icon: <Network className="h-8 w-8 text-primary" />,
  //   href: "/learn/web-development",
  // },
];
