import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: initialState.count };
  }
};
const CounterLogic = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="counter-container">
        <h1>{state.count} </h1>
        <button
          className="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
        <button className="button" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterLogic;
