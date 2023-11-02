import React from "react";

import type { AuthContainerProps } from "./interfaces";

import "./styles.scss";

const AuthContainer = ({ children }: AuthContainerProps): JSX.Element => {
  return <div className="auth-container">{children}</div>;
};

export default AuthContainer;
