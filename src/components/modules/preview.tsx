import React from "react";
import styled from "styled-components";
import Card from "./card";
import { CardProps } from "../../MainInterface";

const Preview: React.FC<{ cards: any }> = ({ cards, children }) => {
  return (
    <PreviewContainer>
      <PreviewTitle>{children}</PreviewTitle>
      <PreviewCards>
        {Object.keys(cards)?.map((key: string) => (
          <Card card={cards[key]} key={key} />
        ))}
      </PreviewCards>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.section`
  flex-basis: 50%;
`;

const PreviewTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
  color: ${(props) => props.theme.makerGreen};
  font-weight: 600;
`;

const PreviewCards = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0.5em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Preview;
