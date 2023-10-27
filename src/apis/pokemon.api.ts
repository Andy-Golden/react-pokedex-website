import type { PokeData, PokeDetail, PokeDetailApi } from "interfaces";
import { instance } from "server/axios/instance";

const getPokemons = async (num: number): Promise<PokeData> => {
  const pokemons = await instance.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${num}`,
  );

  return pokemons.data;
};

const getPokeDetails = async (url: string): Promise<PokeDetail> => {
  const pokemon = await instance.get(url);

  const poke: PokeDetail = {
    id: pokemon.data.id,
    name: pokemon.data.name,
    sprites: { frontDefault: pokemon.data.sprites.front_default },
    types: [...pokemon.data.types],
  };

  return poke;
};

const getListPokeDetails = async (num: number): Promise<PokeDetail[]> => {
  const pokemons = await getPokemons(num);

  const promises = pokemons.results.map(
    async (item: PokeDetailApi): Promise<PokeDetail> =>
      await getPokeDetails(item.url),
  );

  const listPokeDetail = await Promise.all(promises);

  return listPokeDetail;
};

export { getListPokeDetails, getPokemons };
