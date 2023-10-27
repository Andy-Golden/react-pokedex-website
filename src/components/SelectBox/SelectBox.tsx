import React from "react";
import { useTranslation } from "react-i18next";

import { type SelectBoxProps } from "./interfaces";
import { MenuItem } from "./MenuItem";
import Image from "./pokeball_white.png";
import { Select } from "./Select";

import "./styles.scss";

const SelectBox = ({
  className,
  textColor,
  defaultValue,
  options,
  background,
  onChange,
}: SelectBoxProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div
      className={`select-box ${className}`}
      style={{ background, color: textColor }}
    >
      <img src={Image} alt="poke ball"></img>
      <Select onChange={onChange} value={defaultValue}>
        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {t(`${item}`)}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectBox;
