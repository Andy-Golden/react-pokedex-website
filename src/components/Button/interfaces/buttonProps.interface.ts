import type React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  background?: string;
  textColor?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export { type ButtonProps };
