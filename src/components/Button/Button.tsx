import React from "react";
import "./styles.scss";
import type { ButtonProps } from "interfaces/ButtonProps.interface";

function Button({ children, className, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
