import type { PokeDetail } from "@interfaces";
import type { TFunction } from "i18next";

export interface PokeDetailPagePrepareHook {
  t: TFunction<"translation", undefined>;
  pokeDetails: PokeDetail;
}
