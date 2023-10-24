import { useEffect, useState } from "react";
import { NUMBERS_OF_POKE } from "./constants";
import type { PokeDetail } from "interfaces/PokeDetail.interface";
import { getListPokeDetails } from "apis/pokemon.api";

const usePokemons = (): PokeDetail[] => {
  const [pokemons, setPokemons] = useState<PokeDetail[]>([]);

  const getPokemons = async (): Promise<void> => {
    const data = await getListPokeDetails(NUMBERS_OF_POKE);
    setPokemons(data);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getPokemons();
  }, []);

  return pokemons;
};

const getRandomInt = (min: number, max: number): number => {
  if (max < min) {
    const temp: number = max;
    max = min;
    min = temp;
  }
  const randomNum = Math.floor(Math.random() * (max - min) + min);

  return randomNum;
};

export { usePokemons, getRandomInt };
