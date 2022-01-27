/** @jsxRuntime classic */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { Theme } from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
