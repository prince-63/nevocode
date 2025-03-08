import {
  allCProgrammings,
  allDbms,
  DocumentTypes,
} from "@/.contentlayer/generated";

export interface GuideType {
  title: string;
  description: string;
  icon: string;
  docs: DocumentTypes[];
  slug: string;
  href: string;
}

export const guides: GuideType[] = [
  {
    title: "C Programming",
    description:
      "Learn C++ programming, data structures, memory management, and pointers with real-world applications.",
    icon: "Code",
    docs: allCProgrammings,
    slug: "c",
    href: "/learn/c/01-introduction",
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Master the fundamentals of DSA to excel in coding interviews and problem-solving.",
    icon: "Code",
    docs: allCProgrammings,
    slug: "c",
    href: "/learn/dsa/01-introduction",
  },
  {
    title: "System Design",
    description:
      "Learn how to design scalable systems and tackle complex architectural challenges.",
    icon: "Server",
    docs: allCProgrammings,
    slug: "system-design",
    href: "/learn/system-design/01-introduction",
  },
  {
    title: "Database Management",
    description:
      "Explore relational and NoSQL databases, query optimization, and data modeling.",
    icon: "Database",
    docs: allDbms,
    slug: "dbms",
    href: "/learn/dbms/01-introduction-to-dbms",
  },
  {
    title: "Machine Learning",
    description:
      "Dive into the world of AI and machine learning algorithms and applications.",
    icon: "Cpu",
    docs: allCProgrammings,
    slug: "machine-learning",
    href: "/learn/machine-learning/01-introduction",
  },
  {
    title: "Web Development",
    description:
      "Build modern, responsive web applications using the latest technologies.",
    icon: "Network",
    docs: allCProgrammings,
    slug: "web-development",
    href: "/learn/web-development/01-introduction",
  },
];
