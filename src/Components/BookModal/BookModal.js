import React from "react";
import {
  Image,
  CloseIcon,
  TextContainer,
  Title,
  Date,
  Author,
  Desc,
} from "./BookModalStyled";
import Styles from "./BookModal.module.css";

export default function LoginModal({ book, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div className={Styles.overlay_styles} onClick={onClose} />
      <div className={Styles.modal_styles + " a"}>
        <Image src={book.volumeInfo.imageLinks.smallThumbnail} />
        <CloseIcon onClick={onClose} />
        <TextContainer>
          <Title>{book.volumeInfo.title}</Title>
          <Date>({book.volumeInfo.publishedDate})</Date>
          {book.volumeInfo.authors.map((a, i) => (
            <Author key={i}>{a}</Author>
          ))}
          <Desc>{book.volumeInfo.description}</Desc>
        </TextContainer>
      </div>
    </>
  );
}
