import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import { AppError } from "@components";

const ErrorBoundaryLayout = (): JSX.Element => {
  return (
    <ErrorBoundary
      FallbackComponent={AppError}
      onError={(error) => {
        console.log("err: ", error);
      }}
    >
      <Outlet />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryLayout;
