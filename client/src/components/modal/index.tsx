import React from "react";
import { Close, Container, Content, Wrapper } from "./styles";

interface ModalType {
  bg: string;
  name: string;
  link: string;
}


interface Props  {
  modalContent: ModalType | null,
  setModalContent: React.Dispatch<React.SetStateAction<ModalType | null>>
}

const Modal = ({ modalContent, setModalContent} : Props) => {
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => {setModalContent(null)}}>X</Close>
        <Content>{modalContent?.link}</Content>
      </Wrapper>
    </Container>
  );
};

export default Modal;
