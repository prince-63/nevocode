import * as React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { cn } from "@/lib/utils";

interface LinkProps extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
  noCustomization?: boolean;
  externalLink?: boolean;
  withUnderline?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      noCustomization,
      children = null,
      className = "",
      externalLink = false,
      withUnderline = false,
      ...props
    }: LinkProps,
    ref,
  ) => {
    return (
      <NextLink
        {...props}
        target={externalLink ? "_blank" : "_self"}
        ref={ref}
        className={cn(
          noCustomization ??
            "text-base font-medium text-gray-700 dark:text-gray-50 transition-all hover:text-green-700 dark:hover:text-green-500",
          withUnderline
            ? "underline underline-offset-4 transition-all text-gray-700 dark:text-gray-50 hover:text-green-700 dark:hover:text-green-500"
            : "",
          className,
        )}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";

export default Link;
