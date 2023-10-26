import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "store";

import { SelectBox, ToggleButton } from "components";

import { languageOptions } from "./constants";
import { changeTheme } from "./toggleButton.reducer";

import "./styles.scss";

interface ToggleButtonLayoutProps {
  children: React.ReactNode;
}

function ToggleButtonLayout({
  children,
}: ToggleButtonLayoutProps): JSX.Element {
  const { i18n } = useTranslation();

  const theme = useSelector(
    (state: RootState) => state.toggleButtonReducer.theme,
  );

  const dispatch = useDispatch();

  const handleChange = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(changeTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleSwicthLanguage = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): Promise<void> => {
    console.log(e.target.value);
    await i18n.changeLanguage(languageOptions[+e.target.value]);
  };

  return (
    <div className="theme-language-layout-container ">
      <div className="action-layout">
        <ToggleButton className="toggle" onChange={handleChange} />
        <SelectBox
          className="language-select-box"
          options={languageOptions}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onChange={handleSwicthLanguage}
        />
      </div>
      {children}
    </div>
  );
}

export default ToggleButtonLayout;
