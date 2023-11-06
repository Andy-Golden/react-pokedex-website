import type React from "react";

import type { Option } from ".";

export interface SelectMenuProps {
  options: Option[];
  className?: string;
  background?: string;
  textColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
