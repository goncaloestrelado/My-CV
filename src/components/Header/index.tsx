"use client";

import Link from "next/link";
import { default as Menu } from "./Menu";
import { useTheme } from "@/context/ThemeContext";
import { ThemeSwitch } from "./ThemeSwitch";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <nav
      className={
        isDark
          ? "flex items-center justify-between h-20 px-5 sticky top-0 z-10 bg-gradient-to-b from-black/85 to-transparent text-white"
          : "flex items-center justify-between h-20 px-5 sticky top-0 z-10 bg-gradient-to-b from-gray-500/85 to-transparent text-black shadow-md"
      }
    >
      <Link
        href="/"
        className={
          isDark ? "text-base sm:text-2xl lg:text-4xl" : "text-base sm:text-2xl lg:text-4xl text-black drop-shadow"
        }
      >
        <h1 className="font-anta font-light leading-none">Gonçalo Estrelado</h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeSwitch checked={isDark} onChange={toggleTheme} />
        <Menu />
      </div>
    </nav>
  );
}
