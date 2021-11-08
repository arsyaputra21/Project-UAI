import React from "react";
import styled from "styled-components";
import Button from "../Button";

import landingBG from "../../images/landingpagebg.webp";
const LandingStyled = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-image: url(${landingBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 300px;

  div.landing-text {
    h1 {
      font-size: 4rem;
      font-weight: 900;
      padding: 1rem;
    }

    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: 60%;
    width: 50vw;
    background: linear-gradient(
      91.1deg,
      rgba(244, 246, 245, 0.9) -7.89%,
      rgba(255, 255, 255, 0.9) 132.55%
    );
    div.btn-box {
      align-self: flex-end;
      padding: 1rem;
    }
  }
  div.landing-bg {
    top: 0;
    position: absolute;
    z-index: -1;
    height: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 991px) {
    background-position-x: 0px;
    div.landing-text {
      width: 100%;
      align-items: center;

      h1 {
        font-size: 3.4rem;
      }

      div.btn-box {
        align-self: center;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div.landing-text {
      text-align: center;
      flex-direction: column;
      gap: 0;
      h1 {
        font-size: 2rem;
      }
      div.btn-box {
        transform: scale(0.8);
      }
    }
  }
`;
const LandingPage = () => {
  return (
    <LandingStyled>
      <div className="landing-text" data-aos="fade-right">
        <h1>Fulfilling All Your Coconut Needs</h1>
        <div className="btn-box">
          <Button href="/about">Learn More</Button>
        </div>
      </div>
    </LandingStyled>
  );
};

export default LandingPage;
