import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-100 d active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-800 dark:[&_svg]:stroke-gray-200 [&_svg]:hover:stroke-gray-700 dark:[&_svg]:hover:stroke-gray-900",
  {
    variants: {
      size: {
        sm: "[&_svg]:w-5 [&_svg]:h-5",
        md: "[&_svg]:w-6 [&_svg]:h-6",
        lg: "[&_svg]:w-8 [&_svg]:h-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      size,
      showTooltip = false,
      tooltipText = "",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn("relative", iconButtonVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {children}
        {showTooltip && tooltipText.length > 0 && (
          <span className="absolute -top-8 transition-all rounded-lg hover:bg-gray-300 dark:hover:bg-gray-200 active:bg-gray-200 px-2 py-1 text-sm">
            {tooltipText}
          </span>
        )}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
