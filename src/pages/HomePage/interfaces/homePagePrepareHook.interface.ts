import type React from "react";
import type { PokeDetail } from "interfaces";

export interface HomePagePrepareHook {
  pokemons: PokeDetail[];
  start: number;
  visible: number;
  onClickLoadMore: () => void;
  onClickSurpriseMe: () => void;
  onChangeSortBy: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
