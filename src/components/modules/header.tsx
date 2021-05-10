import React from "react";
import styled from "styled-components";
import LoginButton from "../atoms/loginButton";
import { useHistory } from "react-router";
import HeaderTItle from "../atoms/tItleBox";

export interface IHeader {
  authService?: object;
  onLogout?: () => void;
  user: object;
}

const Header: React.FC<IHeader> = ({ authService, user }) => {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <HeaderContainer>
      <HeaderTItle>Friends Store</HeaderTItle>
      <LoginButton handleLogin={handleLogin} user={user} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  z-index: 10;
  width: 100%;
  text-align: center;
  height: 4em;
  padding: 0 100px;
  background-color: purple;
  align-items: center;
  top: 0;
  display: flex;
  justify-content: space-between;
`;

export default Header;
