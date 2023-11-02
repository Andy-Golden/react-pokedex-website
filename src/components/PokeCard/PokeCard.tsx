import React from "react";

import { generatePokeId } from "@utils";

import { type PokeCardProps } from "./interfaces/pokeCardProps.interface";

import "./styles.scss";

const PokeCard = ({
  children,
  textColor,
  id,
  name,
  image,
  background,
}: PokeCardProps): JSX.Element => {
  return (
    <div className="card" style={{ background, color: textColor }}>
      <div className="poke-image">
        {" "}
        <img src={image} alt={name} />
      </div>
      <div className="poke-info">
        <p className="id">
          <span>#</span>
          {generatePokeId(id)}
        </p>
        <p className="name">{name}</p>
        {children}
      </div>
    </div>
  );
};

export default PokeCard;
