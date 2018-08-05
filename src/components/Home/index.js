import React, { Component } from "react";
import { Route } from "react-router-dom";

import { childRoutes } from "@app/router";

class HomeComponent extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>React Initial - Todo Project Example</h1>
        {childRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exactly={route.exactly}
          />
        ))}
      </div>
    );
  }
}

export default HomeComponent;
