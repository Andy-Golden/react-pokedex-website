import type { PokeDetail } from "@interfaces";
import type { TFunction } from "i18next";

export interface PokeDetailPagePrepareHook {
  t: TFunction<"translation", undefined>;
  isLoading: boolean;
  pokeDetails: PokeDetail;
  pokeActivation: string;
  prevPokeDetails: Pick<PokeDetail, "id" | "name">;
  nextPokeDetails: Pick<PokeDetail, "id" | "name">;
  onActivatePoke: (type: string) => () => void;
}
