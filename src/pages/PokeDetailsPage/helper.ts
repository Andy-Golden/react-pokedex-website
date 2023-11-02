import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import type { PokeDetail } from "@interfaces";
import { getPokeDetails } from "apis/pokemon.api";

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

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    void getPoke();
  }, []);

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const getPoke = async (): Promise<void> => {
    try {
      const data = await getPokeDetails(url);
      setPokeDetails(data);
    } catch (err) {
      showBoundary(err);
    }
  };

  return { pokeDetails };
};

export { usePokeDetailPagePrepareHook };
