  const element = document.documentElement;
  const mainHeading = document.querySelector('h1');
  const subHeading = document.querySelector('h2');
  const paragraphText = document.querySelector('p');
  const portfolioSection = document.querySelector('.portfolio');
  const toggleButton = document.getElementById('ThemeSwitcher');
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  })();

  if (theme === 'light') {

      document.documentElement.classList.add('dark');
    mainHeading.classList.add('dark');
    subHeading.classList.add('dark');
    paragraphText.classList.add('dark');
    portfolioSection.classList.add('dark');
   

  } else {
   document.documentElement.classList.remove('dark');
    mainHeading.classList.remove('dark');
    subHeading.classList.remove('dark');
    paragraphText.classList.remove('dark');
    portfolioSection.classList.remove('dark');

  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    const toggleItems = [element, mainHeading, subHeading, paragraphText, portfolioSection ];
    toggleItems.map(item => {
      item.classList.toggle('dark');
    });
 
    const isDark = element.classList.contains('dark');
    const isMainHeadingDark = mainHeading.classList.contains('dark');
    const isSubHeadingDark = subHeading.classList.contains('dark');
    const isParagraphDark = paragraphText.classList.contains('dark');
    const isPortfolioSectionDark = portfolioSection.classList.contains('dark')
    localStorage.setItem(
      'theme',
      isDark &&
        isMainHeadingDark &&
        isSubHeadingDark &&
        isParagraphDark && isPortfolioSectionDark 
        ? 'dark'
        : 'light'
    );
  };

  toggleButton.addEventListener('click', handleToggleClick);