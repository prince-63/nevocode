import { Database, Layers, LucideIcon, Server, Terminal } from "lucide-react";
import Link from "../navigation/link";
import { H1, Lead, P } from "../ui/typography";

interface TopicListTypes {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const topicList: TopicListTypes[] = [
  {
    title: "Programming Fundamentals",
    description:
      "Build a strong foundation in programming with Python, JavaScript, and more.",
    icon: Terminal,
    href: "/learn/programming-fundamentals",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Master essential data structures and algorithms to solve complex problems efficiently.",
    icon: Layers,
    href: "/learn/data-structure-and-algorithms",
  },
  {
    title: "System Design",
    description:
      "Learn to design scalable and high-performance systems with real-world examples.",
    icon: Server,
    href: "/learn/system-design",
  },
  {
    title: "Databases",
    description:
      "Explore relational and NoSQL databases, indexing, and query optimization.",
    icon: Database,
    href: "/learn/databases",
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
            <H1 className={` text-primary text-center`}>Explore Key Topics</H1>
            <P>
              Master essential concepts in programming, data structures,
              algorithms, and system design through a structured learning path.
            </P>
          </div>
        </div>
        <div className="w-full flex flex-wrap sm:flex-row justify-center gap-6 py-12">
          {topicList.map((topic, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-[260px] min-h-max flex flex-col gap-1 rounded-lg border border-gray-200 p-6 hover:border-primary transition-all hover:shadow-md"
              >
                <div className="mb-3">
                  <topic.icon className="text-primary w-10 h-10" />
                </div>
                <Lead>{topic.title}</Lead>
                <P>{topic.description.slice(0, 100)}</P>
                <Link
                  href={topic.href}
                  className="flex items-center gap-1 text-primary dark:text-primary dark:hover:text-textDark transition-all"
                >
                  Explore →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopicSection;
