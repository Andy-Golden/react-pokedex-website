import "./styles.scss";
import React, { useEffect, useState } from "react";
import { getListPokeDetails } from "apis/pokemon.api";
import { NUMBERS_OF_POKE } from "./constants";
import PokeCard from "components/PokeCard";
import type { PokeDetail } from "interface/PokeDetail.interface";

function HomePage(): JSX.Element {
  const [pokemons, setPokemons] = useState<PokeDetail[]>([]);

  useEffect(() => {
    getListPokeDetails(NUMBERS_OF_POKE)
      .then((data) => {
        console.log("data: ", data);
        setPokemons(pokemons);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  // const types: PokeType[] = [
  //   {
  //     slot: 1,
  //     type: {
  //       name: "grass",
  //       url: "https://pokeapi.co/api/v2/type/12/",
  //     },
  //   },
  //   {
  //     slot: 2,
  //     type: {
  //       name: "poison",
  //       url: "https://pokeapi.co/api/v2/type/4/",
  //     },
  //   },
  // ];

  console.log("pokemons: ", pokemons);

  return (
    <div className="container">
      <div className="filtering"></div>
      <div className="action-wrapper">
        <div className="actions">
          <div>
            <button className="button btn-shuffle">Surprise Me!</button>
          </div>
          <div>
            <button className="button btn-select">Surprise Me!</button>
          </div>
        </div>
      </div>
      <div className="list-wrapper">
        <div className="list-poke">
          {pokemons?.length > 0 &&
            pokemons.map((poke, index) => (
              <div key={index}>
                <PokeCard
                  id={poke.id}
                  name={poke.name}
                  image={poke.sprites.frontDefault}
                  types={poke.types}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
