import type React from "react";
import { useEffect, useState } from "react";
import type { PokeDetail } from "@interfaces";

import { getListPokeDetails } from "@apis";
import { SortChoices } from "@enums";
import { getRandomInt } from "@utils";

import { NUMBERS_OF_POKE } from "./constants";
import type { HomePagePrepareHook } from "./interfaces";

const useHomePagePrepareHook = (): HomePagePrepareHook => {
  const [pokemons, setPokemons] = useState<PokeDetail[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void getPokemons();
  }, [isLoadMore]);

  const getPokemons = async (): Promise<void> => {
    try {
      const offset = pokemons[pokemons.length - 1]?.id ?? 0;
      const data = await getListPokeDetails(NUMBERS_OF_POKE, offset);
      const newPokemons = [...pokemons, ...data];
      setPokemons(newPokemons);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomPokemons = async (): Promise<void> => {
    try {
      const newOffset = getRandomInt(20, 120);
      const data = await getListPokeDetails(NUMBERS_OF_POKE, newOffset);
      setPokemons(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = (): void => {
    const isLoad = !isLoadMore;
    setIsLoadMore(isLoad);
  };

  const handleSurpriseMe = (): void => {
    void getRandomPokemons();
  };

  const handleSortByChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const clonedPokemons = [...pokemons];

    switch (e.target.value) {
      case SortChoices.LOWEST: {
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
      case SortChoices.HIGHEST: {
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
      case SortChoices.ATOZ: {
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
      case SortChoices.ZTOA: {
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

  return {
    pokemons,
    isLoading,
    onLoadMore: handleLoadMore,
    onSurpriseMe: handleSurpriseMe,
    onSortByChange: handleSortByChange,
  };
};

export { useHomePagePrepareHook };
