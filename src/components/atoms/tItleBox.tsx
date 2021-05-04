import React from "react";
import styled from "styled-components";

const HeaderTItle: React.FC = ({ children }) => {
  const handleHome = () => {
    window.location.replace("/");
  };
  return (
    <>
      <HeaderText onClick={handleHome}>{children}</HeaderText>
    </>
  );
};

const HeaderText = styled.h1`
  color: white;
  outline: none;
  text-decoration: none !important;
  cursor: pointer;
`;

export default HeaderTItle;
