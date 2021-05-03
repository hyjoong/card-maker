import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthProps } from "../../MainInterface";
import Footer from "./footer";
import Header from "./header";
import Editor from "./editor";
import Preview from "./preview";

function Maker({ authService }: AuthProps) {
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => setCards(res))
      .then((res) => console.log(res));
  }, []);

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
        <Editor cards={cards}>Card Maker</Editor>
        <Preview cards={cards}>Card Preview</Preview>
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
