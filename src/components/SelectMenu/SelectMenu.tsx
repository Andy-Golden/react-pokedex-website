import React, { useState } from "react";
import "./styles.scss";
import { type SelectMenuProps } from "interfaces/SelectMenuProps.interface";
import pokeImage from "./pokeball_white.png";
import downArrow from "./down-arrow.png";

function SelectMenu({
  className,
  choices,
  indexFilterOption,
  setIndexFilterOption,
}: SelectMenuProps): JSX.Element {
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
      <div className={`selection ${isShow ? "selection-show" : ""}`}>
        {choices.map((item, index) => (
          <option
            key={index + 1}
            className="option"
            onClick={handleSelect(index)}
          >
            {item}
          </option>
        ))}
      </div>
      {/* <select
        className="selection-hidden"
        value={choices[indexFilterOption]}
        onChange={handleChange}
      >
        {choices.map((item, index) => (
          <option
            selected={index === indexFilterOption}
            key={index + 1}
            value={item}
          >
            {item}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default SelectMenu;
