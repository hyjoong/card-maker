import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthProps } from "../../MainInterface";
import Footer from "../footer/footer";
import Header from "../header/header";

function Login({ authService }: AuthProps) {
  const history = useHistory();
  const goToMaker = (userId: any) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };

  const onLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data: any) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <LoginContainer>
      <Header />
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <LoginList>
          <LoginItem>
            <Button name="google" onClick={onLogin}>
              Google
            </Button>
          </LoginItem>
          <LoginItem>
            <Button name="github" onClick={onLogin}>
              GitHub
            </Button>
          </LoginItem>
        </LoginList>
      </LoginBox>
      <Footer />
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  width: 30em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: whitesmoke;
`;
const LoginBox = styled.section``;
const LoginTitle = styled.h1``;

const LoginList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0.5rem;
`;

const LoginItem = styled.li`
  margin-bottom: 0.5em;
`;

const Button = styled.button`
  width: 100%;
  height: 2.5em;
  font-size: 1.2rem;
  border-radius: 1.2rem;
  background-color: transparent;
  cursor: pointer;
  border: 0.2rem solid rgba(0, 0, 0, 0.8);
  outline: 0;
`;

export default Login;
