import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-items {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export const NavMenu = () => {
  const [showNav, setshowNav] = useState(false);

  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setshowNav(!showNav)}
        role="button"
        onKeyDown={() => setshowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? "navItems hide-items" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => setshowNav(!showNav)}
          role="button"
          onKeyDown={() => setshowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/Home"
            onClick={() => setshowNav(!showNav)}
            role="button"
            onKeyDown={() => setshowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setshowNav(!showNav)}
            role="button"
            onKeyDown={() => setshowNav(!showNav)}
            tabIndex={0}
          >
            Abouts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setshowNav(!showNav)}
            role="button"
            onKeyDown={() => setshowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            onClick={() => setshowNav(!showNav)}
            role="button"
            onKeyDown={() => setshowNav(!showNav)}
            tabIndex={0}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
};
