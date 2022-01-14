import React from "react";
import MainImg from "../assets/images/main.jpg";
import Button from "./Button";
import PText from "./PText";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import styled from "styled-components";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
    }
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
      position: relative;
    }
    .hero__name::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0%;
      overflow: hidden;
      color: #01fe87;
      -webkit-text-stroke: 0vw #383d52;
      height: 100%;
      border-right: 2px solid #01fe87;
      animation: animate 3s linear infinite;
    }
    @keyframes animate {
      0%,
      100%,
      10% {
        width: 0%;
      }
      70%,
      90% {
        width: 100%;
      }
    }
  }
  .hero__img {
    max-width: 1000px;
    width: 100%;
    height: 700px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;

    // This is my addition
    .button {
      margin: 2.4rem;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
      padding: 3px;
    }
    .hero__info {
      margin-top: 3rem;
      padding: 4px;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
          margin-left: 5px;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            svg {
              width: 30px;
              margin-left: 5px;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="containor">
          <h1 className="hero__heading">
            <span style={{ width: "100%" }}>Hello This is Shah</span>
            <span className="hero__name" data-text="Saumil">
              Saumil
            </span>
          </h1>
          <div className="hero__img">
            <img src={MainImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              <div className="change_style" style={{ color: "#ffffff" }}>
                I am currently working as Software Engineer Intern at Crest Data
                System. I am android and web devloper with good experience and
                good problem solving skills.
              </div>
            </PText>
            <Button
              className="button"
              btnLink="/projects"
              btnText="This is my Work"
              outline={false}
            />
          </div>

          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>

            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/saumil-shah-270b2919a/"
                    rel="noreferrer"
                    className="icons"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://github.com/Saumil4122000"
                    rel="noreferrer"
                    className="icons"
                  >
                    <FaGithubSquare />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/saumil.shah.39750"
                    rel="noreferrer"
                    className="icons"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/saumil_shah313/"
                    rel="noreferrer"
                    className="icons"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
