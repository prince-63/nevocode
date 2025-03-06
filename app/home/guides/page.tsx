import Link from "@/components/navigation/link";
import { H3, Lead, P } from "@/components/ui/typography";
import { guides } from "@/lib/guides-data";

export default function GuidesPage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <H3 className={`text-primary text-center`}>
        CSExplore Learning Guides
      </H3>
      <div className="max-w-4xl mx-auto">
        <P className="text-center">
          Explore our comprehensive guides to master various aspects of computer
          science and software engineering.
        </P>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-6 hover:border-primary transition-all hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                {guide.icon}
                <Lead className="ml-4">{guide.title}</Lead>
              </div>
              <P className="text-md mb-4">{guide.description.slice(0, 150)}</P>
              <Link
                href={guide.href}
                className="flex items-center gap-1 text-primary dark:text-primary dark:hover:text-textDark transition-all"
              >
                Start learning →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
