import React from "react";
import "./styles.scss";
import { type PokeCardProps } from "interfaces/PokeCardProps.interface";

function PokeCard({
  id,
  name,
  image,
  children,
  background,
  textColor,
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
          {`${"0".repeat(4 - id.toString().length)}${id}`}
        </p>
        <p className="poke-name">{name}</p>
        {children}
      </div>
    </div>
  );
}

export default PokeCard;
