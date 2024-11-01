import { useState, useEffect } from "react";

import "../css/navigation.css";

export default function Navigation() {
  const form = "#form";
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  function handleNavToggleButton() {
    console.log("nav toggle working");
    setIsMobileNav(!isMobileNav);
  }
  const handleMenuToggle = () => setIsMobileNav(!isMobileNav);

  useEffect(() => {
    //function to hide navigation after scroll position is greater 2000px and display it again when scroll position is  less than 2000px
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 2000) {
        setPreviousScrollPosition(currentScrollPosition);
        setIsVisible(false);
      } else if (currentScrollPosition < 2000) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPosition]);

  return (
    <>
      {isVisible && (
        <header className="navbar header">
          <div className="nav-container">
            <div className="social-media-icons">
              <a
                className="top-icon-social"
                aria-label="visit github page"
                href="/"
                target="_blank"
              >
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

              <a href="https://www.linkedin.com/in/ekeopre-beredugo-204580111/">
                <svg
                  fill="#ffffff"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 310 310"
                  xml:space="preserve"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="XMLID_801_">
                      {" "}
                      <title>Linkedin</title>{" "}
                      <path
                        id="XMLID_802_"
                        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                      ></path>{" "}
                      <path
                        id="XMLID_803_"
                        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                      ></path>{" "}
                      <path
                        id="XMLID_804_"
                        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                      ></path>{" "}
                    </g>{" "}
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
                  <a className="desktop-navLink" href={form}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <button
              className="nav-toggler"
              role="navigation"
              aria-label="menu"
              onClick={handleNavToggleButton}
            >
              {isMobileNav ? (
                <img
                  src="/assets/img/close-icon.png"
                  alt="close navigation icon"
                />
              ) : (
                <img
                  src="/assets/img/hamburger-icon.png"
                  alt="open navigation icon"
                />
              )}
            </button>
          </div>

          {/* display mobile nav if isMobileNav is true else hide mobile nav */}
          {isMobileNav && (
            <nav className="mobile-nav nav">
              <ul className="display-mobile-nav">
                <li>
                  {" "}
                  <a
                    className="mobile-navLink"
                    onClick={handleMenuToggle}
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    className="mobile-navLink"
                    onClick={handleMenuToggle}
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="mobile-navLink"
                    onClick={handleMenuToggle}
                    href={form}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </header>
      )}
    </>
  );
}
