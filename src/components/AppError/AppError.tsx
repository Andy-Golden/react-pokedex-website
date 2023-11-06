import React from "react";
import type { FallbackProps } from "react-error-boundary";

import "./styles.scss";

const AppError = ({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element => {
  return (
    <div className="error">
      <p>{error.message}</p>
      <button type="button" onClick={resetErrorBoundary}>
        Reset
      </button>
    </div>
  );
};

export default AppError;
