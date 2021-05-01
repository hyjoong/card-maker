import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import AuthService from "./service/auth_service";
import { GlobalStyle } from "./styles/GlobalStyle";

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
