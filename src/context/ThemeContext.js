import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for the theme mode
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  // Get the initial theme from localStorage or default to light
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode("light");
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode); // Save to localStorage
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
