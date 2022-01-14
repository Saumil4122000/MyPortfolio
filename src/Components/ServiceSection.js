import React from "react";
import styled from "styled-components";
import ServiceSectionItem from "./ServiceSectionItem";
import SectionTitle from "./SectionTitle";
import {MdCode,MdPhonelinkSetup} from 'react-icons/md'
const ServiceItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
export default function ServiceSection() {
  return (
    <ServiceItemStyles>
      <div className="containor">
        <SectionTitle
          heading="Experience"
          subheading="what i will do for you"
        />
        <div className="services__allItems">
          <ServiceSectionItem />
          <ServiceSectionItem icon={<MdCode/>} title="Web Dev" content="I have experience in building the website and also have good practice in building frontend and backend of website."/>
          <ServiceSectionItem icon={<MdPhonelinkSetup/>}  title="App Dev" content="App Devlopment is my passion. I have created moderate level of android application and learn many new things in Android app devlopment."/>
        </div>
      </div>
    </ServiceItemStyles>
  );
}
