import React from "react";

import type { SelectMenuProps } from "./interfaces";
import { MenuItem } from "./MenuItem";
import Image from "./pokeball_white.png";
import { Select } from "./Select";

import "./styles.scss";

const SelectMenu = ({
  className,
  textColor,
  options,
  background,
  onChange,
}: SelectMenuProps): JSX.Element => {
  return (
    <div
      className={`select-menu ${className}`}
      style={{ background, color: textColor }}
    >
      <img src={Image} alt="poke ball"></img>
      <Select onChange={onChange}>
        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectMenu;
