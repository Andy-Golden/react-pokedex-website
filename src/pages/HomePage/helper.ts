import type React from "react";
import { useEffect, useState } from "react";
import { getListPokeDetails } from "apis/pokemon.api";
import type { PokeDetail } from "interfaces/PokeDetail.interface";

import { NUMBERS_OF_POKE } from "./constants";

const usePokemons = (): [
  PokeDetail[],
  React.Dispatch<React.SetStateAction<PokeDetail[]>>,
] => {
  const [pokemons, setPokemons] = useState<PokeDetail[]>([]);

  const getPokemons = async (): Promise<void> => {
    try {
      const data = await getListPokeDetails(NUMBERS_OF_POKE);
      setPokemons(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void getPokemons();
  }, []);

  return [pokemons, setPokemons];
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

export { getRandomInt, usePokemons };
