import type React from "react";
import type { PokeDetail } from "interfaces";

export interface HomePagePrepareHook {
  start: number;
  visible: number;
  pokemons: PokeDetail[];
  onClickLoadMore: () => void;
  onClickSurpriseMe: () => void;
  onChangeSortBy: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
