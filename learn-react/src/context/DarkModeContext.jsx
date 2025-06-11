import {createContext, useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DarkModeContext = createContext({});

export const DarkModeProvider = ({ children, initDarkMode = true }) => {

  const [darkMode, setDarkMode] = useState(initDarkMode);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}