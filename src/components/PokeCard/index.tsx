import React from "react";
import "./styles.scss";
import type { PokeType } from "interface/PokeDetail.interface";

interface PropsPokeCard {
  id: number;
  name: string;
  image: string;
  types: PokeType[];
}

function PokeCard({ id, name, image, types }: PropsPokeCard): JSX.Element {
  return (
    <div className="card">
      <img className="poke-image" src={image} alt={name} />
      <p>{`#000${id}`}</p>
      <h3>{name}</h3>
    </div>
  );
}

export default PokeCard;
