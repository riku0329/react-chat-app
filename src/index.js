import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
    padding: 0;
    margin: 0rem;
    box-sizing: border-box;
}
  body {
    font-family: Avenir, Nunito, sans-serif;
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 1000px) {
      margin: 0;
    }
  }
`;

ReactDOM.render(
  <div>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
    </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
