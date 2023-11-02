import type React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface TextInputProps {
  type: "text" | "password";
  value?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  textColor?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
}
