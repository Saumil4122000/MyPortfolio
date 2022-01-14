import React from "react";
import styled from "styled-components";

const ProgressBarStyles = styled.div`
  background-color: var(--deep-dark);
  padding: 1rem;
  border-radius: 8px;
  h2{
    padding-bottom:1.5rem;
    font-size:20px;
   }
  .progress-bar {
    display: flex;
    align-items: center;
  }
    p {
      padding-right: 1.1rem;
      font-size:14px;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      display:block;
      background-color: var(--border-color);
      animation: progress 1500ms ease-in 1;
    }

    .progress__span {
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #30ff00;
      display:block;
      height:100%;
    }
    @keyframes progress{
      from{
        width:0;
      }
    }
`;
export default function ProgressBar({ title, width, text }) {
  return (
    <ProgressBarStyles>
      <div className="container">
        <h2>{title}</h2>
        <div className="progress-bar">
          <p>{text}</p>
          <div className="progress">
            <span style={{ width: width }} className="progress__span"></span>
          </div>
        </div>
      </div>
    </ProgressBarStyles>
  );
}
