import React, { forwardRef, JSX } from "react";
import { cn } from "@/lib/utils";

const createComponent = <T extends HTMLElement>(
  tag: keyof JSX.IntrinsicElements,
  defaultClassName: string,
  displayName: string,
) => {
  const Component = forwardRef<T, React.HTMLAttributes<T>>((props, ref) => {
    return React.createElement(
      tag,
      { ...props, ref, className: cn(defaultClassName, props.className) },
      props.children,
    );
  });
  Component.displayName = displayName;
  return Component;
};

export const H1 = createComponent<HTMLHeadingElement>(
  "h1",
  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-textLight dark:text-textDark",
  "H1",
);

export const H2 = createComponent<HTMLHeadingElement>(
  "h2",
  "scroll-m-20 border-b py-2 text-3xl font-semibold tracking-tight first:mt-0 text-textLight dark:text-textDark",
  "H2",
);

export const H3 = createComponent<HTMLHeadingElement>(
  "h3",
  "scroll-m-20 text-2xl font-semibold tracking-tight text-textLight dark:text-textDark",
  "H3",
);

export const H4 = createComponent<HTMLHeadingElement>(
  "h4",
  "scroll-m-20 text-xl font-semibold tracking-tight text-textLight dark:text-textDark",
  "H4",
);

export const Lead = createComponent<HTMLParagraphElement>(
  "p",
  "text-xl text-muted-foreground text-textLight dark:text-textDark",
  "Lead",
);

export const P = createComponent<HTMLParagraphElement>(
  "p",
  "leading-7 [&:not(:first-child)]:mt-6 text-textLight dark:text-textDark",
  "P",
);

export const Large = createComponent<HTMLDivElement>(
  "div",
  "text-lg font-semibold text-textLight dark:text-textDark",
  "Large",
);

export const Small = createComponent<HTMLParagraphElement>(
  "p",
  "text-sm font-medium leading-none text-textLight dark:text-textDark",
  "Small",
);

export const Muted = createComponent<HTMLSpanElement>(
  "span",
  "text-sm text-muted-foreground text-textLight dark:text-textDark",
  "Muted",
);

export const InlineCode = createComponent<HTMLSpanElement>(
  "code",
  "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-textLight dark:text-textDark",
  "InlineCode",
);

export const MultilineCode = createComponent<HTMLPreElement>(
  "pre",
  "relative rounded bg-muted p-4 font-mono text-sm font-semibold overflow-x-auto text-textLight dark:text-textDark",
  "MultilineCode",
);

export const List = createComponent<HTMLUListElement>(
  "ul",
  "my-6 ml-6 list-disc [&>li]:mt-2 text-textLight dark:text-textDark",
  "List",
);

export const Quote = createComponent<HTMLQuoteElement>(
  "blockquote",
  "mt-6 border-l-2 pl-6 italic text-muted-foreground text-textLight dark:text-textDark",
  "Quote",
);
