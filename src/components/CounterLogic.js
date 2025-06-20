import React, { useContext } from "react";
import CounterContext from "./CounterContext ";
const CounterLogic = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <div className="counter-container">
        <h1> {count}</h1>
        <button className="button" onClick={increment}>
          +
        </button>
        <button className="button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default CounterLogic;
