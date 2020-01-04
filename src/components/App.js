import React from 'react';
import { IonApp, IonSplitPane, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router"

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route path="/login" />
            <Route path=/>
            <Route />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
