import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLink href="https://github.com/hyjoong/friends-stroe">
        github.com/hyjoong
      </FooterLink>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 2.7em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  text-align: center;
`;

const FooterLink = styled.a`
  text-decoration: none !important;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
export default Footer;
