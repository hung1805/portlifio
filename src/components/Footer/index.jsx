import { Container } from "GlobalStyled";
import React from "react";
import { Paragraph } from "./StyledFooter";

const Footer = () => {
  return (
    <Container>
      <Paragraph>
        Copyright &copy; by <a href="https://github.com/">Me</a>.&nbsp; All right
        reversed.
      </Paragraph>
    </Container>
  );
};

export default Footer;
