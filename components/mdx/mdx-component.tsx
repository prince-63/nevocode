import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { pt_sans } from "@/utils/general/fonts";

export const mdxComponent: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "scroll-m-20 font-bold tracking-wide text-2xl justify-center my-4 text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "my-3 text-xl font-bold tracking-wide scroll-m-20 text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "my-2 text-lg tracking-wide scroll-m-20 font-bold text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "my-1 scroll-m-20 tracking-wide text-base font-bold text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  a: ({ href, className, ...props }) => {
    const customClassName = "text-blue-500 hover:text-blue-700 text-wrap";
    if (href?.startsWith("/")) {
      return (
        <Link
          ref={href}
          className={cn(customClassName, pt_sans.className, className)}
          {...props}
        />
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a
          href={href}
          className={cn(customClassName, pt_sans.className, className)}
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(customClassName, pt_sans.className, className)}
        {...props}
      />
    );
  },
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "leading-7 text-base tracking-wide font-normal [&:not(:first-child)]:my-2 text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "ml-4 my-2 list-disc text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "ml-4 my-2 list-decimal text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn(pt_sans.className, className, "my-2")} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "my-2 border-l-2 pl-2 italic [&>*]:text-muted-foreground text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  img: ({
    src,
    alt,
    width,
    height,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const newWidth = width?.toString() || "759";
    const widthInNumber = parseInt(newWidth, 10);

    const newHeight = height?.toString() || "759";
    const heightInNumber = parseInt(newHeight, 10);
    return (
      <Image
        {...props}
        layout="responsive"
        loading="lazy"
        alt={`${alt}`}
        src={`${src}`}
        width={widthInNumber}
        height={heightInNumber}
        className="rounded-md"
      />
    );
  },
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <table className={cn("w-full", className)} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "border-t even:bg-muted text-wrap",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-2 text-wrap sm:px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-2 text-wrap sm:px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre className={cn(className)} {...props} />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative font-mono overflow-x-auto bg-gray-600 dark:bg-lightBg px-1 text-textDark dark:text-textLight text-wrap",
        className,
      )}
      {...props}
    />
  ),
  figure: ({ className, ...props }) => (
    <figure
      data-theme="github-dark-dimmed github-light"
      className={cn(
        "rounded-md my-2 p-2 bg-[#FAFAFA] border text-wrap",
        className,
      )}
      {...props}
    />
  ),
  span: ({ className, ...props }) => (
    <span className={cn("text-wrap", className)} {...props} />
  ),
  Image,
};
