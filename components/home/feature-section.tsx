import { lilita_one } from "@/utils/general/fonts";
import { BookOpen, Code, Users } from "lucide-react";
import { H1, H3, P } from "../ui/typography";

const FeatureSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center w-full py-2"
      id="features"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <P className="inline-block rounded-lg bg-green-100/70 dark:text-textLight px-3 py-1 text-sm ">
              Why CSExplore?
            </P>
            <H1 className={`${lilita_one.className} text-primary text-center`}>
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
          <div className="rounded-lg border-2 border-primary/10 p-6 hover:border-primary transition-all hover:shadow-md">
            <div className="mb-4">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Structured Learning</h3>
            <P className="text-gray-600">
              Follow carefully designed learning paths that build on each other,
              ensuring you develop a comprehensive understanding.
            </P>
          </div>
          <div className="rounded-lg border-2 border-primary/10 p-6 hover:border-primary transition-all hover:shadow-md">
            <div className="mb-4">
              <Code className="h-10 w-10 text-primary" />
            </div>
            <H3 className="text-xl font-bold mb-2">Practical Coding</H3>
            <P className="text-gray-600">
              Apply what you learn with hands-on coding exercises and projects
              that reinforce theoretical concepts.
            </P>
          </div>
          <div className="rounded-lg border-2 border-primary/10 p-6 hover:border-primary transition-all hover:shadow-md">
            <div className="mb-4">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <H3 className="text-xl font-bold mb-2">Self-Paced</H3>
            <P className="text-gray-600">
              Learn at your own pace, revisit concepts as needed, and progress
              when you&apos;re ready to move forward.
            </P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
