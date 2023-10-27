import { type ReactNode } from "react";

interface PokeCardProps {
  id: number;
  name: string;
  image: string;
  children: ReactNode;
  background?: string;
  textColor?: string;
}

export { type PokeCardProps };
