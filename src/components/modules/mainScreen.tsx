import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListButton from "../atoms/listButton";

interface IMain {
  user: object;
}

const MainScreen: React.FC<IMain> = ({ user }) => {
  return (
    <MainContainer>
      <Link to="/maker">
        <ListButton>친구 등록</ListButton>
      </Link>
      <Link to="/maker">{user && <ListButton>친구 리스트</ListButton>}</Link>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  border: 1px solid black;
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default MainScreen;
