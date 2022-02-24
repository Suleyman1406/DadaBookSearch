import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoginModal from "./BookModal";

const Container = styled.div`
  width: 98%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Book = styled.div`
  width: 300px;
  margin: 20px;
  display: inline-block;
  text-align: center;
  background-color: white;
  padding: 15px 10px;
  border-radius: 5px;
  box-shadow: rgba(90, 90, 90, 0.54) 0px 3px 8px;
  @media only screen and (max-width: 1400px) {
    width: 280px;
    margin: 15px;
  }
  @media only screen and (max-width: 1050) {
    width: 260px;
    margin: 10px;
  }
  @media only screen and (max-width: 800px) {
    width: 240px;
    margin: 5px;
  }
`;

const Image = styled.img`
  width: 95%;
  height: 220px;
  margin-left: auto;
  object-fit: contain;
  margin-right: auto;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(220, 220, 220);
  @media only screen and (max-width: 1400px) {
    height: 200px;
  }
  @media only screen and (max-width: 1050) {
    height: 180px;
  }
  @media only screen and (max-width: 800px) {
    height: 160px;
  }
`;

const Title = styled.h5`
  margin-top: 10px;
  font-size: 18px;
  @media only screen and (max-width: 1050) {
    font-size: 16px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const Author = styled.h6`
  margin-top: 0;
  margin-bottom: 15px;
  display: inline-block;
  border-top: 1px solid rgba(220, 220, 220);
  padding: 5px;
  padding-top: 20px;
  font-size: 16px;
  opacity: 0.7;
  @media only screen and (max-width: 1050) {
    height: 14px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  color: rgba(120, 120, 120);
  margin: 10px;
  transition: 0.3s all;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 1050) {
    height: 14px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const NothingToShow = styled.div`
  margin: 80px 0 40px;
  font-size: 45px;
  font-weight: 800;
  @media only screen and (max-width: 1050) {
    margin: 60px 0 30px;
  }
  @media only screen and (max-width: 800px) {
    margin: 40px 0 20px;
  }
  @media only screen and (max-width: 600px) {
    margin: 20px 0 10px;
  }
`;

const Content = () => {
  const booksArr = useSelector((state) => state.BooksReducer.books);
  const [selectedBook, setSelectedBook] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsOpen(true);
  };
  return (
    <Container>
      <LoginModal
        book={selectedBook}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      {booksArr && booksArr.length > 0 ? (
        booksArr.map((book) => {
          return (
            book.volumeInfo.imageLinks &&
            book.volumeInfo.authors && (
              <Book key={book.id}>
                <Image src={book.volumeInfo.imageLinks.smallThumbnail} />
                <Title>{book.volumeInfo.title}</Title>
                <Author>{book.volumeInfo.authors[0]}</Author>
                <br />
                <Button
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  style={{ textAlign: "left" }}
                >
                  Preview
                </Button>
                <Button
                  onClick={() => openModal(book)}
                  style={{ textAlign: "right" }}
                >
                  Details
                </Button>
              </Book>
            )
          );
        })
      ) : (
        <NothingToShow>
          <div>
            Nothing <br />
            To
            <br />
            Show!?
            <br />
          </div>
        </NothingToShow>
      )}
    </Container>
  );
};

export default Content;
