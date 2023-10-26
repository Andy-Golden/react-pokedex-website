import React from "react";

import { type ToggleButtonProps } from "./interface/ToggleButtonProps.interface";

import "./styles.scss";

function ToggleButton({ className, onChange }: ToggleButtonProps): JSX.Element {
  return (
    <div className={className}>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
