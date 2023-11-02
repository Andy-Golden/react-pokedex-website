import React from "react";
import { Outlet } from "react-router-dom";

import { SelectMenu, ToggleButton } from "@components";
import { ThemeEnum } from "@enums";

import { languageOptions } from "./constants";
import { useThemeLanguageLayoutPrepareHook } from "./helper";

import "./styles.scss";

function ThemeLanguageLayout(): JSX.Element {
  const { theme, lang, onSwitchTheme, onSwitchLang } =
    useThemeLanguageLayoutPrepareHook();

  return (
    <div className="theme-language-layout-container ">
      <div className="action-layout">
        <ToggleButton
          className="toggle"
          onChange={onSwitchTheme}
          checked={theme === ThemeEnum.light}
        />
        <SelectMenu
          defaultValue={lang}
          className="language-select-box"
          options={Object.values(languageOptions)}
          onChange={onSwitchLang}
        />
      </div>
      <Outlet />
    </div>
  );
}

export default ThemeLanguageLayout;
