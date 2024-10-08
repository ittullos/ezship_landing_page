import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css"; // Import custom CSS
import "bootswatch/dist/zephyr/bootstrap.min.css"; // Import the Bootswatch theme

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
