import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
    width:100%;
    .from__group{
        width:100%;
        margin-bottom:2rem;
    }
    label{
        font-size:1.8rem;
    }
    input,textarea{
        width:100%;
        font-size:2rem;
        padding:1.2rem;
        color:var(--gray-1);
        background-color:var(--deep-dark);
        outline:none;
        border:none;
        border-radius:8px;
        margin-top:1rem;
    }
    textarea{
        min-height:250px;
        resize:vertical:
    }
    button[type='submit']{
        background-color:var(--gray-1);
        color:var(--black);
        font-size:2rem;
        display:inline-block;
        outline:none;
        border:none;
        padding:1rem 4rem;
        border-radius:8px;
        cursor:pointer;
    }
`;

export default function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  return (
    <FormStyle>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            Your Message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormStyle>
  );
}
