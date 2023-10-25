import "./styles.scss";
import React from "react";
import type { PokeTypeProps } from "interfaces/PokeTypeProps.interface";

function PokeType({
  content,
  className,
  background,
  textColor,
  width,
  height,
}: PokeTypeProps): JSX.Element {
  return (
    <div
      className={`poke-type ${className}`}
      style={{ backgroundColor: background, color: textColor, width, height }}
    >
      {content}
    </div>
  );
}

export default PokeType;
