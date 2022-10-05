import React from "react";
import { useState } from "react";
import "../css/navigation.css";

export default function Navigation() {
  const [navb, setNavb] = useState(true);
  const handleClick = () => setNavb(!navb);
  const [click, setClick] = useState(true);
  const handleMenu = () => setNavb(!navb);

  return (
    <header className="header">
        <div className="nav-container">
            <a href="#" className = "logo">EB</a>
            <nav className="desktop-nav nav">
                  <div className="desktop-navItems">
                        <a className="desktop-navLink" href="/">
                          Home
                        </a>
                        <a className="desktop-navLink" href="/about">
                          About
                        </a>
                        <a className="desktop-navLink" href="index.html#skills">
                        Skills
                      </a>
                        <a className="desktop-navLink" href="index.html#portfolio">
                          Portfolio
                        </a>
                        <a className="desktop-navLink" href="index.html#footer">
                          Contact
                        </a>
                  </div>
          </nav>

            <button className="btn"  role="navigation" aria-label="main" onClick={handleClick}>
              {!navb ? (
               <img src="/assets/img/close-icon.png" alt= "close navigation icon" />
              ) : (
                 
                <img src="/assets/img/hamburger-icon.png" alt= "open navigation icon" />
              )}
            </button>
          </div>

          <nav className="mobile-nav nav">
              <div
                className={!navb || !click ? "display-mobile-nav" : "display-none"}
              >
                <a className="mobile-navLink" onClick={handleMenu} href="/">
                  Home
                </a>
                <a className="mobile-navLink" onClick={handleMenu} href="index.html#skills">
                  Skills
                </a>
                <a className="mobile-navLink" onClick={handleMenu} href="/about">
                  About
                </a>
                <a className="mobile-navLink" onClick={handleMenu} href="index.html#portfolio">
                  Portfolio
                </a>
                <a className="mobile-navLink" onClick={handleMenu} href="index.html#footer">
                  Contact
                </a>
              </div>
          </nav>
    </header>
  );
}

//how to create a responsive navbar in react?

