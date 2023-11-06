import type React from "react";

interface PokeCardProps {
  id: number;
  name: string;
  image: string;
  children: React.ReactNode;
  background?: string;
  textColor?: string;
}

export { type PokeCardProps };
