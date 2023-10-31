import React, { useState } from "react";

import type { DropdownProps } from "./interfaces";

import "./styles.scss";

const Dropdown = ({ children }: DropdownProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = (): void => {
    const isShowDropdown = !isShow;
    setIsShow(isShowDropdown);
  };

  return (
    <div className="dropdown" onClick={handleShow}>
      Setting
      <i className="fa fa-caret-down"></i>
      <div
        className={`dropdown-content dropdown-content--${
          isShow ? "show" : "hide"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
