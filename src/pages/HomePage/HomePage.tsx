import React from "react";
import { Link } from "react-router-dom";
import { TYPE_COLOR, TYPE_TEXT_COLOR } from "@constants";

import { Button, Loading, PokeCard, PokeType, SelectMenu } from "@components";

import { SORT_BY_CHOICES } from "./constants";
import { useHomePagePrepareHook } from "./helper";

import "./styles.scss";

const HomePage = (): JSX.Element => {
  const { t, pokemons, isLoading, onLoadMore, onSurpriseMe, onSortByChange } =
    useHomePagePrepareHook();

  return (
    <div className="container">
      <div className="advanced-search-wrapper">
        <div className="advanced-search">
          <div className="left">
            <div className="first">
              <h2>Types & Weakness</h2>
              <div className="help">
                <span>
                  <strong>T</strong> = Type
                </span>
                <span>
                  <strong>W</strong> = Weakness
                </span>
              </div>
            </div>
            <div className="second">
              <ul>
                {Object.entries(TYPE_COLOR).map(([key, value]) => (
                  <li key={key}>
                    <span>
                      <PokeType
                        background={value}
                        textColor={
                          TYPE_TEXT_COLOR[key as keyof typeof TYPE_TEXT_COLOR]
                        }
                      >
                        Grass
                      </PokeType>
                    </span>
                    <span className="type">T</span>
                    <span className="weakness">W</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <div className="advanced-toggle-wrapper">
        <div className="advanced-toggle">
          <div className="advanced-toggle-content ">
            <span>Hide advanced search</span>
            <span className="advanced-toggle-btn">
              <i className="fas fa-chevron-up"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="action-above-wrapper">
        <div className="action-above-content">
          <div className="btn-shuffle-wrapper">
            <Button
              type="button"
              className="btn-shuffle"
              onClick={onSurpriseMe}
            >
              <i className="fas fa-sync-alt icon"></i>
              <span>&nbsp; &nbsp;{t("homePage.surpriseMe")}</span>
            </Button>
          </div>
          <div className="select-input-wrapper">
            <span className="label-select">{t("homePage.sortBy.label")}</span>
            <SelectMenu
              className={"select-input-filter"}
              options={Object.values(SORT_BY_CHOICES)}
              onChange={onSortByChange}
            />
          </div>
        </div>
      </div>
      <div className="list-wrapper">
        <div className="list-poke">
          {isLoading && <Loading />}
          {pokemons.length > 0 &&
            pokemons.map((poke) => (
              <Link key={poke.id} to={`/poke/${poke.id}`}>
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
                          TYPE_COLOR[
                            item.type.name.toUpperCase() as keyof typeof TYPE_COLOR
                          ]
                        }
                        textColor={
                          TYPE_TEXT_COLOR[
                            item.type.name.toUpperCase() as keyof typeof TYPE_TEXT_COLOR
                          ]
                        }
                      >
                        {t(`homePage.pokeType.${item.type.name}`)}
                      </PokeType>
                    ))}
                  </div>
                </PokeCard>
              </Link>
            ))}
        </div>
      </div>
      <div className="action-under-wrapper">
        <div className="action-under-content">
          <Button type="button" className="btn-load" onClick={onLoadMore}>
            {t("homePage.loadMore")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
