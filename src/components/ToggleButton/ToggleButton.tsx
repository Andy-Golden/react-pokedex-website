import React from "react";
import "./styles.scss";
import { type ToggleButtonProps } from "./interface/ToggleButtonProps.interface";

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
