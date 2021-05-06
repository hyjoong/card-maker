import React from "react";
import styled from "styled-components";
import CardEditForm from "./cardEditForm";
import { CardProps } from "../../MainInterface";
import CardAddForm from "./cardAddForm";

const Editor: React.FC<CardProps> = ({ cards, addCard, children }) => {
  console.log("무야호", addCard);
  return (
    <EditorContainer>
      <EditorTitle>{children}</EditorTitle>
      {cards?.map((card: any, index: number) => (
        <CardEditForm card={card} key={index} />
      ))}
      <CardAddForm addCard={ addCard} />
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
