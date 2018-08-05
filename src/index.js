import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducers";
import Root from "@components/Root";
import "@assets/style.scss";

const store = createStore(todoApp);

render(<Root store={store} />, document.getElementById("app"));

module.hot.accept();
