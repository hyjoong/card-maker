import React from "react";
import styled from "styled-components";

const Card: React.FC<{ card: any }> = ({ card }) => {
  return <CardTitle>{card.id}</CardTitle>;
};

const CardTitle = styled.h1`
  width: 20px;
`;

export default Card;
