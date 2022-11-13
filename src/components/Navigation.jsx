import React from "react";
import { useState } from "react";

import "../css/navigation.css";

export default function Navigation() {
  const [navb, setNavb] = useState(true);
  const handleClick = () => setNavb(!navb);
  const [click, setClick] = useState(true);
  const handleMenu = () => setNavb(!navb);
  const footer = "#footer"
  return (
    <header className="header">
      <div className="nav-container">
        <div className="top-icons">
          <a href="https://github.com/Thebuilderekes" target="_blank">
            <svg
              xmlnsXlink="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              {" "}
              <title>GitHub</title>{" "}
              <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
                fill="#fff"
              />
            </svg>
          </a>

          <a href="https://twitter.com/iamthebuilder__" target="_blank">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 20 16"
              version="1.1"
              xmlnsXlink="http://www.w3.org/2000/svg"
            >
              <title>twitter</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g transform="translate(-60.000000, -7521.000000)" fill="#fff">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                      id="twitter-[#154]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <nav className="desktop-nav nav">
          <ul className="desktop-navItems">
            <li>
            <a className="desktop-navLink" href="/">
              Home
            </a>
              </li>
          <li>
          <a className="desktop-navLink" href="/about">
              About
            </a>
            </li> 
           <li>
           <a className="desktop-navLink" href="index.html#skills">
              Skills
            </a>
            </li> 
           <li>
           <a className="desktop-navLink" href="index.html#portfolio">
              Portfolio
            </a>
            </li> 
            <li>
            <a className="desktop-navLink" href={footer}>
              Contact
            </a>
            </li>
          </ul>
        </nav>

        <button
          className="btn"
          role="navigation"
          aria-label="menu"
          onClick={handleClick}
        >
          {!navb ? (
            <img src="/assets/img/close-icon.png" alt="close navigation icon" />
          ) : (
            <img
              src="/assets/img/hamburger-icon.png"
              alt="open navigation icon"
            />
          )}
        </button>
      </div>

      <nav className="mobile-nav nav">
        <ul
          className={!navb || !click ? "display-mobile-nav" : "display-none"}
        >
        <li> <a className="mobile-navLink" onClick={handleMenu} href="/">
            Home
          </a>
          </li> 

          <li> <a className="mobile-navLink" onClick={handleMenu} href="/about">
            About
          </a>
          </li>
      <li><a
            className="mobile-navLink"
            onClick={handleMenu}
            href="index.html#skills"
          >
            Skills
          </a>
          </li>
          <li>
          <a
                      className="mobile-navLink"
                      onClick={handleMenu}
                      href="index.html#portfolio"
                    >
                      Portfolio
                    </a>
          </li>
       <li>
       <a
            className="mobile-navLink"
            onClick={handleMenu}
            href={footer}
          >
            Contact
          </a>
       </li>
    
        </ul>
      </nav>
    </header>
  );
}

//how to create a responsive navbar in react?
