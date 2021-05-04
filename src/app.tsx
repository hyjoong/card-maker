import React, { useState } from "react";
import Footer from "./components/modules/footer";
import Login from "./components/modules/login";
import { AuthProps } from "./MainInterface";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/pages/maker/maker";
import Main from "./components/pages/main/main";
import AuthService from "./service/auth_service";
function App() {
  const authService = new AuthService();
  const [user, setUser] = useState(null);
  authService.checkLogin((user: any) => {
    if (user) {
      setUser(() => user);
    } else {
      setUser(() => null);
    }
  });
  return (
    <LoginWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main authService={authService} user={user} />
          </Route>
          <Route path="/login">
            <Login authService={authService} user={user} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} user={user} />
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default App;
