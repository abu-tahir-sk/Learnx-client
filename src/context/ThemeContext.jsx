import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  //   const [darkMode, setDarkMode] = useState(false);
  //   const toggleTheme = () => setDarkMode(!darkMode);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // toggle function
  const toggleTheme = () =>{
      setTheme(theme === "light" ? "dark" : "light")
  }

//   const info = {
//     //     toggleTheme,
//     //     darkMode,
//   };
const value = {theme,toggleTheme}
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
