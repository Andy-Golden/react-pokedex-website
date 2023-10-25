import React from "react";
import "./styles.scss";
import { type ButtonProps } from "interfaces/ButtonProps.interface";

function Button({
  children,
  className,
  onClick,
  background,
  textColor,
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
