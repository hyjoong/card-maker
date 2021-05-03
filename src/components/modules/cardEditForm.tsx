import React from "react";
import styled from "styled-components";
const CardEditForm: React.FC<{ card: any }> = ({ card }) => {
  return <CardId>{card.id}</CardId>;
};

const CardId = styled.h1``;

export default CardEditForm;