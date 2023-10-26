import React from "react";
import "./styles.scss";
import { type SelectProps } from ".././interface/SelectProps.interface";

function Select({
  className,
  children,
  value,
  defaultValue,
  onChange,
}: SelectProps): JSX.Element {
  return (
    <>
      <select
        className={`select ${className}`}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {children}
      </select>
    </>
  );
}

export default Select;
