import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withContentlayer(nextConfig);
