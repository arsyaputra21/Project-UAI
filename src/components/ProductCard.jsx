import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 1rem;
  border: 2px solid #000;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 4px solid #708659;
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  div.img-box {
    cursor: pointer;
    img {
      width: 100%;
      height: auto;
    }
  }
  div.text-box {
    text-align: center;
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #3c4f49;
    }
    p {
      font-family: "Playfair Display", serif;
      span.read-more {
        font-weight: bold;
        text-decoration: none;
        color: inherit;
      }
    }
  }
  @media (max-width: 500px) {
    transform: scale(0.9);
  }
`;

const ProductCard = ({ img, title, desc, link }) => {
  return (
    <CardStyled>
      <a href={link}>
        <div className="img-box">
          <img src={img} alt={title} data-aos="zoom-in" />
        </div>

        <div className="text-box">
          <h3>{title}</h3>
          <p>
            {`${desc.substring(0, 100)} ...`}{" "}
            <span className="read-more">Read More</span>
          </p>
        </div>
      </a>
    </CardStyled>
  );
};

export default ProductCard;
