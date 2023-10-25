import type { TypeColor } from "interfaces/TypeColor.type";

const NUMBERS_OF_POKE = 200;
const VISIBLE_OF_POKE = 25;

const SORT_BY_CHOICES = [
  "Lowest number (First)",
  "Highest number (First)",
  "A-Z",
  "Z-A",
];

const typeColor: TypeColor = {
  BUG: "#729f3f",
  DRAGON: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
  FAIRY: "#fdb9e9",
  FIRE: "#fd7d24",
  GHOST: "#7b62a3",
  GROUND: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
  NORMAL: "#a4acaf",
  PSYCHIC: "#f366b9",
  STEEL: "#9eb7b8",
  DARK: "#707070",
  ELECTRIC: "#eed535",
  FIGHTING: "#d56723",
  FLYING: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
  GRASS: "#9bcc50",
  ICE: "#51c4e7",
  POISON: "#b97fc9",
  ROCK: "#a38c21",
  WATER: "#4592c4",
};

const typeTextColor: TypeColor = {
  BUG: "#ffff",
  DRAGON: "#ffff",
  FAIRY: "#0a0202",
  FIRE: "#ffff",
  GHOST: "#ffff",
  GROUND: "#0a0202",
  NORMAL: "#0a0202",
  PSYCHIC: "#ffff",
  STEEL: "#0a0202",
  DARK: "#ffff",
  ELECTRIC: "#0a0202",
  FIGHTING: "#ffff",
  FLYING: "#0a0202",
  GRASS: "#0a0202",
  ICE: "#0a0202",
  POISON: "#ffff",
  ROCK: "#ffff",
  WATER: "#ffff",
};

export {
  NUMBERS_OF_POKE,
  VISIBLE_OF_POKE,
  SORT_BY_CHOICES,
  typeTextColor,
  typeColor,
};
