import { createContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ThemeContext = createContext();

function CustomThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontWeight: "800",
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      background: { paper: darkMode ? "#2c2c2c" : "#e3e3e3" },
      text: {
        highlighted: "#fff",
        time: "#fff",
      },
    },
  });

  useEffect(() => {
    const selectedTheme = JSON.parse(localStorage.getItem("darkMode"));
    if (selectedTheme !== null) setDarkMode(selectedTheme);
  }, []);

  const toggleTheme = () => {
    setDarkMode(darkMode ? false : true);
    localStorage.setItem("darkMode", darkMode ? false : true);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default CustomThemeProvider;
