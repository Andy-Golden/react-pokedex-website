import React from "react";

import { type SelectBoxProps } from "./interfaces";
import { MenuItem } from "./MenuItem";
import Image from "./pokeball_white.png";
import { Select } from "./Select";

import "./styles.scss";

const SelectBox = ({
  className,
  textColor,
  options,
  background,
  onChange,
}: SelectBoxProps): JSX.Element => {
  return (
    <div
      className={`select-box ${className}`}
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
};

export default SelectBox;
