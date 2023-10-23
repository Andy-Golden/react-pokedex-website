import { instance } from "utils/axios/instance";
import type { PokeDetailApi } from "interface/PokeDetailApi.interface";
import type { PokeDetail } from "interface/PokeDetail.interface";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getPokemons = async (num: number) => {
  try {
    const pokemons = await instance.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${num}`,
    );

    return pokemons;
  } catch (err) {
    console.log("🚀 ~ file: pokemon.api.ts:9 ~ getPokemons ~ err:", err);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getPokeDetails = async (url: string) => {
  try {
    const data = await instance.get(url);
    return data;
  } catch (err) {
    console.log("🚀 ~ file: pokemon.api.ts:24 ~ getPokeDetails ~ err:", err);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getListPokeDetails = async (num: number) => {
  try {
    const pokemons = await getPokemons(num);

    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const promises = pokemons?.data.results.map((item: PokeDetailApi) =>
      getPokeDetails(item.url),
    );

    const responses = await Promise.all(promises);
    const data = responses.map((item) => item.data);

    const listPokeDetail = data.map((item) => {
      const poke: PokeDetail = {
        name: item.name,
        id: item.id,
        sprites: { frontDefault: item.sprites.front_default },
        types: [...item.types],
      };
      return poke;
    });

    return listPokeDetail;
  } catch (err) {
    console.log(
      "🚀 ~ file: pokemon.api.ts:53 ~ getListPokeDetails ~ err:",
      err,
    );
  }
};

export { getPokemons, getListPokeDetails };
