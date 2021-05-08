import React, { useRef } from "react";
import styled from "styled-components";

interface IImage {
  imageUploader: any;
  onFileChange: (file: object) => void;
  name: string;
}

const InputImage: React.FC<IImage> = ({
  imageUploader,
  name,
  onFileChange,
}) => {
  const inputRef: any = useRef();

  const onChange = async (e: any) => {
    const uploaded = await imageUploader.upload(e.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  const onButtonClick = (e: any) => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <ImageBox>
      <InputFile
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <UploadButton onClick={onButtonClick}>{name || "No file"}</UploadButton>
    </ImageBox>
  );
};

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const InputFile = styled.input`
  display: none;
`;

const UploadButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.makerGrey};
  font-weight: bold;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    opacity: 0.8;
  }
`;
export default InputImage;
