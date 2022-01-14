import React from "react";
import styled from "styled-components";
import SectionTitle from "../Components/SectionTitle";
import ContactInfo from "./ContactInfo";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";
const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper{
      display:flex;
      gap:5rem;
      margin-top:7rem;
      justify-content:space-between;
      position:relative;
  }
  .contactSection__wrapper::after{
      position:absolute;
      content:'';
      width:2px;
      height:50%;
      background-color:var(--gray-1);
      left:50%;
      top:30%;
      transform:translate(-50%,-50%);
  }
  .left{
      width:100%;
      max-width:500px;
  }
  .right{
      max-width:500px;
      width:100%;
  }
  @media only screen and (max-width:768px){
    .contactSection__wrapper{
        flex-direction:column;
    }
    .contactSection__wrapper::after{
        display:none;
    }

    .left,.right{
        max-width:100%;
    }
    .right{
        padding:4rem 2rem 2rem 4rem;
    }
  }
`;
export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in Touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a href="tel:+91-8320012687" target="_blank" rel="noreferrer">
              <ContactInfo icon={<MdLocalPhone />} text="+91-8320012687" />
            </a>
            <a href="mailto:saumil715@gmail.com" target="_blank" rel="noreferrer">
              <ContactInfo icon={<MdEmail />} text="saumil715@gmail.com" />
            </a>
            <a href="https://goo.gl/maps/yfMGmxK6MR5NdXWu5" target="_blank" rel="noreferrer">
              <ContactInfo text="Ahmedabad,India" />
            </a>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}