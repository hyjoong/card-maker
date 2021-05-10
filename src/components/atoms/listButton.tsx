import React from "react";
import styled from "styled-components";

const ListButton: React.FC = ({ children }) => {
  return <MakeFriendButton>{children}</MakeFriendButton>;
};

const MakeFriendButton = styled.button`
  border-radius: 20px;
  width: 150px;
  height: 50px;
  color: white;
  font-weight: 1000;
  background-color: purple;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 10px;
`;

export default ListButton;
