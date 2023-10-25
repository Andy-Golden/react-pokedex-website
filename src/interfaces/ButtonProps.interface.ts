import { type ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  background?: string;
  textColor?: string;
  onClick?: () => void;
}

export { type ButtonProps };
