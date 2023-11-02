import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import { Error } from "@components";

const ErrorBoundaryLayout = (): JSX.Element => (
  <ErrorBoundary
    FallbackComponent={Error}
    onError={(error) => {
      console.log("err: ", error);
    }}
  >
    <Outlet />
  </ErrorBoundary>
);

export default ErrorBoundaryLayout;
