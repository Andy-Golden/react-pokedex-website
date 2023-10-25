import React from "react";
import "./styles.scss";
import { ToggleButton } from "components";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "store";
import { changeTheme } from "./toggleButton.reducer";

interface ToggleButtonLayoutProps {
  children: React.ReactNode;
}

function ToggleButtonLayout({
  children,
}: ToggleButtonLayoutProps): JSX.Element {
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
}

export default ToggleButtonLayout;
