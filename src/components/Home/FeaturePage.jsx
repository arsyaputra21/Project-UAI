import React from "react";
import styled from "styled-components";
import SlickSlider from "../SlickSlider";

const FeatureStyled = styled.div`
  padding: 1rem 0 2rem;

  width: 100%;
  background-color: #f3f2e5;
  h1 {
    text-align: center;
    font-weight: 900;
    padding: 1rem 0 2rem;
  }
`;

const FeaturePage = () => {
  return (
    <FeatureStyled>
      <h1>Our Values</h1>
      <SlickSlider />
    </FeatureStyled>
  );
};

export default FeaturePage;
