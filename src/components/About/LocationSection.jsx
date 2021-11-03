import React from "react";
import styled from "styled-components";
import indonesiaMap from "../../images/Indonesia.webp";

const LocationStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem 3rem;
  div.map-img {
    flex: 2;
    img {
      width: 100%;
      height: auto;
    }
  }
  div.text {
    flex: 1;
    font-size: 2.75rem;
    font-weight: 200;
  }
  @media (max-width: 900px) {
    div.text {
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    div.text {
      text-align: center;
    }
  }
`;

const LocationSection = () => {
  return (
    <LocationStyled>
      <div className="map-img">
        <img src={indonesiaMap} alt="" />
      </div>
      <div className="text">
        We develop various coconut farmers from several cities in Indonesia
      </div>
    </LocationStyled>
  );
};

export default LocationSection;
