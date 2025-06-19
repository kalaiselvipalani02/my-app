import React, { useState } from "react";

const Counter = () => {
  //initalize the counter with default value 0
  const [count, setCount] = useState(0);
  //increment counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  //decrement counter
  const decrementCounter = () => {
    setCount(count - 1);
  };
  //reset
  const resetCounter = () => {
    setCount(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter {count}</h1>
      <button onClick={() => incrementCounter()} style={{ margin: "0 5px" }}>
        Increment
      </button>
      <button onClick={() => decrementCounter()} style={{ margin: "0 5px" }}>
        Decrement
      </button>
      <button onClick={() => resetCounter()} style={{ margin: "0 5px" }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
