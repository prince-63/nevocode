import Link from "@/components/navigation/link";
import { H3, Lead, P } from "@/components/ui/typography";
import { guides } from "@/data/guides-data";
import { Code, Cpu, Database, LucideIcon, Network, Server } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Database,
  Server,
  Cpu,
  Network,
};

const GuideSection = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <H3 className={`text-primary text-center`}>Learning Guides</H3>
      <div className="max-w-4xl mx-auto">
        <P className="text-center">
          Master key concepts in software engineering and system design with our
          in-depth guides.
        </P>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => {
            const IconComponent = iconMap[guide.icon];

            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-6 hover:border-primary transition-all hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  {IconComponent && (
                    <IconComponent className="h-8 w-8 text-primary" />
                  )}
                  <Lead className="ml-4">{guide.title}</Lead>
                </div>
                <P className="text-md mb-4">
                  {guide.description.slice(0, 150)}
                </P>
                <Link
                  href={guide.href}
                  className="flex items-center gap-1 text-primary dark:text-primary dark:hover:text-textDark transition-all"
                >
                  Start learning →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default GuideSection;
