import React from "react";
import "./styles.scss";
import { ToggleButton } from "components";

interface ToggleButtonLayoutProps {
  children: React.ReactNode;
}

function ToggleButtonLayout({
  children,
}: ToggleButtonLayoutProps): JSX.Element {
  return (
    <div className="toggle-button-layout-container">
      <ToggleButton className={"toggle"} />
      {children}
    </div>
  );
}

export default ToggleButtonLayout;
