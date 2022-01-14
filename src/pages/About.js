import React from "react";
import PText from "../Components/PText";
import AboutImg from "../assets/images/main__3.jpg";
import styled from "styled-components";
import AboutInfoItem from "../Components/AboutInfoItem";
const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
    props.outline ? "transparent" : `var(--gray-1)`};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? `var(--gray-1)` : "black")};
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
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
            <h2 className="about__heading">A Software Engineer</h2>
            <div className="about__info">
              <PText>
                I am from Ahmedabad, Gujrat. A place known for history. I
                started coding since I was in high school. Coding is my passion.
                <br />
                <br />
                <br />
                I find it really interesting and I enjoyed coding a lot. My
                area of interest is app devlopment,Web devlopment. I am also
                interested in Machine Learning and Deep Learning.
                I have participated in many state level and college level hackathons.
                Also our team has qualified for final round of state level hackathon.
                <br />
                <br />
                <br />
                My hobbies are reading books,playing games,solving puzzles,know
                more about history and i always gain knowledge in chemistry. I
                always ready to learn new technologies. I am team player,motivator,self-learner.
                I have solved more than
                500 coding questions on different platform this is my
                achievements.
              </PText>
            </div>

            <a
              href="https://github.com/Saumil4122000/resume/raw/main/Saumil's%20Resume.pdf"
              className="button"
              download
            >
              Download CV
            </a>
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
            <h1 className="about__info__heading">Internships</h1>
            <div className="main__content">
              <AboutInfoItem
                title="Crest Data Systems"
                institute={["Software Engineer Intern"]}
                year="Jan-2021 To Present"
              />
              <AboutInfoItem
                title="Akash TechnoLabs"
                institute={["Android Devloper Intern"]}
                year="May-2021 To June-2021"
              />
              <AboutInfoItem
                title="BrainyBeams"
                institute={["Java Devloper Intern"]}
                year="May-2021 To June-2021"
              />
              <AboutInfoItem
                title="The Spark Foundation"
                institute={["Android Devloper Intern"]}
                year="Mar-2021 To April-2021"
              />
            </div>
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Certification</h1>
            <div className="main__content">
              <AboutInfoItem
                title="Jovian"
                institute={["Deep Learning"]}
                year="03-2021 To 05-2021"
                marks=""
              />
              <AboutInfoItem
                title="Jovian"
                institute={["Data Analysis"]}
                year="08-2020 To 10-2020"
                marks=""
              />
              <AboutInfoItem
                title="Udemy"
                institute={["React"]}
                year="07-2020 To 09-2020"
                marks=""
              />
              <AboutInfoItem
                title="Udacity"
                institute={["Android App devlopment"]}
                year="07-2020 To 08-2020"
                marks=""
              />
              <AboutInfoItem
                title="Udemy"
                institute={["HTML,CSS,JS"]}
                year="02-2020 To 03-2020"
                marks=""
              />
            </div>
          </div>
        </div>
      </div>
    </AboutPageStyle>
  );
}
