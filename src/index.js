import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { LIGHT_ASH } from "./utils/constans";

import App from "./App";
import store from './redux/store'

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
    height: 100vh;
    font-family: Avenir, Nunito, sans-serif;
    font-size: 16px;
    font-weight: 500;
    background-color: ${LIGHT_ASH};
    @media screen and (max-width: 1000px) {
      margin: 0;
    }
  }
`;

ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
