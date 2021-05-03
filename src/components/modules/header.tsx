import React from "react";
import styled from "styled-components";
import { HeaderProps } from "../../MainInterface";

function Header({ onLogout }: HeaderProps) {
  return (
    <HeaderContainer>
      {true && <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>}
      <HeaderTitle>Business Card Maker</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  text-align: center;
  padding: 0.5em;
  background-color: purple;
  position: relative;
`;
const LogoutBtn = styled.button`
  position: absolute;
  right: 3em;
  top: 0.3em;
  padding: 0.2em;
  border-radius: 10%;
  background-color: #314955;
  color: white;
  outline: 0;
  border: 0;
  cursor: pointer;
`;
const HeaderTitle = styled.h1``;

export default Header;
