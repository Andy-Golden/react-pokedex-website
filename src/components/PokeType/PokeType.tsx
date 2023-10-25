import "./styles.scss";
import React from "react";
import type { PokeTypeProps } from "interfaces/PokeTypeProps.interface";
import { typeColor } from "./constants";

function PokeType({ name }: PokeTypeProps): JSX.Element {
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
