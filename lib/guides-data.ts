import {
  allCleanCodes,
  allDbms,
  allDesignPatterns,
  allSqls,
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
    title: "Database Management System",
    description:
      "Explore relational and NoSQL databases, query optimization, and data modeling.",
    icon: "Database",
    docs: allDbms,
    slug: "dbms",
    href: "/learn/dbms/01-introduction-to-dbms",
  },
  {
    title: "Structured Query Language",
    description:
      "Master SQL, the standard language for storing, manipulating, and retrieving data in databases.",
    icon: "Database",
    docs: allSqls,
    slug: "sql",
    href: "/learn/sql/01-introduction-to-sql",
  },
  {
    title: "Clean Code",
    description: "Learn how to write clean, maintainable, and efficient code.",
    icon: "Code",
    docs: allCleanCodes,
    slug: "clean-code",
    href: "/learn/clean-code/01-introduction-to-clean-code",
  },
  {
    title: "Design Patterns",
    description:
      "Discover reusable solutions to common problems in software design.",
    icon: "Code",
    docs: allDesignPatterns,
    slug: "design-pattern",
    href: "/learn/design-pattern/01-introduction-to-design-patterns",
  },
];
