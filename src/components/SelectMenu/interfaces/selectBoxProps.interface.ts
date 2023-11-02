import type React from "react";

interface SelectBoxProps {
  options: string[];
  defaultValue?: string | number;
  className?: string;
  background?: string;
  textColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export { type SelectBoxProps };
