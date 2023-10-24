import "./styles.scss";
import React, { useEffect, useState } from "react";
import { getListPokeDetails } from "apis/pokemon.api";
import { NUMBERS_OF_POKE } from "./constants";
import PokeCard from "components/PokeCard";
import type { PokeDetail } from "interfaces/PokeDetail.interface";

function HomePage(): JSX.Element {
  const [pokemons, setPokemons] = useState<PokeDetail[]>([]);

  useEffect(() => {
    getListPokeDetails(NUMBERS_OF_POKE)
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <div className="container">
      <div className="filtering"></div>
      <div className="action-above-wrapper">
        <div className="action-above-content">
          <div>
            <button className="button btn-shuffle">Surprise Me!</button>
          </div>
          <div>
            <button className="button btn-select">Surprise Me!</button>
          </div>
        </div>
      </div>
      <div className="list-wrapper">
        {/* <div className="list-content">
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
        </div> */}
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
      <div className="action-under-wrapper">
        <div className="action-under-content">
          <button className="button btn-load">Load more</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
