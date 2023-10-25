import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className: string;
  onClick: () => void;
}

export { type ButtonProps };
