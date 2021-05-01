import React from "react";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import { AuthProps } from "./MainInterface";
import styled from "styled-components";

function App({ authService }: AuthProps) {
  return (
    <LoginWrapper>
      <Login authService={authService} />
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
