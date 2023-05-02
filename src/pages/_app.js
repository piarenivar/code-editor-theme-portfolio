import '@/styles/globals.css';
import '@/styles/icons.css';
import '@/styles/dark-theme.css';

import { useEffect, useState } from 'react'
import Content from '@/components/global/Content';
import Header from '@/components/global/Header';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const htmlTag = document.getElementsByTagName('html')[0];
    if (theme === 'light') {
      htmlTag.classList.remove('dark-theme');
    } else {
      htmlTag.classList.add('dark-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <Header />
      <Content />
      <Component {...pageProps} theme={theme} />
    </>
  )
}
