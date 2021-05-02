import React from "react";
import styled from "styled-components";

function Preview() {
  return (
    <PreviewContainer>
      <PreviewTitle>Preview</PreviewTitle>
    </PreviewContainer>
  );
}

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
