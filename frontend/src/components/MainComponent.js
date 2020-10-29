import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "./features/PrivateRoute";

import Layout from "./Layout";
import Loading from "./Loading";
import Login from "./LoginComponent";
import SignUp from "./SignUpComponent";
import Note from "./NoteComponent";
import Profile from "./ProfileComponent";

function Main(props) {
  return (
    <Router>
        <Loading status={props.isLoading} />
      <Switch>
        {!props.isAuth && <>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </>}
        <Layout>
          <PrivateRoute auth={props.isAuth} path={"/"} Component={Note} />
          <PrivateRoute auth={props.isAuth} path={"/profile"} Component={Profile} />
        </Layout>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isAuth: state.user.isAuthenticated,
    isLoading: state.error.isLoading
  }
}

export default connect(mapStateToProps)(Main);
