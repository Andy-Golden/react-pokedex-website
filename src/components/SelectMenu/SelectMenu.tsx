import React from "react";
import { useTranslation } from "react-i18next";

import type { SelectMenuProps } from "./interfaces";
import { MenuItem } from "./MenuItem";
import Image from "./pokeball_white.png";
import { Select } from "./Select";

import "./styles.scss";

const SelectMenu = ({
  className,
  textColor,
  defaultValue,
  options,
  background,
  onChange,
}: SelectMenuProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div
      className={`select-menu ${className}`}
      style={{ background, color: textColor }}
    >
      <img src={Image} alt="poke ball"></img>
      <Select onChange={onChange} value={defaultValue}>
        {options.map((item) => (
          <MenuItem key={item.key} value={item.key}>
            {t(`${item.label}`)}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectMenu;
