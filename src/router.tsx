import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage } from "pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
