import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, { LineElement } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
// import { transformerCopyButton } from "@rehype-pretty/transformers";
import imageSize from "rehype-img-size";

export const CProgramming = defineDocumentType(() => ({
  name: "CProgramming",
  filePathPattern: "c/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: false,
    },
    author: {
      type: "string",
      required: false,
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export const DBMS = defineDocumentType(() => ({
  name: "Dbms",
  filePathPattern: "dbms/**/*.mdx",
  contentType: "mdx",
  fields: {
    guideId: {
      type: "string",
      required: true,
    },
    moduleId: {
      type: "string",
      required: true
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: false,
    },
    author: {
      type: "string",
      required: false,
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export const Cpp = defineDocumentType(() => ({
  name: "Cpp",
  filePathPattern: "cpp/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: false,
    },
    author: {
      type: "string",
      required: false,
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [CProgramming, DBMS, Cpp],
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
          theme: "one-dark-pro",
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
          // transformers: [
          //   transformerCopyButton({
          //     visibility: "always",
          //     feedbackDuration: 3000,
          //   }),
          // ],
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
