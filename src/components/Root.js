import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import main_route from "@app/router";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router children={main_route} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
