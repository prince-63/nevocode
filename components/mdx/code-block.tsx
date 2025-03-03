"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import { copyTextToClipboard } from "@/utils/general/copy-text-clipboard";
import IconButton from "../general/icon-button";
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
      <IconButton
        onClick={() => handleCopyClick(codeString)}
        className="rounded-md absolute right-2 top-2 hover:bg-gray-300 border border-1"
        size="sm"
      >
        <Copy />
      </IconButton>
      <SyntaxHighlighter
        language={language}
        className="rounded-lg p-3"
        style={coldarkCold}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
