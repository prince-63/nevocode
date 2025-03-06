import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { pt_sans } from "@/utils/general/fonts";

export const mdxComponent: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "scroll-m-20 font-bold tracking-wide text-lg justify-center text-center py-4",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "my-2 text-md font-bold tracking-wide scroll-m-20",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "my-1 text-md scroll-m-20 font-medium ",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn("scroll-m-20 font-normal", pt_sans.className, className)}
      {...props}
    />
  ),
  a: ({ href, className, ...props }) => {
    const customClassName = "text-blue-500 hover:text-blue-700";
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
        "leading-7 text-md font-normal dark:font-light [&:not(:first-child)]:my-1",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn("ml-3.5 list-disc", pt_sans.className, className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn("ml-3.5 list-decimal", pt_sans.className, className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("text-md", pt_sans.className, className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "my-1 border-l-2 pl-2 italic [&>*]:text-muted-foreground",
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
      />
    );
  },
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn("w-full", pt_sans.className, className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "m-0 border-t p-0 even:bg-muted",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        pt_sans.className,
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "w-full bg-slate-300 dark:bg-slate-700 overflow-auto rounded-md p-2",
        
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded font-mono text-md",
        className,
      )}
      {...props}
    />
  ),
  figure: ({ className, ...props }) => (
    <figure
      className={cn(
        "overflow-x-auto border dark:border-gray-600 rounded-md",
        className,
      )}
      {...props}
    />
  ),
  span: ({ className, ...props }) => (
    <span
      className={cn("text-wrap",  className)}
      {...props}
    />
  ),
  Image,
};