import LineItem from "@/components/general/line-item";
import { H1 } from "@/components/ui/typography";
import { CoursesContent } from "@/lib/data";
import { lilita_one } from "@/utils/general/fonts";
import { notFound } from "next/navigation";

interface PageParams {
  params: Promise<{ slug: string }>;
}

const extractArticle = async ({ params }: PageParams) => {
  const { slug } = await params;
  return CoursesContent.find((course) => course.slug === slug);
};

export default async function Home({ params }: PageParams) {
  const content = await extractArticle({ params });

  if (!content) notFound();

  return (
    <div className="min-h-screen mx-auto max-w-xl py-8 px-2">
      <H1
        className={`${lilita_one.className} mb-6 text-center text-3xl font-extrabold `}
      >
        {content.title}
      </H1>
      <div className="flex flex-col gap-3">
        <div>
          {content.docs.length > 0 &&
            content.docs.map((item, idx) => <LineItem key={idx} post={item} />)}
        </div>
      </div>
    </div>
  );
}
