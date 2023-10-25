import type { PokeType } from "interfaces/PokeDetail.interface";

interface PokeCardProps {
  id: number;
  name: string;
  image: string;
  types: PokeType[];
}

export type { PokeCardProps };
