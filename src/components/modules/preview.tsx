import React from "react";
import styled from "styled-components";
import Card from "./card";
import { CardProps } from "../../MainInterface";

const Preview: React.FC<CardProps> = ({ cards, children }) => {
  return (
    <PreviewContainer>
      <PreviewTitle>{children}</PreviewTitle>
      {cards?.map((card: any) => (
        <Card card={card} />
      ))}
    </PreviewContainer>
  );
};

const PreviewContainer = styled.section`
  flex-basis: 50%;
  background-color: pink;
`;

const PreviewTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
  color: ${(props) => props.theme.makerGreen};
  font-weight: 600;
`;

export default Preview;
