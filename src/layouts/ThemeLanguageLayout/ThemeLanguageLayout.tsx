import React from "react";
import { SelectBox } from "components/SelectBox";
import { ToggleButton } from "components/ToggleButton";

import { languageOptions } from "./constants";
import { useThemeLanguageLayoutPrepareHook } from "./helper";
import type { ThemeLanguageLayoutProps } from "./interfaces";

import "./styles.scss";

function ThemeLanguageLayout({
  children,
}: ThemeLanguageLayoutProps): JSX.Element {
  const { theme, lang, onSwitchTheme, onSwitchLang } =
    useThemeLanguageLayoutPrepareHook();

  return (
    <div className="theme-language-layout-container ">
      <div className="action-layout">
        <ToggleButton
          className="toggle"
          onChange={onSwitchTheme}
          checked={theme === "light"}
        />
        <SelectBox
          defaultValue={lang}
          className="language-select-box"
          options={Object.values(languageOptions)}
          onChange={onSwitchLang}
        />
      </div>
      {children}
    </div>
  );
}

export default ThemeLanguageLayout;
