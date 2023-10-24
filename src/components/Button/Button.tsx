import React from "react";
import "./styles.scss";
import type { PropsButton } from "interfaces/PropsButton.interface";

function Button({ content, className, onClick }: PropsButton): JSX.Element {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {content}
    </button>
  );
}

Button.defaultProps = {
  content: "",
  className: "",
  onClick: () => {},
};

export default Button;
