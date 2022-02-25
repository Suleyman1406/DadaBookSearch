import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getBooks } from "../redux/BooksSlice";

const Container = styled.div`
  background-image: url("images/headerbg.jpg");
  background-color: #cccccc;
  height: 350px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    height: 300px;
  }
  @media only screen and (max-width: 400px) {
    height: 250px;
  }
`;

const Head = styled.h1`
  margin: 0;
  display: block;
  color: white;
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 800px) {
    font-size: 27px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 22px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-family: "Bitter", serif;
  box-shadow: rgba(255, 255, 255, 0.85) 0px 6px 12px -2px,
    rgba(255, 255, 255, 0.9) 0px 3px 7px -3px;
  transition: 0.4s all;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.49) 0px 10px 20px,
      rgba(0, 0, 0, 0.53) 0px 6px 6px;
    outline: none;
  }
`;

const Connective = styled.div`
  width: 40%;
  display: block;
  position: relative;
  box-sizing: border-box;
  @media only screen and (max-width: 1400px) {
    width: 55%;
  }
  @media only screen and (max-width: 900px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  font-size: 20px;
  top: 14px;
  right: 8px;
  transition: 0.2s all;
  &:hover {
    opacity: 0.6;
  }
`;
const SearchInputCont = styled.div`
  width: 100%;
  position: relative;
`;
const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(getBooks({ name: search }));
  };

  return (
    <Container>
      <Connective>
        <Head>Dada Book Searching App</Head>
        <SearchInputCont>
          <form onSubmit={handleSubmit}>
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find book "
            />
            <SearchIcon onClick={handleSubmit} />
          </form>
        </SearchInputCont>
      </Connective>
    </Container>
  );
};

export default Header;
