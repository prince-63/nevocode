import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { Element } from "hast";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "doc/**/*.mdx",
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

export const Programming = defineDocumentType(() => ({
  name: "Programming",
  filePathPattern: "programming/**/*.mdx",
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
  documentTypes: [Doc, Programming],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node: Element) {
            if (!node.children || node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: Element) {
            node.properties = node.properties || {};
            if (!Array.isArray(node.properties.className)) {
              node.properties.className = [];
            }
            node.properties.className.push("line-highlighted");
          },
          onVisitHighlightedWord(node: Element) {
            node.properties = node.properties || {};
            node.properties.className = ["word-highlighted"];
          },
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
    ],
  },
  disableImportAliasWarning: true,
});
