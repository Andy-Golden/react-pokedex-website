import React from "react";
import { Outlet } from "react-router-dom";

import { ToggleButton } from "@components";

import { useThemeLanguageLayoutPrepareHook } from "./helper";

import "./styles.scss";

const ThemeLanguageLayout = (): JSX.Element => {
  const { onChangeTheme } = useThemeLanguageLayoutPrepareHook();
  return (
    <div className="toggle-button-layout-container">
      <ToggleButton className={"toggle"} onChange={onChangeTheme} />
      <Outlet />
    </div>
  );
};

export default ThemeLanguageLayout;
