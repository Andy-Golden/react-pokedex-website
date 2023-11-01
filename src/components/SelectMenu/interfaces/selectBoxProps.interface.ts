import type React from "react";

interface SelectBoxProps {
  options: string[];
  className?: string;
  background?: string;
  textColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export { type SelectBoxProps };
