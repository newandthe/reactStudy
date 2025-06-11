import './AppTheme.css';
import HeaderTheme from './components/theme/Header.jsx';
import MainTheme from './components/theme/Main.jsx'
import FooterTheme from './components/theme/Footer.jsx'
import {useState} from "react";
function AppTheme() {

  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <HeaderTheme darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainTheme darkMode={darkMode} />
      <FooterTheme darkMode={darkMode} />
    </>
  );
}

export default AppTheme;