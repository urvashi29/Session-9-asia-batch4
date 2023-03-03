import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { initiState, reducer } from "../reducer";
import CounterDec from "./CounterDec";

const renderWithRedux = (
  component,
  { initiState, store = createStore(reducer, initiState) } = {}
) => {
  return { ...render(<Provider store={store}>{component}</Provider>), store };
};

afterEach(cleanup);

it("check initial state", () => {
  const { getByTestId } = renderWithRedux(<CounterDec />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});


it("increment through redux", () => {
  const { getByTestId } = renderWithRedux(<CounterDec />, {
    initiState: { count: 5 },
  });

  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("6");
});


it("decrement the value through counter", () => {
  const { getByTestId } = renderWithRedux(<CounterDec />, {
    initiState: {
      count: 100,
    },
  });

  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("99");
});
