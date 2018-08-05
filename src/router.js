import React from "react";
import { Route, Switch } from "react-router-dom";

import TodoApp from "@components/TodoApp";
import Home from "@components/Home";

export const childRoutes = [
  {
    path: "/:filter?",
    component: TodoApp,
    exactly: true
  }
];

module.exports = (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);
