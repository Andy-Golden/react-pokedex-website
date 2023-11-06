import React from "react";

import { type ToggleButtonProps } from "./interfaces";

import "./styles.scss";

const ToggleButton = ({
  className,
  onChange,
}: ToggleButtonProps): JSX.Element => {
  return (
    <div className={className}>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
