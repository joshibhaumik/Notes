import React from "react";
import { Provider } from 'react-redux';

import "../styles/App.css";
import Main from "./MainComponent";
import store from "../store.js"

function App() {
  return (
    <Main />
  );
}

export default App;
