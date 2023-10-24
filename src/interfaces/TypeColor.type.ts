type TypeName =
  | "BUG"
  | "DRAGON"
  | "FAIRY"
  | "FIRE"
  | "GHOST"
  | "GROUND"
  | "NORMAL"
  | "PSYCHIC"
  | "STEEL"
  | "DARK"
  | "ELECTRIC"
  | "FIGHTING"
  | "FLYING"
  | "GRASS"
  | "ICE"
  | "POISON"
  | "ROCK"
  | "WATER";

type TypeColor = {
  [key in TypeName]: string;
};

export type { TypeColor };
