import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListButton from "../atoms/listButton";
import background from "../../images/background.jpg";
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
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export default MainScreen;
