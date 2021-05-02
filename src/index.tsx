import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import AuthService from "./service/auth_service";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App authService={authService} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
