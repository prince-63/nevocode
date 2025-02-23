// "use client";

// import React from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

// interface CodeBlockProps {
//     language: string;
//     children: React.ReactNode;
// }

// const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
//     const codeString = typeof children === "string" ? children : String(children);

//     return (
//         <SyntaxHighlighter language={language} style={darcula} className="rounded-lg border border-gray-300 p-3">
//             {codeString}
//         </SyntaxHighlighter>
//     );
// };

// export default CodeBlock;