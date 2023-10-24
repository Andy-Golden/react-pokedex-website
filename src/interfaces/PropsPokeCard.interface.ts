import type { PokeType } from "interfaces/PokeDetail.interface";

interface PropsPokeCard {
  id: number;
  name: string;
  image: string;
  types: PokeType[];
}

export type { PropsPokeCard };
