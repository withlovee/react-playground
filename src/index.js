import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

ReactDOM.render(
	<Provider store={store}>
  <Router>
    <App />
  </Router></Provider>,
  document.getElementById("root")
);
registerServiceWorker();