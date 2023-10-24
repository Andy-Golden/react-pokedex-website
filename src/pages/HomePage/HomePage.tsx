import React, { useState } from "react";
import "./styles.scss";
import PokeCard from "components/PokeCard";
import Button from "components/Button";
import { usePokemons } from "./helper";
import { VISIBLE_OF_POKE } from "./constants";

function HomePage(): JSX.Element {
  const pokemons = usePokemons();

  const [visible, setVisible] = useState(VISIBLE_OF_POKE);

  const handleLoadMore = (): void => {
    const moreItems = visible + VISIBLE_OF_POKE;
    setVisible(moreItems);
  };

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
            pokemons.slice(0, visible).map((poke, index) => (
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
          <Button
            className="btn-load"
            content={"Load more"}
            onClick={handleLoadMore}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
