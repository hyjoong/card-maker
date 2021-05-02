import React from "react";
import styled from "styled-components";

function Editor() {
  return (
    <EditorContainer>
      <EditorTitle>Card Maker</EditorTitle>
    </EditorContainer>
  );
}

const EditorContainer = styled.section`
  flex-basis: 50%;
  background-color: wheat;
`;

const EditorTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
  color: ${(props) => props.theme.makerGreen};
  font-weight: 600;
`;

export default Editor;
