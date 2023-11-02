import React from "react";
import { Link, Outlet } from "react-router-dom";

import { AppBar, Dropdown, SelectMenu, ToggleButton } from "@components";
import { ThemeEnum } from "@enums";

import { languageOptions } from "./constants";
import { useThemeLanguageLayoutPrepareHook } from "./helper";

import "./styles.scss";

function ThemeLanguageLayout(): JSX.Element {
  const { user, theme, lang, onLogout, onSwitchTheme, onSwitchLang } =
    useThemeLanguageLayoutPrepareHook();

  return (
    <div className="theme-language-layout-container ">
      <AppBar>
        <ul className="left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Contact</li>
          <li>About</li>
          <li>New</li>
        </ul>
        <ul className="right">
          {user.email !== null ? (
            <li>
              <span onClick={onLogout}>Logout</span>
            </li>
          ) : (
            <>
              {" "}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/login">Register</Link>
              </li>
            </>
          )}
          <Dropdown>
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
          </Dropdown>
        </ul>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default ThemeLanguageLayout;
