import React from "react";
import "./styles.scss";
import { type PokeCardProps } from "./interface/PokeCardProps.interface";
import { generateStringPokeId } from "./utils";

function PokeCard({
  children,
  textColor,
  id,
  name,
  image,
  background,
}: PokeCardProps): JSX.Element {
  return (
    <div className="card" style={{ background, color: textColor }}>
      <div className="poke-image">
        {" "}
        <img src={image} alt={name} />
      </div>
      <div className="poke-info">
        <p className="poke-id">
          <span>#</span>
          {generateStringPokeId(id)}
        </p>
        <p className="poke-name">{name}</p>
        {children}
      </div>
    </div>
  );
}

export default PokeCard;
