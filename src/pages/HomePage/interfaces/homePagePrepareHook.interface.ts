import type React from "react";
import type { PokeDetail } from "interfaces";

export interface HomePagePrepareHook {
  start: number;
  visible: number;
  pokemons: PokeDetail[];
  onLoadMore: () => void;
  onSurpriseMe: () => void;
  onSortByChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
