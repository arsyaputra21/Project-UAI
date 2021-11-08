import React from "react";
import styled from "styled-components";
import BenedictusAdriel from "../../images/BenedictusAdrielAbout.png";
import BryanFarrel from "../../images/BryanFarrelAbout.png";

const GoalStyled = styled.div`
  padding: 3rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  div.goal {
    background: rgba(215, 215, 215, 0.29);
    border-radius: 12px;
    box-shadow: 5px 5px 10px #888888;
    padding: 2rem;
    display: flex;
    align-items: center;
    div.avatar {
      flex: 1;
      text-align: center;
      img {
        width: 100%;
      }

      h4 {
        font-size: 1.4rem;
      }
      p {
        font-weight: 700;
      }
    }
    div.text {
      flex: 2;
      font-size: 1.6rem;
      font-family: "Playfair Display", serif;
    }
  }
  div.goal1 {
    div.text {
      text-align: left;
    }
  }
  div.goal2 {
    flex-direction: row-reverse;
    div.text {
      text-align: right;
    }
  }
  @media (max-width: 768px) {
    div.goal {
      flex-direction: column;
      div.avatar {
        width: 70%;
      }
      div.text {
        text-align: center;
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 400px) {
    padding: 1rem;
    padding-bottom: 3rem;
    div.goal {
      div.text {
        font-size: 1rem;
      }
    }
  }
`;
const GoalSection = () => {
  return (
    <GoalStyled>
      <h1>Our Goals</h1>
      <div className="goal goal1" data-aos="zoom-in-right">
        <div className="avatar">
          <img src={BenedictusAdriel} alt="Benedictus Adriel" />
          <h4>Benedictus Adriel</h4>
          <p>Founder</p>
        </div>
        <div className="text">
          <p>
            “I built this company with the hope that we can take advantage of
            Indonesia’s abundant natural resources,help the local community to
            have a better life,and also introduce that Indonesian coconut is one
            of the best in the world.”
          </p>
        </div>
      </div>
      <div className="goal goal2" data-aos="zoom-in-left">
        <div className="avatar">
          <img src={BryanFarrel} alt="Benedictus Adriel" />
          <h4>Bryan Farrel</h4>
          <p>Co-Founder</p>
        </div>
        <div className="text">
          <p>
            " I dedicate myself to contribute in making Indonesian society and
            country more advanced. And through PT Universal Agrobisnis ndonesia,
            we hope that we can make a real contribution to helping farmers in
            several cities in Indonesia to improve their standard of living, and
            try as much as possible to provide the best service and coconut
            products to buyers from other countries. "
          </p>
        </div>
      </div>
    </GoalStyled>
  );
};

export default GoalSection;
