import type React from "react";

interface MenuItemProps {
  value?: string | number;
  children?: React.ReactNode;
  className?: string;
  selected?: boolean;
}

export { type MenuItemProps };
