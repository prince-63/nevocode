import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/general/app-side-bar";
import { guides, GuideType } from "@/lib/guides-data";
import RenderContent from "@/components/mdx/render-content";
import ContentMobileHeader from "@/components/layouts/content-mobile-header";
import { Metadata } from "next";
import GuidePagination from "@/components/general/guide-pagination";

interface PageParams {
  params: Promise<{ slug: string }>;
}

const extractArticle = async ({ params }: PageParams) => {
  const { slug } = await params;

  const content = guides.find((guide) => guide.slug === slug[0]);

  if (!content) return null;

  return { content, slug };
};

const filterRenderContent = async (data: {
  content: GuideType;
  slug: string;
}) => {
  // Generate combinedSlug
  const combinedSlug = "/" + data.slug[0] + "/" + data.slug[1];

  // Find the guide index
  const contentIndex = data.content.docs.findIndex(
    (doc) => doc.url === combinedSlug,
  );

  const content = data.content.docs[contentIndex];

  // returning the guide index with there actual guide content
  return { content, contentIndex };
};

export default async function Home({ params }: PageParams) {
  const data = await extractArticle({ params });

  if (!data) return notFound();

  // Get the guide for rendering and index of the guide for pagination use cases
  const renderContent = await filterRenderContent(data);

  return (
    <div className="h-screen flex">
      <AppSidebar content={data.content} />
      <div className="h-screen flex-1 overflow-y-auto" id="main_side_view_area">
        <div>
          <ContentMobileHeader />
          <div className="px-4">
            <RenderContent mdxContent={renderContent.content.body.code ?? ""} />
          </div>
          <div className="sm:hidden">
            {data && (
              <GuidePagination
                contentIndex={renderContent.contentIndex}
                guide={data.content}
              />
            )}
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
      title: "Article Not Found - System Node",
      description: "The requested article could not be found on System Node.",
    };
  }

  const renderContent = await filterRenderContent(data);

  return {
    title: renderContent?.content.title,
    description: renderContent?.content.description,
  };
}
