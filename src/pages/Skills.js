import React from "react";
import styled from "styled-components";
import SectionTitle from "../Components/SectionTitle";
import SkillPage from "../Components/SkillsPage";
import SaumilSkills from "../assets/data/Skills.data";
const SkillsStyles = styled.div`
  padding: 10rem 0;
`;
export default function Skills() {
  return (
    <SkillsStyles>
      <div className="container">
        <SectionTitle heading="Skills" subheading="My Expertise Skills" />
        <div className="about__skills__items">
          <div className="about__skill__item">
            <SkillPage
              title={SaumilSkills.at(0).title}
              mySkills={SaumilSkills.at(0).skills}
            />
            <SkillPage
              title={SaumilSkills.at(1).title}
              mySkills={SaumilSkills.at(1).skills}
            />
            <SkillPage
              title={SaumilSkills.at(2).title}
              mySkills={SaumilSkills.at(2).skills}
            />
            <SkillPage
              title={SaumilSkills.at(3).title}
              mySkills={SaumilSkills.at(3).skills}
            />
          </div>
        </div>
      </div>
    </SkillsStyles>
  );
}
