import React from "react";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Provider } from "react-redux";

import { App } from "./App";
import { configureStore } from "../redux/store";

const store = configureStore();

export const Root = () => (
  <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <App />
      </IonReactRouter>
    </IonApp>
  </Provider>
);
