import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  Typography,
} from "@mui/material";
import clsx from "clsx";

interface CustomButtonProps extends MuiButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <MuiButton
      {...rest}
      className={clsx(
        "px-3 py-2 rounded-md text-gray-100 bg-green-600 transition delay-150 duration-300 ease-in-out hover:bg-green-700",
        className, // Allows custom styles
      )}
    >
      <Typography variant="body2">{children}</Typography>
    </MuiButton>
  );
};

export default Button;
