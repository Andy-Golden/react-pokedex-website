import type { PokeDetailApi } from "./pokeDetailApi.interface";

export interface PokeData {
  count: number;
  results: PokeDetailApi[];
}
