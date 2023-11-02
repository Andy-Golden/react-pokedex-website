import type React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  background?: string;
  textColor?: string;
  onClick?: () => void;
}

export { type ButtonProps };
