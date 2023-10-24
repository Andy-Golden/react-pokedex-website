import React from "react";
import "./styles.scss";
import PokeCard from "components/PokeCard";
import Button from "components/Button";
import { usePokemons } from "./helper";

function HomePage(): JSX.Element {
  const pokemons = usePokemons();

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
