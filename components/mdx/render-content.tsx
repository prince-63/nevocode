"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponent } from "./mdx-component";
interface RenderContentProps {
  mdxContent: string;
}

const RenderContent: React.FC<RenderContentProps> = ({ mdxContent }) => {
  const MdxContent = useMDXComponent(mdxContent);

  return (
    <div className="max-w-full">
      <MdxContent components={mdxComponent} />
    </div>
  );
};

export default RenderContent;
