import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillCode,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { FooterContainer, Container, Link, Text } from "./FooterStyled";
import Styles from "./Footer.module.css";
const Footer = () => {
  const length = useSelector((state) => state.BooksReducer.length);

  return (
    <Container hasContent={length > 0}>
      <FooterContainer>
        <Link href="https://github.com/Suleyman1406" target="_blank">
          <AiFillGithub className={Styles.icon} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/suleyman-dadashov-54136a178/"
          target="_blank"
        >
          <AiFillLinkedin className={Styles.icon} />
        </Link>
        <Link href="https://www.instagram.com/suleyman._.14/" target="_blank">
          <AiFillInstagram className={Styles.icon} />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100009527858530"
          target="_blank"
        >
          <AiFillFacebook className={Styles.icon} />
        </Link>
        <Link href="https://twitter.com/Suleyman141406" target="_blank">
          <AiFillTwitterCircle className={Styles.icon} />
        </Link>
        <Link
          href="https://github.com/Suleyman1406/PatikaFrontEndProject1"
          target="_blank"
        >
          <AiFillCode className={Styles.icon} />
        </Link>
        <Text href="https://dadashow.netlify.app/">
          Designed & Built by <br />{" "}
          <span style={{ fontSize: "1rem" }}>Suleyman Dadashov</span>
        </Text>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
