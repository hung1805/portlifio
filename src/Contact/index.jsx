import { Container } from "GlobalStyled";
import React from "react";
import { FaPhone, FaAt, FaTelegram } from "react-icons/fa";
import { Element } from "react-scroll";
import { ContactContainer, ContactItem } from "./StyledContact";

const Contact = () => {
  return (
    <Element name="contact">
      <Container>
        <h2>Contact Me</h2>
        <p data-aos="zoom-out">
          If you have any questions, you can get in touch by the ways below
        </p>
        <ContactContainer>
          <ContactItem data-aos="fade-right">
            <FaPhone className="icon" />
            <h4>Phone</h4>
            <p>0766646234</p>
          </ContactItem>
          <ContactItem data-aos="zoom-in-up">
            <FaAt className="icon" />
            <h4>Email</h4>
            <p>dinhhung18052000@gmail.com</p>
          </ContactItem>
          <ContactItem data-aos="fade-left">
            <FaTelegram className="icon" />
            <h4>Address</h4>
            <p>Hoa Phuoc, Hoa Vang, Da Nang</p>
          </ContactItem>
        </ContactContainer>
      </Container>
    </Element>
  );
};

export default Contact;
