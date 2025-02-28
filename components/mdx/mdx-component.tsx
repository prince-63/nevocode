import type { MDXComponents } from "mdx/types";
import CodeBlock from "./code-block";
import Quiz from "./quiz";
import { Typography } from "@mui/material";

export const mdxComponent: MDXComponents = {
  CodeBlock,
  Quiz,
  Typography,
  h1: ({ children }) => (
    <Typography
      variant="h1"
      className="flex items-center text-lg justify-center text-center font-bold  text-gray-900 py-4"
    >
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      variant="h2"
      className="py-2  flex items-center font-bold text-gray-900"
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      variant="h3"
      className="py-1 flex items-center font-bold text-gray-900"
    >
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography
      variant="body1"
      className="py-1 text-gray-700  leading-relaxed font-normal"
      color={"secondary"}
    >
      {children}
    </Typography>
  ),
  ul: ({ children }) => (
    <Typography variant="caption" className="font-normal text-base">
      {children}
    </Typography>
  ),
  ol: ({ children }) => (
    <Typography variant="caption" className="font-normal text-base">
      {children}
    </Typography>
  ),
  li: ({ children }) => <li className="my-1 text-gray-700">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 bg-gray-100 p-4 italic text-gray-600">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-300 p-4 rounded-lg overflow-x-auto">{children}</pre>
  ),
  code: ({ children }) => (
    <code className="bg-gray-300 px-[8px] py-0.5 rounded-sm">{children}</code>
  ),
  strong: ({ children }) => (
    <Typography
      variant="caption"
      className="text-base text-gray-900 font-medium"
    >
      {children}
    </Typography>
  ),
  em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  hr: () => <hr className="my-4 border-gray-300" />,
  a: ({ children, href }) => (
    <a href={href} className=" font-medium">
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-gray-200">{children}</thead>,
  tbody: ({ children }) => (
    <tbody className="divide-y divide-gray-200">{children}</tbody>
  ),
  tr: ({ children }) => <tr className="hover:bg-gray-100">{children}</tr>,
  th: ({ children }) => (
    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-300 px-4 py-2">{children}</td>
  ),
  br: ({ children }) => <br className="h-2">{children}</br>,
};
