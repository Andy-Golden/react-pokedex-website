import React from "react";

import type { AppBarProps } from "./interfaces";

import "./styles.scss";

const AppBar = ({ children }: AppBarProps): JSX.Element => {
  return <div className="app-bar">{children}</div>;
};

export default AppBar;
