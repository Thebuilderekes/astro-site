const mainHeading = document.querySelector('h1');
  const subHeading = document.querySelector('h2');
  const paragraphText = document.querySelector('p');
  const footer = document.querySelector('.footer-attributes');
  const toggle = document.getElementById('themeToggle');
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  })();

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    mainHeading.classList.remove('dark');
    subHeading.classList.remove('dark');
    paragraphText.classList.remove('dark');
    footer.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    mainHeading.classList.add('dark');
    subHeading.classList.add('dark');
    paragraphText.classList.add('dark');
    footer.classList.remove('dark');
  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    // const section = document.querySelector('section');
    const element = document.documentElement;
    const toggleItems = [element, mainHeading, subHeading, paragraphText, footer];
    toggleItems.map(item => {
      item.classList.toggle('dark');
    });
    console.log('clicked');
  

    const isDark = element.classList.contains('dark');
    const isMainHeadingDark = mainHeading.classList.contains('dark');
    const isSubHeadingDark = subHeading.classList.contains('dark');
    const isParagraphDark = paragraphText.classList.contains('dark');
    const isFooterDark = paragraphText.classList.contains('dark');
    localStorage.setItem(
      'theme',
      isDark &&
        isMainHeadingDark &&
        isSubHeadingDark &&
        isParagraphDark &&
        isFooterDark
        ? 'dark'
        : 'light'
    );
  };

  toggle.addEventListener('click', handleToggleClick);