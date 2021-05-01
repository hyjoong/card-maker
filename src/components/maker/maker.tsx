import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthProps } from "../../MainInterface";
import Footer from "../footer/footer";
import Header from "../header/header";

function Maker({ authService }: AuthProps) {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <MakerContainer>
      <Header onLogout={onLogout} />
      <Footer />
    </MakerContainer>
  );
}

const MakerContainer = styled.section``;

export default Maker;
