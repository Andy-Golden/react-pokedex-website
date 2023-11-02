import type React from "react";

export interface SelectMenuProps {
  options: string[];
  className?: string;
  background?: string;
  textColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
