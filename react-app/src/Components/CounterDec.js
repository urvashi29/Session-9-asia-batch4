import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterDec = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };

  return (
    <div>
      <h1 data-testid="counter">{count}</h1>
      <button data-testid="button-up" onClick={increment}>
        Up
      </button>
      <button data-testid="button-down" onClick={decrement}>
        Down
      </button>
    </div>
  );
};

export default CounterDec;
