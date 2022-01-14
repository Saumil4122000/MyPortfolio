import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
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
    .toast{
      padding:10px 20px;
      background-color:#03a9f4;
      color: var(--black);
      font-size:18px;
      box-shadow:0px 24px 38px 3px rgba(0,0,0,0.14) , 0px 9px 46px 8px rgba(0,0,0,0.12) , 0px 11px 15px -7px rgba(0,0,0,0.2) 
      display:inline-block;
      outline:none;
      transition:transform ease-in-out 0.2s;
      margin-top:10px;
      border:none;
      border-radius:8px;
    }

    @media only screen and (max-width:768px){
        .toast{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          margin-left:150px;
          background-color:#03a9f4;
          color: var(--black);
          font-size:18px;
          box-shadow:0px 24px 38px 3px rgba(0,0,0,0.14) , 0px 9px 46px 8px rgba(0,0,0,0.12) , 0px 11px 15px -7px rgba(0,0,0,0.2) 
          transition:transform ease-in-out 0.2s;
        }
    }
`;

function displaybtn(e) {
  e.preventDefault();
  var myobj = document.getElementById("btnSubmit");
  myobj.remove();
  var div = document.createElement("div");
  let element = document.getElementById("form__tag");
  let toastTimer;
  element.appendChild(div);
  div.id = "container";
  div.innerHTML = "Mail Send Successfully";
  div.className = "toast";
  div.style.transform = "translate(-50%,0)";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    div.remove();
  }, 2000);
}
function clear__data() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_myhhtbf",
      "template_4evl1rs",
      e.target,
      "user_QtqAZhaDg0um9wAXfNHhw"
    )
    .then((res) => {
      var myobj = document.getElementById("btnSubmit");
      myobj.remove();
      var div = document.createElement("div");
      let element = document.getElementById("form__tag");
      let toastTimer;
      element.appendChild(div);
      div.id = "container";
      div.innerHTML = "Mail Send Successfully";
      div.className = "toast";
      div.style.transform = "translate(-50%,0)";
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        div.remove();
      }, 2000);
      clear__data();
    })
    .catch((err) => {
      var div = document.createElement("div");
      let element = document.getElementById("form__tag");
      element.appendChild(div);
      div.id = "container";
      div.innerHTML = "Failed Try to Refresh Page";
      div.className = "toast";
      div.style.backgroundColor = "red";
      div.style.transform = "translate(-50%,0)";
      let toastTimer;
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        div.remove();
      }, 2000);
      console.log(err);
    });
}

export default function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  return (
    <FormStyle>
      <form
        id="form__tag"
        onSubmit={sendEmail}
      >
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
        <button type="submit" id="btnSubmit">
          Submit
        </button>
      </form>
    </FormStyle>
  );
}
