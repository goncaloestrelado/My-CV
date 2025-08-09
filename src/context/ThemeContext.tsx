"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type ThemeMode = "dark" | "light";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  // Load persisted choice (or system preference) on mount
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        setTheme(stored);
      } else {
        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Persist when changed
  useEffect(() => {
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
    // Apply class to <html> for tailwind variants if needed later
    const root = document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const value: ThemeContextType = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
