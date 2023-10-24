import "./styles.scss";
import React, { useEffect, useState } from "react";
import { getListPokeDetails } from "apis/pokemon.api";
import { NUMBERS_OF_POKE } from "./constants";
import PokeCard from "components/PokeCard";
import type { PokeDetail } from "interfaces/PokeDetail.interface";
import Button from "components/Button";

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
          <Button className="btn-shuffle" content={"Surprise Me!"} />
          <Button className="btn-select" content={"Surprise Me!"} />
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
      <div className="action-under-wrapper">
        <div className="action-under-content">
          <Button className="btn-load" content={"Load more"} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
