import React, { type ReactNode } from "react";
import "./styles.scss";

interface SelectProps {
  children?: ReactNode;
  value?: string | number;
  defaultValue?: string | number;
  className?: string;
}

function Select({
  className,
  children,
  value,
  defaultValue,
}: SelectProps): JSX.Element {
  return (
    <>
      <select
        className={`select ${className}`}
        value={value}
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </>
  );
}

export default Select;
