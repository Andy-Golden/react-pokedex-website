import type React from "react";
import type { PokeDetail } from "interfaces";

export interface HomePagePrepareHook {
  pokemons: PokeDetail[];
  onLoadMore: () => void;
  onSurpriseMe: () => void;
  onSortByChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
