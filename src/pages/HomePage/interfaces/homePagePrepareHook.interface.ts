import type React from "react";
import type { PokeDetail } from "@interfaces";
import type { TFunction } from "i18next";

export interface HomePagePrepareHook {
  t: TFunction<"Translation", undefined>;
  pokemons: PokeDetail[];
  isLoading: boolean;
  onLoadMore: () => void;
  onSurpriseMe: () => void;
  onSortByChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
