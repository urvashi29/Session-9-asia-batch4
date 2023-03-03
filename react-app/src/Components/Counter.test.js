import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

afterEach(cleanup);

it("increment counter", () => {
  const { getByTestId } = render(<Counter />);
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("decrement counter", () => {
  const { getByTestId } = render(<Counter />);
  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("-1");
});

it("shoule be enabled", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});








