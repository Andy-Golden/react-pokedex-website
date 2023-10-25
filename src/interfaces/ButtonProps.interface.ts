import { type ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  background?: string;
  textColor?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export { type ButtonProps };
