import React from "react";
import styled from "styled-components";
import logo from "../images/logo-uai.webp";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import GoogleMap from "./GoogleMap";

const FooterStyled = styled.div`
  background-color: #2e2f32;
  color: #fff;

  div.map-container {
    padding: 3rem 3rem 1rem;
  }

  div.footer-container {
    display: flex;
    padding: 3rem;
    align-items: center;
    div.left-part {
      flex: 1;
      img {
        width: 30%;
      }
      h1 {
        font-family: "Inter", sans-serif;
        padding: 1rem 0;
      }
    }
    div.right-part {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      p {
        font-weight: 300;
        font-size: 1.5rem;
      }
    }
  }
  div.copyright {
    background-color: black;
    font-size: 0.8rem;
    padding: 0.5rem 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    div.map-container {
      padding: 2rem 1.5rem;
    }

    div.footer-container {
      padding: 1rem 2rem;
      flex-direction: column;

      div.left-part {
        text-align: center;
        h1 {
          text-align: start;
          font-size: 1.3rem;
        }
      }
      div.right-part {
        gap: 0.5rem;
        p {
          font-size: 1rem;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="map-container">
        <GoogleMap />
      </div>
      <div className="footer-container">
        <div className="left-part">
          <img src={logo} alt="UAI logo" />
          <h1>PT Universal Agrobisnis Indonesia</h1>
        </div>
        <div className="right-part">
          <p>
            <AiFillPhone /> +62 811 9444 283 (Benedictus Adriel)
          </p>
          <p>
            <MdEmail /> universalagrobisnis@gmail.com
          </p>
          <p>
            <MdLocationPin />
            Jl. Raya Abdullah Safe'i No.1 / Tebet Utara Dalam No.34, RT.5/RW.1,
            Tebet Tim., Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota
            Jakarta 12820
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright Universal Agrobisnis Indonesia 2021</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
