import styled from "styled-components";
export const Container = styled.div`
  width: 98%;
  margin: auto;
  margin-top: 20px;
  min-height: 55vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Book = styled.div`
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

export const Image = styled.img`
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

export const Title = styled.h5`
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
export const Author = styled.h6`
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

export const Button = styled.a`
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

export const NothingToShow = styled.div`
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
