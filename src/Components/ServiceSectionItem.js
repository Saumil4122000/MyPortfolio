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



export default function ServiceSectionItem({icon=<MdDesktopMac />,title="Web Design",content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam indoloremque quas, facilis aliquam id inventore, libero nobisreprehenderit excepturi eius error. Aspernatur non quos odio cumque vitae fuga eaque?"}) {
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
