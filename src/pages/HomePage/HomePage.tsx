import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Button, Loading, PokeCard, PokeType, SelectMenu } from "@components";

import { SORT_BY_CHOICES, typeColor, typeTextColor } from "./constants";
import { useHomePagePrepareHook } from "./helper";

import "./styles.scss";

const HomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const { start, visible, pokemons, onLoadMore, onSurpriseMe, onSortByChange } =
    useHomePagePrepareHook();

  return (
    <div className="container">
      <Button className="login-btn">
        <Link to="/login">{t("homePage.login")}</Link>
      </Button>
      <div className="filtering"></div>
      <div className="action-above-wrapper">
        <div className="action-above-content">
          <div className="btn-shuffle-wrapper">
            <Button className="btn-shuffle" onClick={onSurpriseMe}>
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
          {pokemons.length > 0 ? (
            pokemons.slice(start, visible).map((poke) => (
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
                      {t(`homePage.pokeType.${item.type.name}`)}
                    </PokeType>
                  ))}
                </div>
              </PokeCard>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="action-under-wrapper">
        <div className="action-under-content">
          <Button className="btn-load" onClick={onLoadMore}>
            {t("homePage.loadMore")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
