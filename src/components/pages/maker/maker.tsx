import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthProps } from "../../../MainInterface";
import Footer from "../../modules/footer";
import Header from "../../modules/header";
import Editor from "../../modules/editor";
import Preview from "../../modules/preview";

function Maker({ authService, user }: AuthProps) {
  const [cards, setCards] = useState({
    "1": {
      id: "1",
      name: "Hyeonjoong",
      company: "디뉴로",
      theme: "light",
      title: "FE",
      email: "shape12@gmail.com",
      message: "oh my god",
      fileName: "hjoong",
      fileURL: null,
    },
    "2": {
      id: "2",
      name: "Hyeonjoong2",
      company: "위티",
      theme: "light",
      title: "FE",
      email: "shape12@gmail.com",
      message: "Hi ~~~",
      fileName: "hjoong",
      fileURL: null,
    },
    "3": {
      id: "3",
      name: "Hyeonjoong3",
      company: "인썸니아",
      theme: "light",
      title: "FE",
      email: "shape12@gmail.com",
      message: "Good",
      fileName: "hjoong",
      fileURL: null,
    },
  });
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => setCards(res))
      .then((res) => console.log("z", cards));
  }, []);

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (!user) {
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
    // const updated = cards.map((item: any) => {
    //   if (card.id === item.id) return;
    //   return item;
    // });
    // console.log(card);
  };

  const deleteCard = (card: any) => {
    setCards((cards) => {
      const updated: any = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <MakerContainer>
      <Header user={user} />
      <Container>
        <Editor
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
