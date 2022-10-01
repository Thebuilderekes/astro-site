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
            <a href="#" className = "logo">LOGO</a>
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

            <button className="btn" onClick={handleClick}>
              {!navb ? (
                <img className ="menu-btn" src ="/src/assets/img/icons8-close-30.png" alt = "close menu icon"
                />
              ) : (
                <img className ="menu-btn" src ="/src/assets/img/icons8-menu-30.png" alt="hamburger icon"/>

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

