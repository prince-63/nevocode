import { makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, { LineElement } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { transformerNotationDiff } from "@shikijs/transformers";
import imageSize from "rehype-img-size";
import DBMS from "./utils/content/dbms";
import SQL from "./utils/content/sql";
import OBJECT_ORIANTED_PROGRAMMING from "./utils/content/object-orianted-programming";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [DBMS, SQL, OBJECT_ORIANTED_PROGRAMMING],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      remarkParse,
      remarkRehype,
      rehypeStringify,
      [
        rehypePrettyCode,
        {
          bypassInlineCode: true,
          keepBackground: false,
          defaultLang: {
            block: "plaintext",
            inline: "plaintext",
          },
          onVisiteLine(node: LineElement) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: "" }];
            }
          },
          onVisitHighlightedLine(node: LineElement) {
            node.properties.className?.push("line--highlighted");
          },
          onVisitHighlightedWord(node: LineElement) {
            node.properties.className = ["word--highlighted"];
          },
          transformers: [transformerNotationDiff()],
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: ["Link to section"],
          },
        },
      ],
      [imageSize, { dir: "public" }],
    ],
  },
  disableImportAliasWarning: true,
});
