import { allDocs } from "@/.contentlayer/generated";
import PostCard from "@/components/postcard";

export default function Home() {
  // const posts = allDocs.sort(
  //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  // );


  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {allDocs.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
