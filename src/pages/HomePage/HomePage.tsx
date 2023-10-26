import React from "react";
import { Link } from "react-router-dom";

import { Button, Loading, PokeCard, PokeType, SelectBox } from "components";

import { SORT_BY_CHOICES, typeColor, typeTextColor } from "./constants";
import { usePrepareHook } from "./helper";

import "./styles.scss";

const HomePage = (): JSX.Element => {
  const {
    pokemons,
    start,
    visible,
    onClickLoadMore,
    onClickSurpriseMe,
    onChangeSortBy,
  } = usePrepareHook();

  return (
    <div className="container">
      <Button className="login-btn">
        <Link to="/login">Login</Link>
      </Button>
      <div className="filtering"></div>
      <div className="action-above-wrapper">
        <div className="action-above-content">
          <div className="btn-shuffle-wrapper">
            <Button className="btn-shuffle" onClick={onClickSurpriseMe}>
              <i className="fas fa-sync-alt icon"></i>
              <span>&nbsp; &nbsp;Surprise Me!</span>
            </Button>
          </div>
          <div className="select-input-wrapper">
            <span className="label-select">Sort by</span>
            <SelectBox
              className={"select-input-filter"}
              options={SORT_BY_CHOICES}
              onChange={onChangeSortBy}
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
          <Button className="btn-load" onClick={onClickLoadMore}>
            Load more Pokemon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
