import React, { useState } from "react";

import { type SelectMenuProps } from "./interface/selectMenuProps.interface";
import downArrow from "./down-arrow.png";
import pokeImage from "./pokeball_white.png";

import "./styles.scss";

const SelectMenu = ({
  className,
  choices,
  indexFilterOption,
  setIndexFilterOption,
}: SelectMenuProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  const handleShowDropdown = (): void => {
    const notIsShow = !isShow;
    setIsShow(notIsShow);
  };

  const handleSelect = (index: number) => (): void => {
    setIsShow(false);
    setIndexFilterOption(index);
  };

  return (
    <div className={`${className} select-input`}>
      <img src={pokeImage} alt="pokeball" />
      <span>{choices[indexFilterOption]}</span>
      <button className="btn-show-dropdown" onClick={handleShowDropdown}>
        <img
          src={downArrow}
          alt="down arrow"
          className={`${isShow ? "rotate-img" : ""}`}
        />
      </button>
      <ul className={`selection ${isShow ? "selection-show" : ""}`}>
        {choices.map((item, index) => (
          <li key={index + 1} className="option" onClick={handleSelect(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectMenu;
