import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthProps } from "../../../MainInterface";
import Footer from "../../modules/footer";
import Header from "../../modules/header";
import Editor from "../../modules/editor";
import Preview from "../../modules/preview";

function Maker({ authService, FileInput, user, cardRepository }: AuthProps) {
  const history = useHistory();
  const historyState: any = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  // useEffect(() => {
  //   fetch("data/data.json")
  //     .then((res) => res.json())
  //     .then((res) => setCards(res))
  //     .then((res) => console.log("z", cards));
  // }, []);

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (user) {
        setUserId(user.uid);
      } else {
        // 사용자가 없으면 로그인 화면으로
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card: any) => {
    setCards((cards) => {
      const updated: any = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card: any) => {
    setCards((cards) => {
      const updated: any = { ...cards };
      delete updated[card.id];
      return updated;
    });

    cardRepository.removeCard(userId, card);
  };
  return (
    <MakerContainer>
      <Header user={user} />
      <Container>
        <Editor
          FileInput={FileInput}
          cards={cards}
          createOrUpdateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        >
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
  height: 100%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.makerWhite};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  @media ${(props) => props.theme.maker} {
    flex-direction: column;
  }
`;

export default Maker;
