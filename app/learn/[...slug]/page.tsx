import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/layouts/app-side-bar";
import { guides, GuideType } from "@/data/guides-data";
import RenderContent from "@/components/mdx/render-content";
import ContentMobileHeader from "@/components/layouts/content-mobile-header";
import { Metadata } from "next";
import GuidePagination from "@/components/general/guide-pagination";
import ThanksMessage from "@/components/general/thank-message";

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
    <div className="sm:h-screen sm:flex">
      <AppSidebar content={data.content} />
      <div className="flex-1 sm:overflow-y-auto" id="main_side_view_area">
        <div>
          <ContentMobileHeader />
          <div className="px-2 sm:px-4">
            <RenderContent mdxContent={renderContent.content.body.code ?? ""} />
          </div>
          <div className="sm:hidden mb-4">
            {data && (
              <GuidePagination
                contentIndex={renderContent.contentIndex}
                guide={data.content}
              />
            )}
          </div>
          <div>
            <ThanksMessage
              author={renderContent.content.author}
              author_url={renderContent.content.author_url ?? "#"}
            />
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
      title: "Article Not Found - Nevo Code",
      description: "The requested article could not be found on Nevo Code.",
    };
  }

  const renderContent = await filterRenderContent(data);

  return {
    title: renderContent?.content.title,
    description: renderContent?.content.description,
  };
}
