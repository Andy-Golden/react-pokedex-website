import type React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store";
import { switchLang, switchTheme } from "store/slices";

import { Lang, Theme } from "@enums";

import type { ThemeLanguageLayoutPrepareHook } from "./interfaces";

const useThemeLanguageLayoutPrepareHook =
  (): ThemeLanguageLayoutPrepareHook => {
    const { i18n } = useTranslation();

    const theme = useSelector((state: RootState) => state.themeReducer.theme);
    const lang = useSelector((state: RootState) => state.langReducer.lang);

    const dispatch = useDispatch();

    useEffect(() => {
      const theme = localStorage.getItem("theme");
      dispatch(switchTheme(theme ?? Theme.DARK));
      document.documentElement.setAttribute("data-theme", theme ?? Theme.DARK);

      const lang = localStorage.getItem("i18nextLng");
      dispatch(switchLang(lang ?? Lang.EN));
    }, []);

    const handleSwitchTheme = (): void => {
      const newTheme =
        localStorage.getItem("theme") === Theme.DARK ? Theme.LIGHT : Theme.DARK;
      dispatch(switchTheme(newTheme));
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    };

    const handleSwitchLanguage = (
      e: React.ChangeEvent<HTMLSelectElement>,
    ): void => {
      void i18n.changeLanguage(e.target.value);

      dispatch(switchLang(e.target.value));
    };

    return {
      theme,
      lang,
      onSwitchTheme: handleSwitchTheme,
      onSwitchLang: handleSwitchLanguage,
    };
  };

export { useThemeLanguageLayoutPrepareHook };
