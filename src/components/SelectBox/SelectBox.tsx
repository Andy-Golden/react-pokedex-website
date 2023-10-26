import React from "react";
import "./styles.scss";
import Select from "./Select/Select";
import MenuItem from "./MenuItem/MenuItem";
import Image from "./pokeball_white.png";
import { type SelectBoxProps } from "interfaces/SelectBoxProps.interface";

function SelectBox({
  className,
  options,
  background,
  textColor,
  onChange,
}: SelectBoxProps): JSX.Element {
  return (
    <div
      className={`select-menu1 ${className}`}
      style={{ background, color: textColor }}
    >
      <img src={Image} alt="poke ball"></img>
      <Select onChange={onChange}>
        {options?.map((item, index) => (
          <MenuItem key={item} value={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectBox;
