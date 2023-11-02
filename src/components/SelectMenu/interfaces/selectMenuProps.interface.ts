import type React from "react";

export interface SelectMenuProps {
  options: string[];
  defaultValue?: string | number;
  className?: string;
  background?: string;
  textColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
