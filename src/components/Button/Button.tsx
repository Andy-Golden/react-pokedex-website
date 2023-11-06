import React from "react";

import { type ButtonProps } from "./interfaces";

import "./styles.scss";

const Button = ({
  children,
  className,
  background,
  textColor,
  type,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      style={{ backgroundColor: background, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
