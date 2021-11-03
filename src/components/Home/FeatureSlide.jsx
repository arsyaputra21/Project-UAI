import React from "react";
import styled from "styled-components";

const SlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 2rem 2rem;
  margin: 0 1rem;
  backdrop-filter: blur(10px) saturate(170%);
  -webkit-backdrop-filter: blur(10px) saturate(170%);
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(209, 213, 219, 0.3);

  div.initial {
    font-family: "Monoton", cursive;
    font-weight: bold;
    font-size: 5rem;
    color: #3c4f49;
  }
  div.text-desc {
    h3 {
      color: #3c4f49;
      font-size: 1.688;
    }
    p {
      font-family: "Playfair Display", serif;
      font-size: 1rem;
    }
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    margin: 0 3rem;
  }
`;

const FeatureSlide = ({ logo, title, desc }) => {
  return (
    <SlideStyled>
      <div className="initial">{logo}</div>
      <div className="text-desc">
        <h3>{title} </h3>
        {/* <p>{desc}</p> */}
      </div>
    </SlideStyled>
  );
};

export default FeatureSlide;
