import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
const MODAL_STYLES = {
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px 25px",
  zIndex: 1000,
  borderRadius: 2,
  transition: "0.5s all",
  width: "40%",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .2)",
  zIndex: 1000,
};

const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: #ff2800;
  transition: 0.2s all;
  &:hover {
    color: red;
  }
`;
const Image = styled.img`
  width: 25%;
  height: 200px;
  margin-left: auto;
  object-fit: contain;
  float: left;
  margin-right: auto;
  @media only screen and (max-width: 800px) {
    float: none;
    display: inline-block;
    height: 180px;
    width: 40%;
  }
  @media only screen and (max-width: 600px) {
    width: 60%;
    height: 150px;
  }
`;

const TextContainer = styled.div`
  width: 70%;
  float: left;
  margin: 10px 0;
  box-sizing: border-box;
  padding: 5px 15px;
  @media only screen and (max-width: 800px) {
    float: none;
    margin-right: auto;
    margin-left: auto;
    padding: 5px 10px;
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    padding: 5px 5px;
    width: 90%;
  }
`;

const Title = styled.h4`
  padding: 10px 15px;
  text-align: center;
  margin: 0px;
`;

const Desc = styled.p`
  max-height: 400px;
  overflow: auto;
  word-spacing: 1px;
  letter-spacing: 0.2px;
  line-height: 22px;
  font-size: 14px;
  @media only screen and (max-width: 800px) {
    max-height: 330px;
    letter-spacing: 0.1px;
    word-spacing: 0.7px;
    font-size: 13px;
  }
  @media only screen and (max-width: 600px) {
    max-height: 250px;
    font-size: 12px;
  }
  @media only screen and (max-height: 700px) {
    max-height: 250px;
  }
`;
const Author = styled.h5`
  margin: 2px;
  display: inline-block;
  background-color: rgba(220, 220, 220, 0.4);
  padding: 6px;
  border-radius: 20px;
  color: black;
`;

const Date = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: rgba(120, 120, 120);
  margin-top: -5px;
`;
export default function LoginModal({ book, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES} className="a">
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
