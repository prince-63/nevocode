import Link from "@/components/navigation/link";
import { H2, H3, P } from "@/components/ui/typography";
import { guides } from "@/lib/guides-data";
import { lilita_one } from "@/utils/general/fonts";

export default function GuidesPage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <H2
        className={`${lilita_one.className} text-primary font-bold text-center`}
      >
        CSExplore Learning Guides
      </H2>
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
                <H3 className="text-lg font-bold ml-4">{guide.title}</H3>
              </div>
              <P className="text-sm mb-4">{guide.description.slice(0, 150)}</P>
              <Link
                href={guide.href}
                className="flex items-center gap-1 text-sm text-primary dark:text-primary dark:hover:text-textDark hover:text-textLight transition-all"
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
