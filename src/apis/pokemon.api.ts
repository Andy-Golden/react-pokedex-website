import type { Ability, PokeData, PokeDetail, PokeDetailApi } from "interfaces";
import { instance } from "server/axios/instance";

// https://pokeapi.co/api/v2/pokemon/?limit=25&offset=2

const getPokemons = async (
  limit: number,
  offset: number,
): Promise<PokeData> => {
  const pokemons = await instance.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
  );

  return pokemons.data;
};

const getPokeDetails = async (url: string): Promise<PokeDetail> => {
  const pokemon = await instance.get(url);

  const abilities: Ability[] = pokemon.data.abilities.map((item) => {
    return {
      slot: item.slot,
      isHidden: item.is_hidden,
      abilities: { name: item.ability.name, url: item.ability.url },
    };
  });

  const poke: PokeDetail = {
    id: pokemon.data.id,
    name: pokemon.data.name,
    height: pokemon.data.height,
    weight: pokemon.data.weight,
    sprites: { frontDefault: pokemon.data.sprites.front_default },
    abilities,
    types: [...pokemon.data.types],
  };

  return poke;
};

const getListPokeDetails = async (
  limit: number,
  offset: number,
): Promise<PokeDetail[]> => {
  const pokemons = await getPokemons(limit, offset);

  const promises = pokemons.results.map(
    async (item: PokeDetailApi): Promise<PokeDetail> =>
      await getPokeDetails(item.url),
  );

  const listPokeDetail = await Promise.all(promises);

  return listPokeDetail;
};

export { getListPokeDetails, getPokeDetails, getPokemons };
