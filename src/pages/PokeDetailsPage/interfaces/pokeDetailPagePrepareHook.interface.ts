import type { PokeDetail } from "@interfaces";
import type { TFunction } from "i18next";

export interface PokeDetailPagePrepareHook {
  t: TFunction<"translation", undefined>;
  pokeActivation: string;
  prevPokeDetails: Pick<PokeDetail, "id" | "name">;
  pokeDetails: PokeDetail;
  nextPokeDetails: Pick<PokeDetail, "id" | "name">;
  onActivatePoke: (type: string) => () => void;
}
