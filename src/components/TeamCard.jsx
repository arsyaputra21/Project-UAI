import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const CardStyled = styled.div`
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.txt-box {
    text-align: center;
    h4 {
      font-size: 1.5rem;
      font-family: "Playfair Display", serif;
    }
    p.role {
      font-weight: bold;
      color: #333;
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
      color: rgb(130, 130, 130);
    }
    div.team-social {
      padding: 1rem 0 0;
      font-size: 1.3rem;
      a {
        padding: 0 0.5rem;
        color: inherit;
        text-decoration: none;
      }
    }
  }
  div.img-box {
    transform: scale(0.8);
    img {
      max-width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    div.txt-box {
      h4 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

const TeamCard = ({ avatar, name, role, linkedin, instagram }) => {
  return (
    <CardStyled>
      <div className="img-box">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="txt-box">
        <h4>{name}</h4>
        <p className="role">{role}</p>

        <div className="team-social">
          <a target="_blank" href={linkedin}>
            <FaLinkedin />
          </a>
          <a target="_blank" href={instagram}>
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </CardStyled>
  );
};

export default TeamCard;
