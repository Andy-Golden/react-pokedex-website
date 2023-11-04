import React from "react";
import { Link, Outlet } from "react-router-dom";

import { AppBar, Dropdown, SelectMenu, ToggleButton } from "@components";
import { Theme } from "@enums";

import { languageOptions } from "./constants";
import { useThemeLanguageLayoutPrepareHook } from "./helper";

import "./styles.scss";

function ThemeLanguageLayout(): JSX.Element {
  const { t, user, theme, lang, onLogout, onSwitchTheme, onSwitchLang } =
    useThemeLanguageLayoutPrepareHook();

  return (
    <div className="theme-language-layout-container ">
      <AppBar>
        <ul className="left">
          <li>
            <Link to="/">{t("themeLanguageLayout.home")}</Link>
          </li>
          <li>
            <Link to="/">{t("themeLanguageLayout.news")}</Link>
          </li>
        </ul>
        <ul className="right">
          {user.email !== null ? (
            <li>
              <span onClick={onLogout}>{t("themeLanguageLayout.logout")}</span>
            </li>
          ) : (
            <>
              {" "}
              <li>
                <Link to="/login">{t("themeLanguageLayout.login")}</Link>
              </li>
              <li>
                <Link to="/login">{t("themeLanguageLayout.register")}</Link>
              </li>
            </>
          )}
          <Dropdown label={t("themeLanguageLayout.setting")}>
            <ToggleButton
              className="toggle"
              onChange={onSwitchTheme}
              checked={theme === Theme.LIGHT}
            />
            <SelectMenu
              defaultValue={lang}
              className="language-select-box"
              options={Object.values(languageOptions)}
              onChange={onSwitchLang}
            />
          </Dropdown>
        </ul>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default ThemeLanguageLayout;
