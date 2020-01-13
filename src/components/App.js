import React from "react";
import { IonSplitPane, IonRouterOutlet } from "@ionic/react";
import { PrivateRoute } from "./PrivateRoute";
import { connect } from "react-redux";

const App = ({ isAuthenticated, isVerifying }) => {
  return (
    <IonSplitPane contentId="main">
      <IonRouterOutlet id="main">
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
          path="/listings"
          component={}
        />
      </IonRouterOutlet>
    </IonSplitPane>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
};

export default connect(mapStateToProps)(App);
