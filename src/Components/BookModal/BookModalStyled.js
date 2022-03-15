import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: #ff2800;
  transition: 0.2s all;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
export const Image = styled.img`
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

export const TextContainer = styled.div`
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

export const Title = styled.h4`
  padding: 10px 15px;
  text-align: center;
  margin: 0px;
`;

export const Desc = styled.p`
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
export const Author = styled.h5`
  margin: 2px;
  display: inline-block;
  background-color: rgba(220, 220, 220, 0.4);
  padding: 6px;
  border-radius: 20px;
  color: black;
`;

export const Date = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: rgba(120, 120, 120);
  margin-top: -5px;
`;
