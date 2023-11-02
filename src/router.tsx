import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundaryLayout, ThemeLanguageLayout } from "@layouts";
import { HomePage, LoginPage, PokeDetailsPage } from "@pages";

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
          {
            path: "/poke/:id",
            element: <PokeDetailsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
