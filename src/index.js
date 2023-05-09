import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import store from "./redux/reduxStore";
import App from "./App";
import { Provider } from "react-redux";
export let rerender = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
};
rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});
