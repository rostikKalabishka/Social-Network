import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { addPost } from "./redux/state";
import App from "./App";

export let rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} />
      </React.StrictMode>
    </BrowserRouter>
  );
};
