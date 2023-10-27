import type React from "react";
import { useEffect, useState } from "react";
import type { PokeDetail } from "@interfaces";
import { getListPokeDetails } from "apis/pokemon.api";

import { NUMBERS_OF_POKE, VISIBLE_OF_POKE } from "./constants";
import type { HomePagePrepareHook } from "./interfaces";

const getRandomInt = (min: number, max: number): number => {
  if (max < min) {
    const temp: number = max;
    max = min;
    min = temp;
  }
  const randomNum = Math.floor(Math.random() * (max - min) + min);

  return randomNum;
};

const usePrepareHook = (): HomePagePrepareHook => {
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

  const [visible, setVisible] = useState(VISIBLE_OF_POKE);
  const [start, setStart] = useState(0);

  const handleLoadMore = (): void => {
    const moreItems = visible + VISIBLE_OF_POKE;

    if (moreItems > pokemons.length) {
      return;
    }

    setVisible(moreItems);
  };

  const handleSurpriseMe = (): void => {
    const startIndex = getRandomInt(0, 100);

    setStart(startIndex);
    setVisible(startIndex + 25);
  };

  const handleFilter = (index: number): void => {
    const clonedPokemons = [...pokemons];

    switch (index) {
      case 0: {
        const lowestPokemons = clonedPokemons.sort((poke1, poke2) => {
          if (poke1.id < poke2.id) {
            return -1;
          }

          if (poke1.id > poke2.id) {
            return 1;
          }

          return 0;
        });
        setPokemons(lowestPokemons);
        break;
      }
      case 1: {
        const highestPokemons = clonedPokemons.sort((poke1, poke2) => {
          if (poke1.id < poke2.id) {
            return 1;
          }

          if (poke1.id > poke2.id) {
            return -1;
          }

          return 0;
        });
        setPokemons(highestPokemons);
        break;
      }
      case 2: {
        const aToZPokemons = clonedPokemons.sort((poke1, poke2) => {
          if (poke1.name < poke2.name) {
            return -1;
          }

          if (poke1.name > poke2.name) {
            return 1;
          }

          return 0;
        });
        setPokemons(aToZPokemons);
        break;
      }
      case 3: {
        const aToZPokemons = clonedPokemons.sort((poke1, poke2) => {
          if (poke1.name < poke2.name) {
            return 1;
          }

          if (poke1.name > poke2.name) {
            return -1;
          }

          return 0;
        });
        setPokemons(aToZPokemons);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSortByChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    handleFilter(+e.target.value);
  };

  return {
    start,
    visible,
    pokemons,
    onClickLoadMore: handleLoadMore,
    onClickSurpriseMe: handleSurpriseMe,
    onChangeSortBy: handleSortByChange,
  };
};

export { usePrepareHook };
