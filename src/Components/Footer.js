import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__coll__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para{
        margin-left:0;
    }
  }

  @media only screen and (max-width:768px){
    .container{
        flex-direction:column;
        gap:0rem;
        & > div{
            // First div inside of container styling
            margin-top:5rem;
        }
    }
    .footer__col1,.para{
        max-width:100%;
    }
    .copyright{
        .container{
            div{
                margin-top:0;
            }
        }
    }
  }

`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__coll__title">Shah Saumil</h1>
          <PText>
            My name is Shah Saumil. I am tech enthusiastic always ready to explore different technologies.
            I am very passionate about coding.I am team player,motivator,self-learner.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            Links={[
              {
                type: "links",
                path: "/",
                title: "Home",
              },
              {
                type: "links",
                path: "/abouts",
                title: "About",
              },
              {
                type: "links",
                path: "/projects",
                title: "Projects",
              },
              {
                type: "links",
                path: "/contacts",
                title: "Contacts",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              {
                path: "tel:+91-8320012687",
                title: "Phone No",
              },
              {
                path: "mailto:saumil715@gmail.com",
                title: "Mail Me",
              },
              {
                path: "https://goo.gl/maps/yfMGmxK6MR5NdXWu5",
                title: "Ahmedabad,Gujarat,INDIA",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            Links={[
              {
                path: "https://www.linkedin.com/in/saumil-shah-270b2919a/",
                title: "LinkedIn",
              },
              {
                path: "https://github.com/Saumil4122000",
                title: "GitHub",
              },
              {
                path: "https://www.instagram.com/saumil_shah313/",
                title: "Instagram",
              },
              {
                path: "https://www.facebook.com/saumil.shah.39750",
                title: "Facebook",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText> Designed by Saumil Shah</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
