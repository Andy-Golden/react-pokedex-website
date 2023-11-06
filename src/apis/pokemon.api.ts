import { MAX_BAR } from "@constants";
import type {
  Ability,
  AbilityResponse,
  Bar,
  DoubleDamageFromTypes,
  DoubleDamageFromTypesResponse,
  PokeData,
  PokeDetail,
  PokeDetailApi,
  PokeType,
  Stat,
  StatResponse,
  Weaknesses,
} from "@interfaces";
import type { AxiosError } from "axios";
import { instance } from "server/axios/instance";

import { calculateStat } from "@utils";

// https://pokeapi.co/api/v2/pokemon/?limit=25&offset=2

const getPokemons = async (
  limit: number,
  offset: number,
): Promise<PokeData> => {
  try {
    const pokemons = await instance.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
    );

    return pokemons.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};

const getDoubleDamageFromTypes = async (
  url: string,
): Promise<DoubleDamageFromTypes[]> => {
  try {
    const weaknessResponse = await instance.get(url);

    const doubleDamageFrom: DoubleDamageFromTypes[] =
      weaknessResponse.data.damage_relations.double_damage_from.map(
        (item: DoubleDamageFromTypesResponse) => {
          return { slot: item.name, type: { name: item.name, url: item.url } };
        },
      );

    return doubleDamageFrom;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};

const getPokeDetails = async (url: string): Promise<PokeDetail> => {
  try {
    const pokemon = await instance.get(url);

    const promises = pokemon.data.types.map(
      async (item: PokeType) => await getDoubleDamageFromTypes(item.type.url),
    );

    const promisesRespones = await Promise.all(promises);

    const weaknesses: Weaknesses = { doubleDamageFrom: [] };

    promisesRespones.forEach((promiseResponse) => {
      promiseResponse.forEach((item: DoubleDamageFromTypes) => {
        if (
          !weaknesses.doubleDamageFrom.some(
            (type: DoubleDamageFromTypes) => type.type.name === item.type.name,
          )
        ) {
          weaknesses.doubleDamageFrom.push(item);
        }
      });
    });

    const abilities: Ability[] = pokemon.data.abilities.map(
      (item: AbilityResponse) => {
        return {
          slot: item.slot,
          isHidden: item.is_hidden,
          ability: { name: item.ability.name, url: item.ability.url },
        };
      },
    );

    const stats: Stat[] = pokemon.data.stats.map((item: StatResponse) => {
      const statGrade = calculateStat(item.base_stat);
      const bars: Bar[] = [];

      for (let i = MAX_BAR - 1; i >= 0; i--) {
        bars[i] = { slot: i, isFilled: false };
        if (MAX_BAR - i < statGrade) {
          bars[i].isFilled = true;
        }
      }
      return {
        baseStat: item.base_stat,
        effort: item.effort,
        stat: { name: item.stat.name, url: item.stat.url },
        bars,
      };
    });

    const poke: PokeDetail = {
      id: pokemon.data.id,
      name: pokemon.data.name,
      height: pokemon.data.height,
      weight: pokemon.data.weight,
      sprites: { frontDefault: pokemon.data.sprites.front_default },
      abilities,
      stats,
      types: pokemon.data.types,
      weaknesses,
    };

    return poke;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};

const getListPokeDetails = async (
  limit: number,
  offset: number,
): Promise<PokeDetail[]> => {
  try {
    const pokemons = await getPokemons(limit, offset);

    const promises = pokemons.results.map(
      async (item: PokeDetailApi): Promise<PokeDetail> =>
        await getPokeDetails(item.url),
    );

    const listPokeDetail = await Promise.all(promises);

    return listPokeDetail;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};

export { getListPokeDetails, getPokeDetails, getPokemons };
