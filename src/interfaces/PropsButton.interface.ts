import type { ReactNode } from "react";

interface PropsButton {
  children: ReactNode;
  className: string;
  onClick: () => void;
}

export type { PropsButton };
