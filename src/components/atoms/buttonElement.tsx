import React from "react";
import styled from "styled-components";

interface ButtonP {
  onSubmit?: () => void;
}

const ButtonElement: React.FC<ButtonP> = ({ children, onSubmit }) => {
  return <DefaultButton onClick={onSubmit}>{children}</DefaultButton>;
};

const DefaultButton = styled.button`
  background-color: ${({ theme }) => theme.makerGreen};
  color: ${({ theme }) => theme.makerWhite};
  font-weight: bold;
  cursor: pointer;
  padding: 0.5em;
  font-size: 0.8rem;
  flex: 1 1 50%;
  &:hover {
    opacity: 0.8;
  }
`;

export default ButtonElement;
