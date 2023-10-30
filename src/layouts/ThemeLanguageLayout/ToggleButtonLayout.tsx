import React from "react";
import { ToggleButton } from "components/ToggleButton";

import type { ThemeLanguageLayoutProps } from "./interfaces/themeLanguageLayoutProps.interface";
import { useThemeLanguageLayoutPrepareHook } from "./helper";

import "./styles.scss";

const ThemeLanguageLayout = ({
  children,
}: ThemeLanguageLayoutProps): JSX.Element => {
  const { onChangeTheme } = useThemeLanguageLayoutPrepareHook();
  return (
    <div className="toggle-button-layout-container">
      <ToggleButton className={"toggle"} onChange={onChangeTheme} />
      {children}
    </div>
  );
};

export default ThemeLanguageLayout;
