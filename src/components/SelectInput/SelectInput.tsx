import React, { useState } from "react";
import "./styles.scss";
import type { PropsSelectInput } from "interfaces/PropsSelecInput.interface";
import pokeImage from "./pokeball_white.png";
import downArrow from "./down-arrow.png";

const choices = [
  "Lowest number (First)",
  "Highest number (First)",
  "A-Z",
  "Z-A",
];

function SelectInput({ className }: PropsSelectInput): JSX.Element {
  const [isShow, setIsShow] = useState(false);
  const [filterOptionIndex, setFilterOptionIndex] = useState(0);

  const handleShowDropdown = (): void => {
    const notIsShow = !isShow;
    setIsShow(notIsShow);
  };

  const handleSelect = (index: number) => (): void => {
    setIsShow(false);
    setFilterOptionIndex(index);
  };

  return (
    <div className={`${className} select-input`}>
      <img src={pokeImage} alt="pokeball" />
      <span>{choices[filterOptionIndex]}</span>
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
    </div>
  );
}

SelectInput.defaultProps = {
  className: "",
};

export default SelectInput;
