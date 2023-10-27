import React from "react";
import { ToggleButton } from "components/ToggleButton";

import { useToggleButtonLayoutPrepareHook } from "./helper";

import "./styles.scss";

interface ToggleButtonLayoutProps {
  children: React.ReactNode;
}

const ToggleButtonLayout = ({
  children,
}: ToggleButtonLayoutProps): JSX.Element => {
  const { onChangeTheme } = useToggleButtonLayoutPrepareHook();
  return (
    <div className="toggle-button-layout-container">
      <ToggleButton className={"toggle"} onChange={onChangeTheme} />
      {children}
    </div>
  );
};

export default ToggleButtonLayout;
