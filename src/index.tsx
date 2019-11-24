import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ConfContext, thnsApi } from "./contexts";

ReactDOM.render(
  <ConfContext.Provider value={thnsApi}>
    <App />
  </ConfContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
