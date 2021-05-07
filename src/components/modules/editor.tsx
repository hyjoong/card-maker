import React from "react";
import styled from "styled-components";
import CardEditForm from "./cardEditForm";
import { CardProps } from "../../MainInterface";
import CardAddForm from "./cardAddForm";

const Editor: React.FC<CardProps> = ({
  cards,
  children,
  createOrUpdateCard,
  deleteCard,
}) => {
  return (
    <EditorContainer>
      <EditorTitle>{children}</EditorTitle>
      {Object.keys(cards)?.map((key: any) => (
        <CardEditForm
          card={cards[key]}
          key={key}
          createOrUpdateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm createOrUpdateCard={createOrUpdateCard} />
    </EditorContainer>
  );
};

const EditorContainer = styled.section`
  flex-basis: 50%;
  padding: 0.5em 2em;
  border-right: ${({ theme }) => theme.makerLightGrey};
`;

const EditorTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.makerGreen};
  font-weight: 600;
`;

export default Editor;
