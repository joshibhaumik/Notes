import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./features/PrivateRoute";

import Login from "./LoginComponent";
import Note from "./NoteComponent";
import Layout from "./Layout";
import Profile from "./ProfileComponent";
import SignUp from "./SignUpComponent";

function Main(props) {
  const auth = false;

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Layout>
          <PrivateRoute auth={auth} path={"/"} Component={Note} />
          <PrivateRoute auth={auth} path={"/profile"} Component={Profile} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default Main;
