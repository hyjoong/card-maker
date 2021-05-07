import React, { FormEvent, useRef } from "react";
import styled from "styled-components";
import ButtonElement from "../atoms/buttonElement";
import ImageInput from "../atoms/ImageInput";

interface IAddForm {
  createOrUpdateCard: (card: any) => void;
}

const CardAddForm: React.FC<IAddForm> = ({ createOrUpdateCard }) => {
  const formRef: any = useRef("");
  const nameRef: any = useRef("");
  const companyRef: any = useRef("");
  const titleRef: any = useRef("");
  const emailRef: any = useRef("");
  const messageRef: any = useRef("");
  let value: any;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
    };
    formRef.current.reset();
    createOrUpdateCard(card);
  };
  return (
    <CardForm ref={formRef} onSubmit={onSubmit}>
      <NameInput defaultValue="" ref={nameRef} type="text" placeholder="Name" />
      <CompanyInput
        defaultValue=""
        ref={companyRef}
        name="name"
        type="text"
        placeholder="company"
      />
      <TitleInput
        defaultValue=""
        ref={titleRef}
        name="title"
        type="text"
        placeholder="title"
      />
      <EmailInput
        defaultValue=""
        ref={emailRef}
        name="email"
        type="text"
        placeholder="email"
      />
      <MemoInput defaultValue="" ref={messageRef} placeholder="message" />
      <ImageInput>Image</ImageInput>
      <ButtonElement>Add</ButtonElement>
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

export default CardAddForm;
