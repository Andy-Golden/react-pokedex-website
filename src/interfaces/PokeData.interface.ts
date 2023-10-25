import { type PokeDetailApi } from "./PokeDetailApi.interface";

interface PokeData {
  count: number;
  results: PokeDetailApi[];
}

export { type PokeData };
