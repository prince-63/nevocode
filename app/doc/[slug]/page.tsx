import * as React from "react";
import { allDocs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import RenderContent from "@/components/mdx/render-content";

interface PageParams {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;

  const article = allDocs.find(
    (doc) => doc._raw.flattenedPath === `doc/${slug}`,
  );

  if (!article) notFound();
  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
          {new Intl.DateTimeFormat("en-US").format(new Date(article.date))}
        </time>
        <h1 className="text-3xl font-bold">{article.title}</h1>
      </div>
      <RenderContent mdxContent={article.body.code} />
    </article>
  );
}
