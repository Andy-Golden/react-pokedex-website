import type React from "react";

interface SelectProps {
  defaultValue?: string | number;
  value?: string | number;
  children?: React.ReactNode;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export { type SelectProps };
