import React from "react";
import styled from "styled-components";

const MapStyled = styled.div`
  div.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 341px;
    width: 100%;

    iframe {
      width: 100%;
      height: 341px;
    }
  }
  div.mapouter {
    position: relative;
    text-align: right;
    height: 341px;
    width: 100%;
  }

  @media (max-width: 500px) {
    div.mapouter,
    div.gmap_canvas,
    iframe {
      height: 250px;
    }
  }
`;
const GoogleMap = () => {
  return (
    <div>
      <MapStyled className="mapouter">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Tri%20Cipta%20Solusi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <a href="https://fmovies-online.net"></a>
            <br />
            <a href="https://www.embedgooglemap.net"></a>
          </div>
        </div>
      </MapStyled>
    </div>
  );
};

export default GoogleMap;
