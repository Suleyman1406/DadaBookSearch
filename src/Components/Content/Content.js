import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginModal from "../BookModal/BookModal";
import {
  Container,
  Book,
  Image,
  Title,
  Author,
  Button,
  NothingToShow,
} from "./ContentStyled";
import Styles from "./Content.module.css";
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
                  className={Styles.textleft}
                >
                  Preview
                </Button>
                <Button
                  onClick={() => openModal(book)}
                  className={Styles.textright}
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
