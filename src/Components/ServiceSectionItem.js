import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyled=styled.div`
    text-align:center;
    .servicesItem__icon{
        svg{
            width:3rem;
        }
    }
    .serviceItem__title
    {
        font-size:2.5rem;
        font-family:'Montserrat Semibold';   
    }
    .para{
        margin-top:2rem;
    }
`;



export default function ServiceSectionItem({icon=<MdDesktopMac />,title="Web Design",content=" I am interested in web Design using Figma,Photoshop,Canva,Wix and Photoshop."}) {
  return (
    <ItemStyled>
      <div className="servicesItem__icon">
        {icon}
        <div className="serviceItem__title">{title}</div>
        <PText>
         {content}
        </PText>

      </div>
    </ItemStyled>
  );
}
