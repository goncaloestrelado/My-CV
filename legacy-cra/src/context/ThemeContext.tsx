import React, { createContext, useState } from "react";

interface ThemeContextType {
  lightMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  lightMode: true,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [lightMode, setTheme] = useState<ThemeContextType["lightMode"]>(true);

  const toggleTheme = () => {
    setTheme(!lightMode);
  };

  const value = { lightMode, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
