import React from "react";

import type { PokeTypeProps } from "./interface/pokeTypeProps.interface";

import "./styles.scss";

const PokeType = ({
  children,
  className,
  background,
  textColor,
}: PokeTypeProps): JSX.Element => {
  return (
    <div
      className={`poke-type ${className}`}
      style={{ background, color: textColor }}
    >
      {children}
    </div>
  );
};

export default PokeType;
