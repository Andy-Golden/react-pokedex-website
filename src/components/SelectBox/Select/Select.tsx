import React from "react";

import { type SelectProps } from "../interfaces";

import "./styles.scss";

const Select = ({
  defaultValue,
  value,
  children,
  className,
  onChange,
}: SelectProps): JSX.Element => {
  return (
    <select
      className={`select ${className}`}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
