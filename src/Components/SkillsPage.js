import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
const SkillsStyles = styled.div`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
  h1{
      margin-bottom:1.7rem;
  }
  .title {
    font-size: 2.4rem;
    margin-top:15px;
    margin-bottom:15px;
  }
  @media only screen and (max-width: 768px) {
    .skills {
      display: flex;
      flex-direction: column;
    }
    .title {
        font-size: 2.6rem;
        margin-bottom:15px;
        margin-top:15px;
      }
  }
`;
export default function Skills({
    title,
    mySkills,
  }) {

  return (
    <SkillsStyles>
      <h1 className="title">{title}</h1>
      <div className="skills">
        {mySkills.map((skill, index) => {
          return (
            <ProgressBar
              title={skill.name}
              width={skill.width}
              text={skill.width}
            />
          );
        })}
      </div>
    </SkillsStyles>
  );
}
