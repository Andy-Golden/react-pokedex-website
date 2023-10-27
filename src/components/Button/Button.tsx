import React from "react";

import { type ButtonProps } from "./interfaces";

import "./styles.scss";

const Button = ({
  children,
  textColor,
  className,
  background,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      style={{ backgroundColor: background, color: textColor }}
    >
      {children}
    </button>
  );
};

export default Button;
