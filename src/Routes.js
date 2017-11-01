import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncEdit = asyncComponent(() => import("./containers/Edit"));
// import Home from "./containers/Home";
// import Edit from "./containers/Edit";

export default () =>
  <Switch>
    <Route path="/" exact component={AsyncHome} />
    <Route path="/edit" exact component={AsyncEdit} />
  </Switch>;