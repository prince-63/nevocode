import * as React from "react";
import type { Metadata } from "next";
import { allDocs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import RenderContent from "@/components/mdx/render-content";

interface PageParams {
  params: Promise<{ slug: string }>;
}

// Function to fetch the article based on slug
const extractArticle = async ({ params }: PageParams) => {
  const { slug } = await params;
  return allDocs.find((doc) => doc.slugAsParams === slug);
};

export default async function Page({ params }: PageParams) {
  const article = await extractArticle({ params });

  if (!article) notFound();

  return (
    <article className="px-2 sm:px-0 mx-auto max-w-xl py-4">
      <RenderContent mdxContent={article.body.code} />
    </article>
  );
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const article = await extractArticle({ params });

  if (!article) {
    return {
      title: "Article Not Found - CSExplore",
      description: "The requested article could not be found on CSExplore.",
    };
  }

  return {
    title: article?.title,
    description: article?.description,
  };
}