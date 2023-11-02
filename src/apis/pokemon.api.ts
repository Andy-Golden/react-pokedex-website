import type { Ability, PokeData, PokeDetail, PokeDetailApi } from "@interfaces";
import type { AxiosError } from "axios";
import type {
  AbilityResponse,
  Stat,
  StatResponse,
} from "interfaces/pokeDetail.interface";
import { instance } from "server/axios/instance";

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

const getPokeDetails = async (url: string): Promise<PokeDetail> => {
  try {
    const pokemon = await instance.get(url);

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
      return {
        baseStat: item.base_stat,
        effort: item.effort,
        stat: { ...item.stat },
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
      types: [...pokemon.data.types],
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
