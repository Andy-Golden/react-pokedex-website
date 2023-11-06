import React, { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { TYPE_COLOR, TYPE_TEXT_COLOR } from "@constants";
import type {
  DoubleDamageFromTypes,
  PokeDetail,
  PokeType as PokeTypeInterface,
} from "@interfaces";
import { getPokeDetails } from "apis/pokemon.api";

import { PokeType } from "@components";

import type { PokeDetailPagePrepareHook } from "./interfaces";

const usePokeDetailPagePrepareHook = (): PokeDetailPagePrepareHook => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [pokeActivation, setPokeActivation] = useState("blue");
  const [pokeDetails, setPokeDetails] = useState<PokeDetail>({
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    sprites: { frontDefault: "" },
    stats: [],
    abilities: [],
    types: [],
    weaknesses: { doubleDamageFrom: [] },
  });

  const [nextPokeDetails, setNextPokeDetails] = useState<
    Pick<PokeDetail, "id" | "name">
  >({
    id: 0,
    name: "",
  });

  const [prevPokeDetails, setPrevPokeDetails] = useState<
    Pick<PokeDetail, "id" | "name">
  >({
    id: 0,
    name: "",
  });

  const { id } = useParams();

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    void getPoke();
  }, [id]);

  useEffect(() => {
    void getNextPoke();
  }, [id]);

  useEffect(() => {
    void getPrevPoke();
  }, [id]);

  const getPoke = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      const data = await getPokeDetails(url);
      setPokeDetails(data);
    } catch (err) {
      showBoundary(err);
    }

    setIsLoading(false);
  };

  const getNextPoke = async (): Promise<void> => {
    setIsLoading(true);

    try {
      let nextId = id !== undefined ? +id + 1 : 1;

      if (id === "1010") {
        nextId = 1;
      }

      const url = `https://pokeapi.co/api/v2/pokemon/${nextId}/`;
      const data = await getPokeDetails(url);
      setNextPokeDetails(data);
    } catch (err) {
      showBoundary(err);
    }

    setIsLoading(false);
  };

  const getPrevPoke = async (): Promise<void> => {
    setIsLoading(true);

    try {
      let prevId = id !== undefined ? +id - 1 : 1;

      if (id === "1") {
        prevId = 1010;
      }

      const url = `https://pokeapi.co/api/v2/pokemon/${prevId}/`;
      const data = await getPokeDetails(url);
      setPrevPokeDetails(data);
    } catch (err) {
      showBoundary(err);
    }

    setIsLoading(false);
  };

  const handleActivatePoke = (type: string) => (): void => {
    setPokeActivation(type);
  };

  const renderTypes = (
    types: PokeTypeInterface[] | DoubleDamageFromTypes[],
  ): JSX.Element => {
    return (
      <>
        {types.map((item) => (
          <PokeType
            className={"poke-type"}
            key={item.slot}
            background={
              TYPE_COLOR[
                item.type.name.toUpperCase() as keyof typeof TYPE_COLOR
              ]
            }
            textColor={
              TYPE_TEXT_COLOR[
                item.type.name.toUpperCase() as keyof typeof TYPE_TEXT_COLOR
              ]
            }
          >
            {t(`homePage.pokeType.${item.type.name}`)}
          </PokeType>
        ))}
      </>
    );
  };

  return {
    t,
    isLoading,
    pokeDetails,
    pokeActivation,
    prevPokeDetails,
    nextPokeDetails,
    renderTypes,
    onActivatePoke: handleActivatePoke,
  };
};

export { usePokeDetailPagePrepareHook };
