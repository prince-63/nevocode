import React from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import clsx from "clsx";

interface CustomTypographyProps extends TypographyProps {
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<CustomTypographyProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <MuiTypography {...rest} className={clsx("text-gray-700", className)}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
