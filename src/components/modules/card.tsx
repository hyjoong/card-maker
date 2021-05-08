import React from "react";
import styled from "styled-components";

const DEFAULT_IMAGE = "/images/ham-sleep.jpg";

const Card: React.FC<{ card: any }> = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  const url = fileURL || DEFAULT_IMAGE;
  return (
    <CardWrapper>
      <CardImg src={url} alt="profile" />
      <CardContainer>
        <CardName>name : {name}</CardName>
        <CardCompany>company : {company}</CardCompany>
        <CardTitle>Poition : {title}</CardTitle>
        <CardEmail>email : {email}</CardEmail>
        <CardMessage>Memo : {message}</CardMessage>
      </CardContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  background-color: wheat;
  border-radius: 1em;
  margin-bottom: 0.5em;
  padding: 0.2em 0;
  width: 100%;
  box-shadow: 6px 6px 8px 0px ${({ theme }) => theme.makerShadow};
`;

const CardImg = styled.img`
  width: 10em;
  height: 10em;
  padding: 1em;
  margin: 0 1em 0 0.5em;
  border-radius: 50%;
`;

const CardContainer = styled.div`
  width: 100%;
`;
const CardTitle = styled.h1`
  font-size: 0.8rem;
`;

const CardName = styled(CardTitle)``;
const CardCompany = styled.p`
  font-size: 0.8rem;
`;
const CardEmail = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
const CardMessage = styled.p`
  margin-bottom: 0.2em;
  font-size: 0.8rem;
`;

export default Card;
