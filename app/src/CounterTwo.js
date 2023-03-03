import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onDecrement } from "./action";
const CounterTwo = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      {count}
      <button onClick={() => dispatch(onDecrement(1))}>-</button>
    </div>
  );
};

export default CounterTwo;
