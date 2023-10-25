import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";

// eslint-disable-next-line no-undef
test("renders learn react link", () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/learn react/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
