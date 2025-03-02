import { Database, Layers, Server, Terminal } from "lucide-react";
import Link from "../navigation/link";
import { H1, H3, P } from "../ui/typography";
import { lilita_one } from "@/utils/general/fonts";
import { Button } from "../ui/button";

interface TopicListTypes {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const topicList: TopicListTypes[] = [
  {
    title: "Programming Fundamentals",
    description:
      "Master the basics of programming with Python, JavaScript, and more.",
    icon: <Terminal className="h-8 w-8 text-primary" />,
    href: "/learn/programming-fundamentals",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Learn essential data structures and algorithms for efficient problem-solving.",
    href: "/learn/data-structure-and-algorithms",
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
  {
    title: "System Design",
    description:
      "Design scalable systems and understand architectural patterns.",
    href: "/learn/system-design",
    icon: <Server className="h-8 w-8 text-primary" />,
  },
  {
    title: "Databases",
    description:
      "Understand relational and NoSQL databases, query optimization, and more.",
    href: "/learn/databases",
    icon: <Database className="h-8 w-8 text-primary" />,
  },
];

const TopicSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full pt-8  py-2 sm:py-8 md:py-12 lg:py-16"
      id="topics"
    >
      <div className="mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <H1 className={`${lilita_one.className} text-primary text-center`}>
              Explore CS Topics
            </H1>
            <P>
              Dive into a wide range of computer science topics, from
              programming fundamentals to advanced system design.
            </P>
          </div>
        </div>
        <div className="w-full flex flex-wrap sm:flex-row justify-center gap-6 py-12">
          {topicList.map((topic, index) => {
            return (
              <div
                key={index}
                className="w-full  sm:w-[260px] min-h-max flex flex-col rounded-lg border border-gray-200 p-6 hover:border-green-700 transition-all hover:shadow-md"
              >
                <div className="mb-3">{topic.icon}</div>
                <H3 className="text-lg font-bold mb-2">{topic.title}</H3>
                <P className="text-sm mb-4">{topic.description}</P>
                <Link
                  href={topic.href}
                  className="text-sm text-primary hover:underline"
                >
                  Explore →
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link href="/all-topics">
            <Button size="lg">View All Topics</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopicSection;
