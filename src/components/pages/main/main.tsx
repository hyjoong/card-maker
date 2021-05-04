import React from "react";
import Header from "../../modules/header";
import { AuthProps } from "../../../MainInterface";
import MainScreen from "../../modules/mainScreen";
import styled from "styled-components";
import Footer from "../../modules/footer";

const Main: React.FC<AuthProps> = ({ authService, user }) => {
  return (
    <MainBox>
      <Header authService={authService} user={user} />
      <MainScreen user={user} />
      <Footer />
    </MainBox>
  );
};

const MainBox = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Main;
