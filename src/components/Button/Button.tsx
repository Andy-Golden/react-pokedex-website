import React from "react";
import "./styles.scss";
import type { PropsButton } from "interfaces/PropsButton.interface";

function Button({ content, className }: PropsButton): JSX.Element {
  return <button className={`button ${className}`}>{content}</button>;
}

export default Button;
