import { useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Wrapper from './component/Wrapper';
import './App.css'

function App() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState('');
  console.log({ darkThemeMq })
  useEffect(() => {
    if (darkThemeMq) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [darkThemeMq])


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Wrapper />
    </ThemeContext.Provider>
  );
}

export default App;
