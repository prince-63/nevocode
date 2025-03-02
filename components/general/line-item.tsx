"use client";

import { DocumentTypes } from "@/.contentlayer/generated";
import Link from "next/link";
import { H2, P } from "../ui/typography";

interface PostCardProps {
  post: DocumentTypes;
}

const LineItem = ({ post }: PostCardProps) => {
  return (
    <div className="group relative py-3 pl-5 sm:pl-24">
      <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-green-700 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[5.0rem] sm:after:left-0 sm:after:ml-[5.0rem]">
        {/* <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
          {date}
        </time> */}
        <div className="pt-[2px]">
          <h2 className="text-xl">
            <Link href={post.url}>
              <H2 className="transition delay-150 duration-300 ease-in-out hover:text-green-700 font-medium">{`➡️ ${post.title}`}</H2>
            </Link>
          </h2>
          <P>{post.description}</P>
        </div>
      </div>
    </div>
  );
};

export default LineItem;
