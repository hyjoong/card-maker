import React, { useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IImage {
  imageUploader: any;
  name: string;
  onFileChange: (file: object) => void;
}

const InputImage: React.FC<IImage> = ({
  imageUploader,
  name,
  onFileChange,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef: any = useRef();

  const onChange = async (e: any) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
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
      {!loading && (
        <UploadButton onClick={onButtonClick} name={name}>
          {name || "No file"}
        </UploadButton>
      )}
      {loading && <LoadingBox></LoadingBox>}
    </ImageBox>
  );
};

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputFile = styled.input`
  display: none;
`;

const UploadButton = styled.button<{ name: String }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.name ? theme.makerWheat : theme.makerGrey};
  font-weight: bold;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    opacity: 0.8;
  }
`;

const LoadingBox = styled.div`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.makerLightGrey};
  border-top: 3px solid ${({ theme }) => theme.makerPink};
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default InputImage;
