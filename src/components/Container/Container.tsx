import React from "react";

import type { ContainerProps } from "./interfaces";

import "./styles.scss";

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className="container">{children}</div>;
};

export default Container;
