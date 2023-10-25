import "./styles.scss";
import React from "react";
import type { PokeTypeProps } from "interfaces/PokeTypeProps.interface";

function PokeType({
  content,
  className,
  background,
  textColor,
}: PokeTypeProps): JSX.Element {
  return (
    <div
      className={`poke-type ${className}`}
      style={{ background, color: textColor }}
    >
      {content}
    </div>
  );
}

export default PokeType;
