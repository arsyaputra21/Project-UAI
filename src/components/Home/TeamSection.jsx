import React from "react";
import styled from "styled-components";
import TeamCard from "../TeamCard";
import { TeamData } from "../../Data";

const TeamStyled = styled.div`
  padding: 3rem;
  background-color: #eeeeee;
  h1 {
    font-size: 4rem;
  }
  div.team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
    h1 {
      font-size: 2rem;
    }
  } ;
`;

const TeamSection = () => {
  return (
    <TeamStyled>
      <h1>Our Teams</h1>
      <div className="team-container">
        {TeamData.map((member, idx) => {
          return (
            <TeamCard
              key={member.name}
              name={member.name}
              avatar={member.avatar}
              role={member.role}
              linkedin={member.linkedin}
              instagram={member.instagram}
            />
          );
        })}
      </div>
    </TeamStyled>
  );
};

export default TeamSection;
