import React from "react";
import styled from "styled-components";

const ImageInput: React.FC = ({ children }) => {
  return <ImageButton>{children}</ImageButton>;
};

const ImageButton = styled.button`
  padding: 0;
  flex: 1 1 50%;
`;

export default ImageInput;
