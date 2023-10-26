import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";

import { SelectBox, ToggleButton } from "components";

import { languageOptions } from "./constants";
import { changeLang } from "./language.reducer";
import { changeTheme } from "./theme.reducer";

import "./styles.scss";

interface ToggleButtonLayoutProps {
  children: React.ReactNode;
}

const map = {
  en: 0,
  vi: 1,
};

function ToggleButtonLayout({
  children,
}: ToggleButtonLayoutProps): JSX.Element {
  const { i18n } = useTranslation();

  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const lang = useSelector((state: RootState) => state.langReducer.lang);

  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    dispatch(changeTheme(theme ?? "dark"));
    document.documentElement.setAttribute("data-theme", theme ?? "dark");

    const lang = localStorage.getItem("i18nextLng");
    dispatch(changeLang(lang ?? "es"));
  }, []);

  const handleChange = (): void => {
    const newTheme =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";
    dispatch(changeTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSwicthLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    void i18n.changeLanguage(languageOptions[+e.target.value]);

    dispatch(changeLang(languageOptions[+e.target.value]));
  };

  return (
    <div className="theme-language-layout-container ">
      <div className="action-layout">
        <ToggleButton
          className="toggle"
          onChange={handleChange}
          checked={theme === "light"}
        />
        <SelectBox
          defaultValue={map[lang as keyof typeof map]}
          className="language-select-box"
          options={languageOptions}
          onChange={handleSwicthLanguage}
        />
      </div>
      {children}
    </div>
  );
}

export default ToggleButtonLayout;
