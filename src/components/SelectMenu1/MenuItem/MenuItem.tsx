import React, { type ReactNode } from "react";

interface MenuItemProps {
  className?: string;
  value?: string | number;
  selected?: boolean;
  children?: ReactNode;
}

function MenuItem({
  className,
  value,
  selected,
  children,
}: MenuItemProps): JSX.Element {
  return (
    <option className={className} value={value} selected={selected}>
      {children}
    </option>
  );
}

export default MenuItem;
