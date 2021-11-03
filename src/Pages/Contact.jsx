import React from "react";
import styled from "styled-components";

const ContactStyled = styled.div`
  background-color: #2e2f32;
  text-align: center;
  color: #fff;
  h1 {
    padding-top: 2rem;
    font-family: "Inter", sans-serif;
  }
`;

const Contact = () => {
  return (
    <ContactStyled>
      <h1>Get In Touch</h1>
    </ContactStyled>
  );
};

export default Contact;
