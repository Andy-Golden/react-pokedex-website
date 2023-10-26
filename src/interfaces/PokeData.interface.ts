import type { PokeDetailApi } from "./PokeDetailApi.interface";

export interface PokeData {
  count: number;
  results: PokeDetailApi[];
}
