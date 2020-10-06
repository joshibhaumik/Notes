import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const { Component } = props;
  if (props.auth) {
    return <Route exact path={props.path} component={Component} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
