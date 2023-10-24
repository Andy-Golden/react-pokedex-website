import "./styles.scss";
import React from "react";
import type { PropsPokeType } from "interfaces/PropsPokeType.interface";
import { typeColor } from "./constants";

function PokeType({ name }: PropsPokeType): JSX.Element {
  return (
    <div
      className="poke-type"
      style={{
        background: `${
          typeColor[`${name.toUpperCase() as keyof typeof typeColor}`]
        }`,
      }}
    >
      {name}
    </div>
  );
}

export default PokeType;
