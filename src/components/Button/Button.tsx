import React from "react";
import "./styles.scss";
import { type ButtonProps } from "./interface/ButtonProps.interface";

function Button({
  children,
  textColor,
  className,
  background,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      style={{ backgroundColor: background, color: textColor }}
    >
      {children}
    </button>
  );
}

export default Button;
