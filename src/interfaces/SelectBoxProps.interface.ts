import type React from "react";

interface SelectBoxProps {
  className?: string;
  options: string[];
  background?: string;
  textColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export { type SelectBoxProps };
