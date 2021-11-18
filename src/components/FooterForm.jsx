import React from "react";
import styled from "styled-components";
import logo from "../images/logo-uai.webp";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import GoogleMap from "./GoogleMap";
import Form from "./Contact/Form";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";

const FooterStyled = styled.div`
  padding-top: 1rem;
  background-color: #2e2f32;
  color: #fff;
  h1 {
    font-family: "Inter", sans-serif;
    text-align: center;
  }
  div.contact {
    display: flex;
    padding: 1rem 2rem;
    justify-content: center;
    div.form {
      flex: 1;
    }
    div.contact-data {
      flex: 1;
      padding: 1rem;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: start;
      p {
        padding: 1rem 0;
        font-size: 1.4rem;
        line-height: 1.5;
      }
      div.logo {
        padding: 1rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        div.logo-box {
          width: 40%;
          img {
            width: 100%;
            max-height: 100%;
            height: auto;
          }
        }
        h1 {
          font-family: "Inter", sans-serif;
          font-size: 1.6rem;
        }
      }
    }
  }
  div.map-container {
    padding: 3rem 3rem 1rem;
  }
  div.social-link {
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 1rem 0;
    a {
      color: inherit;
    }
  }
  div.copyright {
    background-color: black;
    font-size: 0.8rem;
    padding: 0.5rem 0;
    text-align: center;
  }

  @media (max-width: 800px) {
    div.map-container {
      padding: 2rem 1.5rem;
    }
    div.contact {
      flex-direction: column;
      div.contact-data {
        div.logo {
          div.logo-box {
            width: 30%;
          }
        }
      }
    }
  }

  @media (max-width: 550px) {
    div.contact {
      flex-direction: column;
      padding: 0;
      div.contact-data {
        p {
          font-size: 1.1rem;
          padding: 0.5rem 0;
        }
        div.logo {
          h1 {
            font-size: 1.3rem;
          }
        }
      }
    }
    div.social-link {
      font-size: 2rem;
    }
  }
`;

const FooterForm = () => {
  return (
    <FooterStyled>
      <h1>Contact Us</h1>
      <div className="map-container">
        <GoogleMap />
      </div>
      <div className="contact">
        <div className="form">
          <Form />
        </div>
        <div className="contact-data">
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
          <div className="logo">
            <div className="logo-box">
              <img src={logo} alt="UAI logo" />
            </div>
            <h1>PT Universal Agrobisnis Indonesia</h1>
          </div>
        </div>
      </div>
      <div className="social-link">
        <a target="_blank" href="https://www.instagram.com/universalagro.ind/">
          <BsInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/pt-universal-agrobisnis-indonesia/about/"
        >
          <BsLinkedin />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/UniversalAgrobisnisIndonesia/"
        >
          <BsFacebook />
        </a>
      </div>
      <div className="copyright">
        <p>Copyright Universal Agrobisnis Indonesia 2021</p>
      </div>
    </FooterStyled>
  );
};

export default FooterForm;
