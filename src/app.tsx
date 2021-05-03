import React from "react";
import Footer from "./components/modules/footer";
import Login from "./components/modules/login";
import { AuthProps } from "./MainInterface";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Maker from "./components/modules/maker";

function App({ authService }: AuthProps) {
  return (
    <LoginWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default App;
