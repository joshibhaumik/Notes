import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./LoginComponent";
import Note from "./NoteComponent";
import Layout from "./Layout";

function Main(props) {
  const auth = true;

  return (
    <Router>
      <Switch>
        {auth ? (
          <Layout>
            <Route exact path="/" component={Note} />
          </Layout>
        ) : (
          <Route exact path="/login" component={Login} />
        )}
      </Switch>
    </Router>
  );
}

export default Main;
