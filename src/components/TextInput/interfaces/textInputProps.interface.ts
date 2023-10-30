import type React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface TextInputProps {
  value?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  textColor?: string;
  type: "text" | "password";
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
}
