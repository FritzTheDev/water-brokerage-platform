import React from "react";
import { IonSplitPane, IonRouterOutlet } from "@ionic/react";
import { PrivateRoute } from "./PrivateRoute";
import { connect } from "react-redux";
import { ListingsPage } from "../pages/Listings";
import { LoginPage } from "../pages/Login";
import { Route, Redirect } from "react-router-dom";

const App = ({ isAuthenticated, isVerifying }) => {
  return (
    <IonSplitPane contentId="main">
      <IonRouterOutlet id="main">
        <Route path="/login" component={LoginPage} />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
          path="/listings"
          component={ListingsPage}
        />
        <Route path="/" exact render={() => <Redirect to="/listings" />} />
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
