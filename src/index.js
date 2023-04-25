import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { state } from "./redux/state";
// import state2 from "./state.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  </BrowserRouter>
);
