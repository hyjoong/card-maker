import React from "react";
import styled from "styled-components";

const ImageInput: React.FC = ({ children }) => {
  return <ImageButton>{children}</ImageButton>;
};

const ImageButton = styled.button``;

export default ImageInput;
