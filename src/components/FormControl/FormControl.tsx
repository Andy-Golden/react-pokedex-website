import React from "react";

import type { FormControlProps } from "./interfaces";

import "./styles.scss";

function FormControl({ children, onSubmit }: FormControlProps): JSX.Element {
  return (
    <div className="form-control">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}

export default FormControl;
