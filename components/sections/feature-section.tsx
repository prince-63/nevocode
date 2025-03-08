import { BookOpen, Code, Users } from "lucide-react";
import { H1, Lead, P } from "../ui/typography";

interface FeatureType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureList: FeatureType[] = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Structured Learning",
    description:
      "Follow carefully designed learning paths that build on each other, ensuring you develop a comprehensive understanding.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Practical Coding",
    description:
      "Apply what you learn with hands-on coding exercises and projects that reinforce theoretical concepts.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Self-Paced",
    description:
      "Learn at your own pace, revisit concepts as needed, and progress when you're ready to move forward.",
  },
];

const FeatureSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full  py-2 sm:py-8 md:py-12 lg:py-16"
      id="features"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <P className="inline-block rounded-lg bg-green-100/70 dark:text-textLight px-3 py-1 text-sm ">
              Why CSExplore?
            </P>
            <H1 className={` text-primary text-center`}>
              Learn CS the Right Way
            </H1>
            <P>
              Our structured approach helps you build a solid foundation in
              computer science concepts, from basic programming to advanced
              system design.
            </P>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature, index) => {
            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 hover:border-primary p-6 transition-all hover:shadow-md"
              >
                <div className="mb-3">{feature.icon}</div>
                <Lead className="font-medium">{feature.title}</Lead>
                <P>{feature.description}</P>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
