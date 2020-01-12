import React from "react";
import { IonApp, IonSplitPane, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AuthContext } from "../data/AuthContext";

export const App = () => {
  return (
    <AuthContext.Provider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <IonRouterOutlet id="main">
              <Route path="/login" component={} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </AuthContext.Provider>
  );
}