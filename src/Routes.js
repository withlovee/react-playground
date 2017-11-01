import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Edit from "./containers/Edit";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/edit" exact component={Edit} />
  </Switch>;