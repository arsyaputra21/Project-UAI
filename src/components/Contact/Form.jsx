import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const FormStyled = styled.div`
  padding: 1rem;

  div.form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0;
    input:focus,
    textarea:focus {
      outline: none;
    }
    input,
    textarea {
      color: #f5f5f5;
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      border: 1px #f5f5f5 solid;
      border-radius: 10px;
      min-height: 50px;
      background-color: rgba(0, 0, 0, 0);
      transition: 0.3s all ease-in-out;
      &:focus {
        border: 1px #677d51 solid;
      }
    }
    textarea {
      resize: vertical;

      font-size: 0.9rem;
    }
    input.submit-btn {
      border: 2px solid #bfc9a2;
      transition: 0.3s all ease-in-out;
      font-weight: bold;
      &:hover {
        border: 2px solid #677d51;
        background-color: #b5b5b5;
        color: #000;
      }
    }
  }
`;

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_Service_Key,
        process.env.REACT_APP_Template_Key,
        form.current,
        process.env.REACT_APP_User_Key
      )
      .then(
        (result) => {
          window.alert("OK : Email sent.");
          e.target.reset();
        },
        (error) => {
          window.alert("Error : Email not send yet.");
        }
      );
  };
  return (
    <FormStyled>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" required />
        </div>
        <div className="form-group">
          <input className="submit-btn" type="submit" value="SUBMIT" />
        </div>
      </form>
    </FormStyled>
  );
};

export default Form;
