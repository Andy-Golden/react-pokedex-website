/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Loading, PokeCard, PokeType, SelectBox } from "components";

import {
  SORT_BY_CHOICES,
  typeColor,
  typeTextColor,
  VISIBLE_OF_POKE,
} from "./constants";
import { getRandomInt, usePokemons } from "./helper";

import "./styles.scss";

function HomePage(): JSX.Element {
  const [pokemons, setPokemons] = usePokemons();
  const [visible, setVisible] = useState(VISIBLE_OF_POKE);
  const [start, setStart] = useState(0);

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

  const handleFilter = (index: number): void => {
    const clonedPokemons = [...pokemons];

    switch (index) {
      case 0: {
        const lowestPokemons = clonedPokemons.sort((poke1, poke2) => {
          if (poke1.id < poke2.id) {
            return -1;
          }

          if (poke1.id > poke2.id) {
            return 1;
          }

          return 0;
        });
        setPokemons(lowestPokemons);
        break;
      }
      case 1: {
        const highestPokemons = clonedPokemons.sort((poke1, poke2) => {
          if (poke1.id < poke2.id) {
            return 1;
          }

          if (poke1.id > poke2.id) {
            return -1;
          }

          return 0;
        });
        setPokemons(highestPokemons);
        break;
      }
      case 2: {
        const aToZPokemons = clonedPokemons.sort((poke1, poke2) => {
          if (poke1.name < poke2.name) {
            return -1;
          }

          if (poke1.name > poke2.name) {
            return 1;
          }

          return 0;
        });
        setPokemons(aToZPokemons);
        break;
      }
      case 3: {
        const aToZPokemons = clonedPokemons.sort((poke1, poke2) => {
          if (poke1.name < poke2.name) {
            return 1;
          }

          if (poke1.name > poke2.name) {
            return -1;
          }

          return 0;
        });
        setPokemons(aToZPokemons);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSortByChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    handleFilter(+e.target.value);
  };

  return (
    <div className="container">
      <Button className="login-btn">
        <Link to="/login">Login</Link>
      </Button>
      <div className="filtering"></div>
      <div className="action-above-wrapper">
        <div className="action-above-content">
          <div className="btn-shuffle-wrapper">
            <Button className="btn-shuffle" onClick={handleSurpriseMe}>
              <i className="fas fa-sync-alt icon"></i>
              <span>&nbsp; &nbsp;Surprise Me!</span>
            </Button>
          </div>
          <div className="select-input-wrapper">
            <span className="label-select">Sort by</span>
            <SelectBox
              className={"select-input-filter1"}
              options={SORT_BY_CHOICES}
              onChange={handleSortByChange}
            />
          </div>
        </div>
      </div>
      <div className="list-wrapper">
        <div className="list-poke">
          {pokemons?.length > 0 ? (
            pokemons.slice(start, visible).map((poke) => (
              <>
                <PokeCard
                  key={poke.id}
                  id={poke.id}
                  name={poke.name}
                  image={poke.sprites.frontDefault}
                >
                  {" "}
                  <div className="poke-types">
                    {poke.types.map((item) => (
                      <PokeType
                        className={"poke-type"}
                        key={item.slot}
                        background={
                          typeColor[
                            item.type.name.toUpperCase() as keyof typeof typeColor
                          ]
                        }
                        textColor={
                          typeTextColor[
                            item.type.name.toUpperCase() as keyof typeof typeTextColor
                          ]
                        }
                      >
                        {item.type.name}
                      </PokeType>
                    ))}
                  </div>
                </PokeCard>
              </>
            ))
          ) : (
            <Loading></Loading>
          )}
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
