import React from "react";
import PText from "../Components/PText";
import Button from "../Components/Button";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import AboutInfoItem from "../Components/AboutInfoItem";
import AboutInfoNewItem from "../Components/AboutInfoNewItem";
import Skills from "../Components/Skills";

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .main__content {
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    gap: 100px;
    margin-left: 30px;
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .about__info__heading {
      font-size: 3rem;
      gap: 5rem;
    }
    .main__content {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .top-section {
      display: flex;
      flex-direction: column;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi I am <span>Shah Saumil</span>
            </p>
            <h2 className="about__heading">A FreeLancer Web Devloper</h2>
            <div className="about__info">
              <PText>
                I am from chittagong, Bangladesh. A place of beauty and nature.
                Since my childhood, i love art and design. I always try to
                design stuff with my unique point of view. I also love to create
                things that can be usefull to others.
                <br /> <br />
                I started coding since I was in high school. Coding is also an
                art for me. I love it and now I have the opportunity to design
                along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <div className="main__content">
              <AboutInfoItem
                title="College"
                institute={["L.D College of Engineering"]}
                year="2018-2022"
                marks="9.17 CGPA"
              />
              <AboutInfoItem
                title="12th Standard (GHSEB)"
                institute={["The H.B.Kapadia New High School"]}
                year="2017-2018"
                marks="80.16%"
              />
              <AboutInfoItem
                title="10th Standard (GSEB)"
                institute={["The H.B.Kapadia New High School"]}
                year="2015-2016"
                marks="86.66%"
              />
            </div>
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoNewItem
              title="FrontEnd"
              items={["HTML", "CSS", "JavaScript", "REACT"]} 
            />
            <AboutInfoNewItem
              title="BackEnd"
              items={["Node", "Express", "PHP"]}
            />
            <AboutInfoNewItem
              title="Design"
              items={["Photoshop", "After Effects", "Figma"]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>

            <AboutInfoNewItem
              title="2010-2012"
              items={["junior developer at web Cifar"]}
            />
            <AboutInfoNewItem
              title="2012-2016"
              items={["Front end developer at web Cifar "]}
            />
            <AboutInfoNewItem
              title="2016-"
              items={["Freelance web Developer"]}
            />
          </div>
        </div>
      </div>
    </AboutPageStyle>
  );
}
