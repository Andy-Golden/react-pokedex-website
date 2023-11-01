import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { HomePage, LoginPage, PokeDetailsPage } from "@pages";

const router = createBrowserRouter([
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
]);

export default router;
