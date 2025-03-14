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
import CLEAN_CODE from "./utils/content/clean-code";
import DESIGN_PATTERN from "./utils/content/design-pattern";
import DATA_STRUCTURE from "./utils/content/data-structure";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [DBMS, SQL, CLEAN_CODE, DESIGN_PATTERN, DATA_STRUCTURE],
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
          theme: {
            dark: "github-dark-dimmed",
            light: "github-light",
          },
          bypassInlineCode: false,
          keepBackground: true,
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
