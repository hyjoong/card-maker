import React from "react";
import styled from "styled-components";
import IHeader from "../modules/header";
import AuthService from "../../service/auth_service";

interface IButton {
  handleLogin: () => void;
  onLogout?: () => void;
  user: any;
}

const LoginButton: React.FC<IButton> = ({ handleLogin, user }) => {
  const authService = new AuthService();
  const onLogout = () => {
    authService.logout();
  };
  return (
    <>
      {user ? (
        <BtnLog onClick={onLogout}>로그아웃</BtnLog>
      ) : (
        <BtnLog onClick={handleLogin}>로그인</BtnLog>
      )}
    </>
  );
};

const BtnLog = styled.button`
  color: white;
  background: transparent;
  font-weight: 1000;
  outline: 0;
  border: 0;
  cursor: pointer;
`;

const BtnLogin = styled.button``;

export default LoginButton;
