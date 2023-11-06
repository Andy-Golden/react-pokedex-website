import React from "react";

import type { TextInputProps } from "./interfaces";

import "./styles.scss";

const TextInput = ({
  type,
  value,
  children,
  className,
  background,
  textColor,
  placeholder,
  register,
}: TextInputProps): JSX.Element => {
  return (
    <input
      type={type}
      value={value}
      className={`text-input ${className}`}
      placeholder={placeholder}
      style={{ background, color: textColor }}
      {...register}
    >
      {children}
    </input>
  );
};

export default TextInput;
