import { DocumentTypes } from "@/.contentlayer/generated";
import Link from "next/link";
import Typography from "./typography";

interface PostCardProps {
  post: DocumentTypes;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="">
      <h2 className="mb-1 text-xl">
        <Link href={post.url}>
          <Typography
            variant="body1"
            className="transition delay-150 duration-300 ease-in-out hover:text-green-700 font-medium"
          >{`➡️ ${post.title}`}</Typography>
        </Link>
      </h2>
      <Typography variant="body2">{post.description}</Typography>
    </div>
  );
}
