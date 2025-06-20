import { createContext } from "react";
import "./App.css";

import CounterLogic from "./components/CounterLogic";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">React Counter</h1>
      <p className="sub-description">
        A simple counter application using Context API
      </p>

      <CounterLogic />
    </div>
  );
};

export default App;
