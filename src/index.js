import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
// Whatever's within the provider will have access to its data
import store from "./app/store";

ReactDOM.render(
  <>
    <Router>
      <Provider store={store}>
        {/* Every component inside provider will have access to store variable */}
        <App />
      </Provider>
    </Router>
  </>,
  document.getElementById("root")
);
