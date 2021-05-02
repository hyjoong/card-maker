import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthProps } from "../../MainInterface";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";

function Maker({ authService }: AuthProps) {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <MakerContainer>
      <Header onLogout={onLogout} />
      <Container>
        <Editor />
        <Preview />
      </Container>
      <Footer />
    </MakerContainer>
  );
}

const MakerContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  @media ${(props) => props.theme.maker} {
    flex-direction: column;
  }
`;

export default Maker;
