import React from "react";
import "./styles.scss";
import type { PropsPokeCard } from "interfaces/PropsPokeCard.interface";
import PokeType from "components/PokeType/PokeType";

function PokeCard({ id, name, image, types }: PropsPokeCard): JSX.Element {
  return (
    <div className="card">
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
        <div className="poke-types">
          {types.map((item) => (
            <PokeType key={item.slot} name={item.type.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
