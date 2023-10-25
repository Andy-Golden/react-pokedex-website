import React from "react";
import "./styles.scss";
import type { ToggleButtonProps } from "interfaces/ToggleButtonProps.interface";

function ToggleButton({
  className,
  onChange,
}: Partial<ToggleButtonProps>): JSX.Element {
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
