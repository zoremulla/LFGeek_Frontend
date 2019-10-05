import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
