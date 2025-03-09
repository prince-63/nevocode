import { BookOpen, Code, LucideIcon, Users } from "lucide-react";
import { H1, Lead, P } from "../ui/typography";

interface FeatureType {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featureList: FeatureType[] = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description:
      "Follow a well-crafted roadmap that ensures a deep and progressive understanding of key concepts.",
  },
  {
    icon: Code,
    title: "Hands-on Practice",
    description:
      "Reinforce your knowledge with real-world coding challenges, projects, and interactive exercises.",
  },
  {
    icon: Users,
    title: "Learn at Your Pace",
    description:
      "Advance at your own speed, revisit concepts anytime, and strengthen your foundation without pressure.",
  },
];

const FeatureSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full  py-2 sm:py-8 md:py-12 lg:py-10"
      id="features"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <P className="inline-block rounded-lg bg-green-100/70 dark:text-textLight px-3 py-1 text-sm ">
              Why SystemNode?
            </P>
            <H1 className={` text-primary text-center`}>
              Architect Your Skills
            </H1>
            <P>
              Gain expertise in system design, programming, and algorithms with
              a structured approach that helps you build scalable and efficient
              solutions.
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
                <div className="mb-3">
                  <feature.icon className="text-primary w-10 h-10" />
                </div>
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
