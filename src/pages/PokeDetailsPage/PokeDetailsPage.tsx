import React from "react";
import { Link } from "react-router-dom";
import {
  covertDecimetersToFeet,
  covertHectogramsToPounds,
  generatePokeId,
} from "utils";

import { Loading } from "@components";

import pokeBlue from "../../assets/images/poke-blue.png";
import pokeRed from "../../assets/images/poke-red.png";

import { usePokeDetailPagePrepareHook } from "./helper";

import "./styles.scss";

const PokeDetailPage = (): JSX.Element => {
  const {
    t,
    isLoading,
    pokeDetails,
    pokeActivation,
    prevPokeDetails,
    nextPokeDetails,
    renderTypes,
    onActivatePoke,
  } = usePokeDetailPagePrepareHook();

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <section className="header">
        <div className="backward">
          <span className="arrow">
            <Link to={`/poke/${prevPokeDetails.id}`}>
              <i className="fas fa-angle-left"></i>
            </Link>
          </span>
          <span className="poke-id">#{generatePokeId(prevPokeDetails.id)}</span>
          <span className="poke-name">{prevPokeDetails.name}</span>
        </div>
        <div className="forward">
          <span className="poke-name">{nextPokeDetails.name}</span>
          <span className="poke-id">#{generatePokeId(nextPokeDetails.id)}</span>
          <span className="arrow">
            <Link to={`/poke/${nextPokeDetails.id}`}>
              <i className="fas fa-angle-right"></i>
            </Link>
          </span>
        </div>
      </section>
      <section className="poke-details-wrapper">
        <div className="title">
          {" "}
          <span className="name">{pokeDetails.name}</span>
          <span className="id">#{generatePokeId(pokeDetails.id)}</span>
        </div>
        <div className="details">
          <div className="left">
            <img
              className="image"
              src={pokeDetails.sprites.frontDefault}
              alt={pokeDetails.name}
            />
            <div className="stats">
              <h3>{t("detailPage.stats")}</h3>
              <ul className="gauges">
                {pokeDetails.stats.map((item) => (
                  <li key={item.stat.name} className="gauge">
                    <ul className="meters">
                      {item.bars.map((bar) => (
                        <li
                          key={bar.slot}
                          className={`meter ${
                            bar.isFilled ? "filled-meter" : ""
                          }`}
                        ></li>
                      ))}
                    </ul>
                    <span>{item.stat.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right">
            {pokeActivation === "blue" && (
              <p className="description">
                There is a plant seed on its back right from the day this
                Pokémon is born. The seed slowly grows larger.
              </p>
            )}
            {pokeActivation === "red" && (
              <p className="description">
                While it is young, it uses the nutrients that are stored in the
                seed on its back in order to grow.
              </p>
            )}
            <div className="version">
              <span>Version: </span>
              <button
                id="poke-blue"
                className={`poke-blue ${
                  pokeActivation === "blue" ? "active" : ""
                }`}
                onClick={onActivatePoke("blue")}
              >
                <img id="poke-red" src={pokeBlue} alt="poke blue" />
              </button>
              <button
                className={`poke-red ${
                  pokeActivation === "red" ? "active" : ""
                }`}
                onClick={onActivatePoke("red")}
              >
                <img id="poke-red" src={pokeRed} alt="poke red" />
              </button>
            </div>
            <div className="info">
              <ul className="appearance">
                <li>
                  <p>{t("detailPage.height")}</p>
                  <p>{covertDecimetersToFeet(pokeDetails.height)}</p>
                </li>
                <li>
                  <p>{t("detailPage.weight")}</p>
                  <p>{covertHectogramsToPounds(pokeDetails.weight)} lbs</p>
                </li>
                <li>
                  <p>{t("detailPage.gender")}</p>
                  <p>
                    <i className="fas fa-mars"></i>
                    <i className="fas fa-venus"></i>
                  </p>
                </li>
              </ul>
              <ul className="strength">
                <li>
                  <p>{t("detailPage.category")}</p>
                  <p>seed</p>
                </li>
                <li>
                  <p>{t("detailPage.abilities")}</p>
                  {pokeDetails.abilities.map((item) => (
                    <p
                      key={item.slot}
                      className={`${item.isHidden ? "ability--hidden" : ""}`}
                    >
                      {item.ability.name}
                    </p>
                  ))}
                </li>
              </ul>
            </div>
            <p>{t("detailPage.types")}</p>
            <div className="types">{renderTypes(pokeDetails.types)}</div>
            <p>{t("detailPage.weaknesses")}</p>
            <div className="weaknesses">
              {renderTypes(pokeDetails.weaknesses.doubleDamageFrom)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PokeDetailPage;
