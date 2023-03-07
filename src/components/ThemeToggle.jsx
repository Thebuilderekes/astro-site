import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // const body = document.body;
    // const sectionBody = document.querySelector('section');
    const heroSection = document.querySelector('.hero-section');
    const mainHeading = document.querySelector('h1');
    const introText = document.querySelector('.small-text');
    const subHeading = document.querySelector('h2');
    const paragraphText = document.querySelector('p');
    const toggle = document.querySelector('.toggle-inner');

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if (darkMode === true) {
      // body.classList.add('dark-mode');
      // sectionBody.classList.add('dark-mode');

      heroSection.classList.add('dark-mode', 'dark-mode-text');

      mainHeading.classList.add('dark-mode-text');
      subHeading.classList.add('dark-mode-text');
      introText.classList.add('dark-mode-text');
      paragraphText.classList.add('dark-mode-text');
      toggle.classList.add('toggle-active');
    } else {
      // body.classList.remove('dark-mode');
      // sectionBody.classList.remove('dark-mode', 'dark-mode-text');
      heroSection.classList.remove('dark-mode');

      mainHeading.classList.remove('dark-mode-text');
      introText.classList.remove('dark-mode-text');
      paragraphText.classList.remove('dark-mode-text');
      subHeading.classList.remove('dark-mode-text');

      toggle.classList.remove('toggle-active');
    }
  }, [darkMode]);
  return (
    <div
      id="toggle"
      onClick={() =>
        darkMode === false ? setDarkMode(true) : setDarkMode(false)
      }
    >
      <div className="toggle-inner" />
    </div>
  );
}
