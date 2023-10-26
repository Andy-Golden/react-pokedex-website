import type React from "react";

interface SelectProps {
  children?: React.ReactNode;
  value?: string | number;
  defaultValue?: string | number;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export { type SelectProps };
