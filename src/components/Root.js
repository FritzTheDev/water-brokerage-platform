import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./App";
import { configureStore } from "../redux/store";

const store = configureStore();

export const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)