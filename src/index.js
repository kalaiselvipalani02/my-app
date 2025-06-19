import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
//select the div to inject dynamic content

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
