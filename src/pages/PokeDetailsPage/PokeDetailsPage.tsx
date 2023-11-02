import React from "react";
import { useTranslation } from "react-i18next";
import { typeColor, typeTextColor } from "pages/constants";
import {
  covertDecimetersToFeet,
  covertHectogramsToPounds,
  generateStringPokeId,
} from "utils";

import { PokeType } from "@components";

import { usePokeDetailPagePrepareHook } from "./helper";

import "./styles.scss";

const PokeDetailPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { pokeDetails } = usePokeDetailPagePrepareHook();

  return (
    <div className="container">
      <section className="header">
        <div className="backward">
          <span className="arrow">
            <i className="fas fa-angle-left"></i>
          </span>
          <span className="poke-id">#1010</span>
          <span className="poke-name">Iron Leaves</span>
        </div>
        <div className="forward">
          <span className="poke-name">Ivysaur</span>
          <span className="poke-id">#0002</span>
          <span className="arrow">
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </section>
      <section className="poke-details-wrapper">
        <div className="title">
          {" "}
          <span className="name">{pokeDetails.name}</span>
          <span className="id">#{generateStringPokeId(pokeDetails.id)}</span>
        </div>
        <div className="details">
          <div className="left">
            <img
              className="image"
              src={pokeDetails.sprites.frontDefault}
              alt={pokeDetails.name}
            />
            <div className="stats">
              <h3>Stats</h3>
              <ul className="gauges">
                <li className="gauge">
                  <ul className="meters">
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                  </ul>
                  <span>HP</span>
                </li>
                <li className="gauge">
                  <ul className="meters">
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                  </ul>
                  <span>Attack</span>
                </li>
                <li className="gauge">
                  <ul className="meters">
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                  </ul>
                  <span>Defense</span>
                </li>
                <li className="gauge">
                  <ul className="meters">
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                  </ul>
                  <span>Special Attack</span>
                </li>
                <li className="gauge">
                  <ul className="meters">
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                  </ul>
                  <span>Special Defense</span>
                </li>
                <li className="gauge">
                  <ul className="meters">
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                    <li className="meter"></li>
                  </ul>
                  <span>Speed</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <p className="description">
              There is a plant seed on its back right from the day this Pokémon
              is born. The seed slowly grows larger.
            </p>
            <div className="version">
              <span>Version: </span>
              <span>X</span>
              <span>Y</span>
            </div>
            <div className="info">
              <ul className="appearance">
                <li>
                  <p>Height</p>
                  <p>{covertDecimetersToFeet(pokeDetails.height)}</p>
                </li>
                <li>
                  <p>Weight</p>
                  <p>{covertHectogramsToPounds(pokeDetails.weight)} lbs</p>
                </li>
                <li>
                  <p>Gender</p>
                  <p>
                    <i className="fas fa-mars"></i>
                    <i className="fas fa-venus"></i>
                  </p>
                </li>
              </ul>
              <ul className="strength">
                <li>
                  <p>Category</p>
                  <p>Seed</p>
                </li>
                <li>
                  <p>Abilities</p>
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
            <p>Types</p>
            <div className="types">
              {pokeDetails.types.map((item) => (
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
            <p>Weaknesses</p>
            <div className="weaknesses">
              <PokeType>Grass</PokeType>
              <PokeType>Grass</PokeType>
              <PokeType>Poison</PokeType>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PokeDetailPage;
