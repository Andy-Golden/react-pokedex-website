import type React from "react";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import type { PokeDetail } from "@interfaces";

import { getListPokeDetails } from "@apis";
import { SortChoicesEnum } from "@enums";
import { getRandomInt } from "@utils";

import { NUMBERS_OF_POKE } from "./constants";
import type { HomePagePrepareHook } from "./interfaces";

const useHomePagePrepareHook = (): HomePagePrepareHook => {
  const [pokemons, setPokemons] = useState<PokeDetail[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    void getPokemons();
  }, [isLoadMore]);

  const getPokemons = async (): Promise<void> => {
    try {
      const offset = pokemons[pokemons.length - 1]?.id ?? 0;
      const data = await getListPokeDetails(NUMBERS_OF_POKE, offset);
      const newPokemons = [...pokemons, ...data];
      setPokemons(newPokemons);
    } catch (error) {
      showBoundary(error);
    }
  };

  const getRandomPokemons = async (): Promise<void> => {
    try {
      const newOffset = getRandomInt(20, 120);
      const data = await getListPokeDetails(NUMBERS_OF_POKE, newOffset);
      setPokemons(data);
    } catch (error) {
      showBoundary(error);
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
      case SortChoicesEnum.lowest: {
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
      case SortChoicesEnum.highest: {
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
      case SortChoicesEnum.aToZ: {
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
      case SortChoicesEnum.ztoA: {
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
    onLoadMore: handleLoadMore,
    onSurpriseMe: handleSurpriseMe,
    onSortByChange: handleSortByChange,
  };
};

export { useHomePagePrepareHook };
