import React from "react";
import "./styles.scss";
import Select from "./Select/Select";
import MenuItem from "./MenuItem/MenuItem";
import Image from "./pokeball_white.png";

interface SelectMenu1Props {
  className?: string;
  options?: string[];
  background?: string;
  textColor?: string;
}

function SelectMenu1({
  className,
  options,
  background,
  textColor,
}: SelectMenu1Props): JSX.Element {
  return (
    <div
      className={`select-menu1 ${className}`}
      style={{ background, color: textColor }}
    >
      <img src={Image} alt="poke ball"></img>
      <Select>
        <MenuItem value={0}>Option 1</MenuItem>
        <MenuItem value={1}>Option 2</MenuItem>
        <MenuItem value={2}>Option 3</MenuItem>
        <MenuItem value={3}>Option 4</MenuItem>
      </Select>
    </div>
  );
}

export default SelectMenu1;
