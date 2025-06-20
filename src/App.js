import "./App.css";

import CounterLogic, { CounterProvider } from "./components/CounterLogic";

const App = () => {
  return (
    <CounterProvider>
      <div className="app-container">
        <h1 className="title">React Counter</h1>
        <p className="sub-description">
          A simple counter application using Context API
        </p>

        <CounterLogic />
      </div>
    </CounterProvider>
  );
};

export default App;
