import React from "react";
import styled from "styled-components";
import ButtonElement from "../atoms/buttonElement";
import ImageInput from "../atoms/ImageInput";

const CardEditForm: React.FC<{ card: any }> = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email.console.log("click");
  };
  return (
    <CardForm>
      <NameInput type="text" name="name" value={name} readOnly />
      <CompanyInput
        defaultValue={company}
        type="text"
        name="company"
        readOnly
      />
      <TitleInput type="text" name="title" value={title} readOnly />
      <EmailInput type="text" name="email" value={email} readOnly />
      <MemoInput name="message" value={message} readOnly />
      <ImageInput>Image</ImageInput>
      <ButtonElement onSubmit={() => onSubmit}>Delete</ButtonElement>
    </CardForm>
  );
};

const CardForm = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border-top: 1px solid ${({ theme }) => theme.makerBlack};
  border-left: 1px solid ${({ theme }) => theme.makerBlack};
  margin-bottom: 1em;
`;

const NameInput = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.3em;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.makerWhite};
`;

const CompanyInput = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.3em;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.makerWhite};
`;

const TitleInput = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.3em;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.makerWhite};
`;

const EmailInput = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.3em;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.makerWhite};
`;

const MemoInput = styled.textarea`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.3em;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.makerWhite};
  flex-basis: 100%;
  &:focus {
    outline: 0;
  }
`;

export default CardEditForm;
