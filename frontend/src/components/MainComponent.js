import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "./features/PrivateRoute";

import Login from "./LoginComponent";
import Note from "./NoteComponent";
import Layout from "./Layout";
import Profile from "./ProfileComponent";
import SignUp from "./SignUpComponent";

function Main(props) {
  console.log(props.user, props.isAuth);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Layout>
          <PrivateRoute auth={props.isAuth || true} path={"/"} Component={Note} />
          <PrivateRoute auth={props.isAuth || true} path={"/profile"} Component={Profile} />
        </Layout>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isAuth: state.user.isAuthenticated,
    isLoading: state.user.isLoading
  }
}

export default connect(mapStateToProps,)(Main);
