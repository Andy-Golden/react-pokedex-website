import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundaryLayout, ThemeLanguageLayout } from "@layouts";
import { HomePage, LoginPage } from "@pages";

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        element: <ThemeLanguageLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
