import React, { useState } from "react";
import "./styles.scss";
import { usePokemons, getRandomInt } from "./helper";
import { SORT_BY_CHOICES, VISIBLE_OF_POKE } from "./constants";
import { Button, PokeCard, SelectMenu } from "components";

function HomePage(): JSX.Element {
  const pokemons = usePokemons();

  const [visible, setVisible] = useState(VISIBLE_OF_POKE);
  const [start, setStart] = useState(0);
  const [indexFilterOption, setIndexFilterOption] = useState(0);

  const handleLoadMore = (): void => {
    const moreItems = visible + VISIBLE_OF_POKE;

    if (moreItems > pokemons.length) {
      return;
    }

    setVisible(moreItems);
  };

  const handleSurpriseMe = (): void => {
    const startIndex = getRandomInt(0, 100);

    setStart(startIndex);
    setVisible(startIndex + 25);
  };

  return (
    <div className="container">
      <div className="filtering"></div>
      <div className="action-above-wrapper">
        <div className="action-above-content">
          <div className="btn-shuffle-wrapper">
            <Button className="btn-shuffle" onClick={handleSurpriseMe}>
              <i className="fas fa-sync-alt icon"></i>
              <span>&nbsp; &nbsp;Surprise Me!</span>
            </Button>
          </div>
          <div className="select-input-wrapper ">
            <span className="label-select">Sort by</span>
            <SelectMenu
              className={"select-input-filter"}
              choices={SORT_BY_CHOICES}
              indexFilterOption={indexFilterOption}
              setIndexFilterOption={setIndexFilterOption}
            />
          </div>
        </div>
      </div>
      <div className="list-wrapper">
        <div className="list-poke">
          {pokemons?.length > 0 &&
            pokemons.slice(start, visible).map((poke, index) => (
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
          <Button className="btn-load" onClick={handleLoadMore}>
            Load more Pokemon
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
