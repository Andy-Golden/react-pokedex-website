import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokeDetails } from "apis/pokemon.api";
import type { PokeDetail } from "interfaces";

import type { PokeDetailPagePrepareHook } from "./interfaces";

const usePokeDetailPagePrepareHook = (): PokeDetailPagePrepareHook => {
  const [pokeDetails, setPokeDetails] = useState<PokeDetail>({
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    sprites: { frontDefault: "" },
    abilities: [],
    types: [],
  });

  const { id } = useParams();

  useEffect(() => {
    void getPoke();
  }, []);

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const getPoke = async (): Promise<void> => {
    try {
      const data = await getPokeDetails(url);
      setPokeDetails(data);
    } catch (err) {
      console.log("🚀 ~ file: helper.ts:33 ~ getPoke ~ err:", err);
    }
  };

  return { pokeDetails };
};

export { usePokeDetailPagePrepareHook };
