import type React from "react";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import type { PokeDetail } from "@interfaces";

import { getListPokeDetails } from "@apis";
import { SortChoices } from "@enums";
import { getRandomInt } from "@utils";

import { NUMBERS_OF_POKE } from "./constants";
import type { HomePagePrepareHook } from "./interfaces";

const useHomePagePrepareHook = (): HomePagePrepareHook => {
  const [pokemons, setPokemons] = useState<PokeDetail[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    void getPokemons();
  }, [isLoadMore]);

  const getPokemons = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const offset = pokemons[pokemons.length - 1]?.id ?? 0;
      const data = await getListPokeDetails(NUMBERS_OF_POKE, offset);
      const newPokemons = [...pokemons, ...data];
      setPokemons(newPokemons);
    } catch (error) {
      showBoundary(error);
    }
    setIsLoading(false);
  };

  const getRandomPokemons = async (): Promise<void> => {
    setIsLoading(true);
    try {
      setPokemons([]);
      const newOffset = getRandomInt(20, 120);
      const data = await getListPokeDetails(NUMBERS_OF_POKE, newOffset);
      setPokemons(data);
    } catch (error) {
      showBoundary(error);
    }
    setIsLoading(false);
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
        clonedPokemons.sort((poke1, poke2) => {
          if (poke1.id < poke2.id) {
            return -1;
          }

          if (poke1.id > poke2.id) {
            return 1;
          }

          return 0;
        });
        break;
      }
      case SortChoices.HIGHEST: {
        clonedPokemons.sort((poke1, poke2) => {
          if (poke1.id < poke2.id) {
            return 1;
          }

          if (poke1.id > poke2.id) {
            return -1;
          }

          return 0;
        });
        break;
      }
      case SortChoices.A_TO_Z: {
        clonedPokemons.sort((poke1, poke2) => {
          if (poke1.name < poke2.name) {
            return -1;
          }

          if (poke1.name > poke2.name) {
            return 1;
          }

          return 0;
        });
        break;
      }
      case SortChoices.Z_TO_A: {
        clonedPokemons.sort((poke1, poke2) => {
          if (poke1.name < poke2.name) {
            return 1;
          }

          if (poke1.name > poke2.name) {
            return -1;
          }

          return 0;
        });
        break;
      }
      default: {
        break;
      }
    }

    setPokemons(clonedPokemons);
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
