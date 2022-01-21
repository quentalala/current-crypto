import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
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
