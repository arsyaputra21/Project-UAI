import React from "react";
import styled from "styled-components";
import img from "../../images/about-hero.webp";

const HeroStyled = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 80vh;
  padding: 2rem 3rem;
  background-image: url(${img});
  background-size: 60%;
  background-position: left;
  background-position-x: 3rem;

  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  div.dummy {
    width: 100%;
    flex: 1;
  }
  div.hero-text {
    display: flex;
    justify-content: center;

    flex-direction: column;
    flex: 2;
    padding: 2rem;
    h1 {
      font-size: 2rem;
      padding: 1rem 0;
    }
    p {
      font-size: 1.5rem;
    }
    background: linear-gradient(
      91.1deg,
      rgba(244, 246, 245, 0.7) -7.89%,
      rgba(255, 255, 255, 0.7) 132.55%
    );
  }
  @media (max-width: 900px) {
    background-size: cover;
    background-position-x: 0;
    flex-direction: column;
    margin: 0;
    div.dummy {
      display: none;
    }
    div.hero-text {
      padding: 2rem;
    }
  }

  @media (max-width: 600px) {
    div.hero-text {
      text-align: center;
      padding: 1rem;
      h1 {
        font-size: 1.3rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
const HeroSection = () => {
  return (
    <HeroStyled>
      <div className="dummy"></div>
      <div className="hero-text" data-aos="fade-left">
        <h1>PT Universal Agrobisnis Indonesia</h1>
        <p>
          is an Indonesian company engaged in the export of coconut derivative
          products,supplying processed coconut products. We provide the best and
          high quality coconut products from Indonesia for the whole world.
        </p>
      </div>
    </HeroStyled>
  );
};

export default HeroSection;
