import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.a`
  cursor: pointer;
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  color: #000;
  font-size: 1.5rem;
  padding: 10px 20px 10px 20px;
  border: solid #000000 3px;
  text-decoration: none;

  &:hover {
    background: rgba(15, 15, 15, 0.4);
    text-decoration: none;
    color: #fff;
    border: #151515;
  }
`;
const Button = (props) => {
  return <ButtonStyled role="button">{props.children}</ButtonStyled>;
};

export default Button;
