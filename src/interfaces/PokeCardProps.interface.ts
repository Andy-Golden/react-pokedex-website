import { type ReactNode } from "react";

interface PokeCardProps {
  id: number;
  name: string;
  image: string;
  children: ReactNode;
}

export { type PokeCardProps };
