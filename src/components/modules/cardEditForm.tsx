import React from "react";
import styled from "styled-components";
import ButtonElement from "../atoms/buttonElement";
import ImageInput from "../atoms/ImageInput";

interface IEditProps {
  card: any;
  createOrUpdateCard: (card: any) => void;
  deleteCard: (card: any) => void;
}

const CardEditForm: React.FC<IEditProps> = ({
  card,
  createOrUpdateCard,
  deleteCard,
}) => {
  const {
    name,
    id,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget == null) return;
    e.preventDefault();
    createOrUpdateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteCard(card);
  };
  return (
    <CardForm>
      <NameInput
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <CompanyInput
        defaultValue={company}
        type="text"
        name="company"
        onChange={onChange}
      />
      <TitleInput
        type="text"
        name="title"
        defaultValue={title}
        onChange={onChange}
      />
      <EmailInput
        type="text"
        name="email"
        defaultValue={email}
        onChange={onChange}
      />
      <MemoInput name="message" defaultValue={message} onChange={onChange} />
      <ImageInput>Image</ImageInput>
      <ButtonElement onSubmit={onSubmit}>Delete</ButtonElement>
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

const MemoInput = styled.input`
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
