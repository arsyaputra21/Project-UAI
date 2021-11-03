import React from "react";
import styled from "styled-components";
import Button from "../Button";

import landingBG from "../../images/landingpagebg.webp";
const LandingStyled = styled.div`
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
      font-size: 3.188rem;
      font-weight: 900;
    }
    p {
      font-size: 1.5rem;
      font-weight: 200;
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
    div.text-btn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.7rem;
      a {
        align-self: flex-end;
      }
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
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-evenly;
      h1 {
        font-size: 2.5rem;
      }

      div.text-btn {
        p {
          font-size: 1.3rem;
        }
        a {
          align-self: flex-start;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    div.landing-text {
      text-align: center;
      flex-direction: column;
      gap: 0;
      div.text-btn {
        justify-content: center;
        a {
          align-self: center;
        }
      }
    }
  }
`;
const LandingPage = () => {
  return (
    <LandingStyled>
      <div className="landing-text">
        <h1>Fulfilling All Your Coconut Needs</h1>
        <div className="text-btn">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            reiciendis odit temporibus praesentium inventore ullam unde nostrum,
            in accusamus rem.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </LandingStyled>
  );
};

export default LandingPage;
