import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthProps } from "../../../MainInterface";
import Footer from "../../modules/footer";
import Header from "../../modules/header";
import Editor from "../../modules/editor";
import Preview from "../../modules/preview";

function Maker({ authService, user }: AuthProps) {
  const [cards, setCards] = useState([]);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => setCards(res));
  }, []);
  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card: any) => {
    console.log("실행");
    console.log(card);
    const updated: any = [...cards, card];
    setCards(updated);
  };
  return (
    <MakerContainer>
      <Header user={user} />
      <Container>
        <Editor cards={cards} addCard={addCard}>
          Friend Maker
        </Editor>
        <Preview cards={cards}>Friends List</Preview>
      </Container>
      <Footer />
    </MakerContainer>
  );
}

const MakerContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.makerWhite};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  @media ${(props) => props.theme.maker} {
    flex-direction: column;
  }
`;

export default Maker;
