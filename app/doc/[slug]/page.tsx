import * as React from "react";
import { allDocs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import RenderContent from "@/components/mdx/render-content";

interface PageParams {
  params: Promise<{slug: string}>
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;

  const article = allDocs.find(
    (doc) => doc._raw.flattenedPath === `doc/${slug}`,
  );

  if (!article) notFound();
  return (
    <article className="px-2 sm:px-0 mx-auto max-w-xl py-4">
      <RenderContent mdxContent={article.body.code} />
    </article>
  );
}
