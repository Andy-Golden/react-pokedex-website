import React from "react";
import "./styles.scss";
import type { PropsButton } from "interfaces/PropsButton.interface";

function Button({ children, className, onClick }: PropsButton): JSX.Element {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
