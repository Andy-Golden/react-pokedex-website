import type React from "react";

interface MenuItemProps {
  className?: string;
  value?: string | number;
  selected?: boolean;
  children?: React.ReactNode;
}

export { type MenuItemProps };
