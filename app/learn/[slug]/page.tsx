import Typography from "@/components/common/typography";
import PostCard from "@/components/postcard";
import { CoursesContent } from "@/lib/data";
import { lilita_one } from "@/utils/common/fonts";
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
      <Typography
        variant="h1"
        className={`${lilita_one.className} mb-6 text-center text-3xl font-extrabold `}
      >
        {content.title}
      </Typography>
      <div className="flex flex-col gap-3">
        {content.docs.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
}
