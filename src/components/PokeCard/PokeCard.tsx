import React from "react";

import { type PokeCardProps } from "./interface/pokeCardProps.interface";
import { generateStringPokeId } from "./utils";

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
          {generateStringPokeId(id)}
        </p>
        <p className="name">{name}</p>
        {children}
      </div>
    </div>
  );
};

export default PokeCard;
