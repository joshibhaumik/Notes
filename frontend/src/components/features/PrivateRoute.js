import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const { Component, path, auth } = props;
  return <Route exact path={path} render={()=> auth ? <Component /> : <Redirect to="/login" />} />;
};

export default PrivateRoute;
