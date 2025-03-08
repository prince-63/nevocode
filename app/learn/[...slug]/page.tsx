import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/layouts/app-side-bar";
import { guides, GuideType } from "@/lib/guides-data";
import RenderContent from "@/components/mdx/render-content";
import ContentMobileHeader from "@/components/layouts/content-mobile-header";
import { Metadata } from "next";

interface PageParams {
  params: Promise<{ slug: string }>;
}

const extractArticle = async ({ params }: PageParams) => {
  const { slug } = await params;

  const content = guides.find((guide) => guide.slug === slug[0]);

  console.log(content);
  if (!content) return null;

  return { content, slug };
};

const filterRenderContent = async (data: {
  content: GuideType;
  slug: string;
}) => {
  // Generate combinedSlug
  const combinedSlug = "/" + data.slug[0] + "/" + data.slug[1];

  // Find the article directly
  return data.content.docs.find((doc) => doc.url === combinedSlug);
};

export default async function Home({ params }: PageParams) {
  const data = await extractArticle({ params });

  if (!data) return notFound();

  const renderContent = await filterRenderContent(data);

  return (
    <div className="h-screen flex">
      <AppSidebar content={data.content} />
      <div className="h-screen flex-1 overflow-y-auto" id="main_side_view_area">
        <div>
          <ContentMobileHeader />
          <div className="px-4">
            <RenderContent mdxContent={renderContent?.body.code ?? ""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const data = await extractArticle({ params });

  if (!data?.content) {
    return {
      title: "Article Not Found - CSExplore",
      description: "The requested article could not be found on CSExplore.",
    };
  }

  const renderContent = await filterRenderContent(data);

  return {
    title: renderContent?.title,
    description: renderContent?.description,
  };
}
