"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import { copyTextToClipboard } from "@/utils/general/copy-text-clipboard";
interface CodeBlockProps {
  language: string;
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  const handleCopyClick = async (text: string) => {
    await copyTextToClipboard(text);
  };

  const codeString = typeof children === "string" ? children : String(children);

  return (
    <div className="relative rounded-lg">
      <button
        onClick={() => handleCopyClick(codeString)}
        className="flex items-center justify-center w-8 h-8 p-1 bg-gray-100 rounded-md absolute right-2 top-2 hover:bg-gray-300"
      >
        <Copy width={18} />
      </button>
      <SyntaxHighlighter
        language={language}
        style={darcula}
        className="rounded-lg border border-gray-300 p-3"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
