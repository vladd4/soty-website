import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/normalize.scss";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
