import React from "react";

import { type MenuItemProps } from "../interface/menuItemProps.interface";

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
