import React from "react";
import styled from "styled-components";
import illustration from "../../images/about-us.webp";
import { Link } from "react-router-dom";
const AboutStyled = styled.div`
  overflow: hidden;
  padding: 3rem;
  display: flex;
  align-items: center;
  gap: 30px;
  div.img-box {
    flex: 2;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  div.text-box {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
      font-size: 3.188rem;
    }
    p {
      font-size: 1.9rem;
      font-family: "Playfair Display", serif;
    }
    a {
      text-decoration: none;
      font-weight: 700;
      color: #000;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 1.5rem;
    div.text-box {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.3rem;
      }
      a {
        font-size: 1.1rem;
      }
    }
  }
`;
const AboutSection = () => {
  return (
    <AboutStyled>
      <div className="img-box" data-aos="fade-right">
        <img src={illustration} alt="illustration" />
      </div>
      <div className="text-box" data-aos="fade-left">
        <h1>About Us</h1>
        <p>
          We are an Indonesian company that engaged in the export of coconut
          derivative products,supplying processed coconut products. We provide
          the best and high quality coconut products from Indonesia for the
          whole world.
        </p>
        <Link to="/about">Read more</Link>
      </div>
    </AboutStyled>
  );
};

export default AboutSection;
