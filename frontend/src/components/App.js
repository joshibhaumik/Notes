import React from "react";
import { Provider } from "react-redux";

import "../styles/App.css";
import Main from "./MainComponent";
import store from "../store.js";

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
