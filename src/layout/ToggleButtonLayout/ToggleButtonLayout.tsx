import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "store";

import { ToggleButton } from "components";

import { changeTheme } from "./toggleButton.reducer";

import "./styles.scss";

interface ToggleButtonLayoutProps {
  children: React.ReactNode;
}

const ToggleButtonLayout = ({
  children,
}: ToggleButtonLayoutProps): JSX.Element => {
  const theme = useSelector(
    (state: RootState) => state.toggleButtonReducer.theme,
  );

  const dispatch = useDispatch();

  const handleChange = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(changeTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="toggle-button-layout-container">
      <ToggleButton className={"toggle"} onChange={handleChange} />
      {children}
    </div>
  );
};

export default ToggleButtonLayout;
