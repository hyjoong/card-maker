import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthProps } from "../../../MainInterface";
import Header from "../../modules/header";
import Editor from "../../modules/editor";
import Preview from "../../modules/preview";
import Footer from "../../modules/footer";

function Maker({ authService, FileInput, user, cardRepository }: AuthProps) {
  const history = useHistory();
  const historyState: any = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards: object) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]); // [] = 마운트가 되었을 때 && [userId,cardRepository] = 사용자의 id가 변경이 되거나 cardRepository가 다른 걸로 변경되면

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

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
    <MakerWrapper>
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
    </MakerWrapper>
  );
}

const MakerWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

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
  min-height: 0;
  @media ${(props) => props.theme.maker} {
    flex-direction: column;
  }
`;

export default Maker;
