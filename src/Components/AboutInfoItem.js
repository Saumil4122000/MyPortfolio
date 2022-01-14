import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;

  .title {
    font-size: 2.4rem;

  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }

  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    margin-left:150px;
    margin-bottom: 3px;
    border-radius: 8px;
    .para{
        padding-bottom:10px;
    }
  }



  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      margin-bottom: 3px;
      .item{
        margin-left:0px;
          .para{
            padding-bottom: 5px;
          }
      }
    }
    .title {
      font-size: 2rem;
    }
    
  }
`;

export default function AboutInfoItem({
  title = "College",
  institute = "L.D College of Engineering",
  year = "2018-2022",
  marks = "" 
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        <div className="item">
          <PText className="ptext">{institute}</PText>
          <PText className="ptext">{marks}</PText>
          <PText className="ptext">{year}</PText>
        </div>
      </div>
    </AboutItemStyles>
  );
}
