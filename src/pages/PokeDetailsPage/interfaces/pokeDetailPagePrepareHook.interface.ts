import type { DoubleDamageFromTypes, PokeDetail, PokeType } from "@interfaces";
import type { TFunction } from "i18next";

export interface PokeDetailPagePrepareHook {
  t: TFunction<"translation", undefined>;
  isLoading: boolean;
  pokeDetails: PokeDetail;
  pokeActivation: string;
  prevPokeDetails: Pick<PokeDetail, "id" | "name">;
  nextPokeDetails: Pick<PokeDetail, "id" | "name">;
  renderTypes: (types: PokeType[] | DoubleDamageFromTypes[]) => JSX.Element;
  onActivatePoke: (type: string) => () => void;
}
