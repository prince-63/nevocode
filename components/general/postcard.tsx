import { DocumentTypes } from "@/.contentlayer/generated";
import Link from "next/link";
import { H2, P } from "../ui/typography";

interface PostCardProps {
  post: DocumentTypes;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="">
      <h2 className="mb-1 text-xl">
        <Link href={post.url}>
          <H2 className="transition delay-150 duration-300 ease-in-out hover:text-green-700 font-medium">{`➡️ ${post.title}`}</H2>
        </Link>
      </h2>
      <P>{post.description}</P>
    </div>
  );
}
