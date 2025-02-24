import { allDocs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}

const Page = async ({ params }: PageProps) => {
  const slug = await params.slug;
  const doc = await getDocFromParams(slug);
  return <div>{JSON.stringify(doc.body.code)}</div>;
};

export default Page;
