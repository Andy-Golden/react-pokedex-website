import React from "react";
import type { PropsPokeType } from "interfaces/PropsPokeType";

function PokeType({ name }: PropsPokeType): JSX.Element {
  return <div className={`poke-type ${name}`}>{name}</div>;
}

export default PokeType;
