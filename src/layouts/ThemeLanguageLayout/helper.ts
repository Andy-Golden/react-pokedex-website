import type React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";

import type { ThemeLanguageLayoutPrepareHook } from "./interfaces";
import { changeLang } from "./language.reducer";
import { changeTheme } from "./theme.reducer";

const useThemeLanguageLayoutPrepareHook =
  (): ThemeLanguageLayoutPrepareHook => {
    const { i18n } = useTranslation();

    const theme = useSelector((state: RootState) => state.themeReducer.theme);
    const lang = useSelector((state: RootState) => state.langReducer.lang);

    const dispatch = useDispatch();

    useEffect(() => {
      const theme = localStorage.getItem("theme");
      dispatch(changeTheme(theme ?? "dark"));
      document.documentElement.setAttribute("data-theme", theme ?? "dark");

      const lang = localStorage.getItem("i18nextLng");
      dispatch(changeLang(lang ?? "en"));
    }, []);

    const handleSwitchTheme = (): void => {
      const newTheme =
        localStorage.getItem("theme") === "dark" ? "light" : "dark";
      dispatch(changeTheme(newTheme));
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    };

    const handleSwicthLanguage = (
      e: React.ChangeEvent<HTMLSelectElement>,
    ): void => {
      void i18n.changeLanguage(e.target.value);

      dispatch(changeLang(e.target.value));
    };

    return {
      theme,
      lang,
      onSwitchTheme: handleSwitchTheme,
      onSwitchLang: handleSwicthLanguage,
    };
  };

export { useThemeLanguageLayoutPrepareHook };
