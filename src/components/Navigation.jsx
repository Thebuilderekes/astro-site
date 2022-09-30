import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/Ai";
import "../css/navigation.css";

export default function Navigation() {
  const [navb, setNavb] = useState(true);
  const handleClick = () => setNavb(!navb);
  const [click, setClick] = useState(true);
  const handleMenu = () => setNavb(!navb);

  return (
    <header className="header">
            <div className="container">
            <a href="#" className = "logo">LOGO</a>
            <nav className="desktop-nav nav">
                  <div className="desktop-navItems">
                        <a className="desktop-navLink" href="/">
                          Home
                        </a>
                        <a className="desktop-navLink" href="/about">
                          About
                        </a>
                        <a className="mobile-navLink" onClick={handleMenu} href="#skills">
                        Skills
                      </a>
                        <a className="desktop-navLink" href="#portfolio">
                          Portfolio
                        </a>
                        <a className="desktop-navLink" href="#footer">
                          Contact
                        </a>
                  </div>
          </nav>

            <button className="btn" onClick={handleClick}>
              {!navb ? (
                <AiOutlineClose
                  style={{ width: "30px", height: "30px", color: "#ffffff" }}
                />
              ) : (
                <AiOutlineMenu
                  style={{ width: "30px", height: "30px", color: "#ffffff" }}
                />
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
              <a className="mobile-navLink" onClick={handleMenu} href="#skills">
                Skills
              </a>
              <a className="mobile-navLink" onClick={handleMenu} href="/about">
                About
              </a>
              <a className="mobile-navLink" onClick={handleMenu} href="#portfolio">
                Portfolio
              </a>
              <a className="mobile-navLink" onClick={handleMenu} href="#footer">
                Contact
              </a>
            </div>
          </nav>
    </header>
  );
}

//how to create a responsive navbar in react?

