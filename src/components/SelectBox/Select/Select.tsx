import React from "react";

import { type SelectProps } from "../interface/selectProps.interface";

import "./styles.scss";

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
