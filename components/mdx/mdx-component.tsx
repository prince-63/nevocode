import type { MDXComponents } from "mdx/types";
import CodeBlock from "./code-block";

export const mdxComponent: MDXComponents = {
  CodeBlock,
  h1: ({ children }) => (
    <h1 className="text-lg sm:text-xl justify-center text-center font-bold text-textLight dark:text-textDark py-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="py-1 text-textLight dark:text-textDark   font-bold">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="py-1 text-textLight dark:text-textDark  font-bold">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="py-2 text-wrap text-textLight dark:text-textDark">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="text-textLight dark:text-textDark list-disc px-3">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="font-normal text-base text-textLight dark:text-textDark">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="my-1 text-textLight dark:text-textDark">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-1 border-l-2 border-blue-500 p-2 italic bg-lightBg/80 dark:bg-darkBg/90 text-textLight dark:text-textDark">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="bg-slate-200 rounded-sm p-4 overflow-x-auto">
      {children}
    </pre>
    // <MultilineCode>{children}</MultilineCode>
  ),
  code: ({ children }) => (
    // <InlineCode>{children}</InlineCode>
    <code className="bg-slate-200 text-textLight">{children}</code>
  ),
  strong: ({ children }) => (
    <strong className="text-textLight dark:text-textDark font-medium">
      {children}
    </strong>
  ),
  em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  hr: () => <hr className="my-4 border-gray-300" />,
  a: ({ children, href }) => (
    <a href={href} className="text-blue-500 font-medium">
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
  thead: ({ children }) => <thead>{children}</thead>,
  tbody: ({ children }) => (
    <tbody className="divide-y divide-gray-200">{children}</tbody>
  ),
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => (
    <th className="border border-gray-300 px-4 py-2 text-left font-medium">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-300 px-4 py-2">{children}</td>
  ),
  br: ({ children }) => <br className="h-1">{children}</br>,
};
