"use client";

import { clsx } from "clsx";
import { Header } from "../Header";
import { useTheme } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export function Layout({ children, showHeader = true }: LayoutProps) {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const backgroundStyle = isDark
    ? {
        background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/block-texture.gif')",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }
    : {
        background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('/images/block-texture-white.gif')",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      };

  return (
    <section
      style={backgroundStyle}
      className={clsx(
        "min-h-screen w-full overflow-y-auto overflow-x-hidden flex flex-col",
        isDark ? "text-white" : "text-black"
      )}
    >
      {showHeader && <Header />}
      <main
        className={clsx(
          "flex-1 flex justify-center items-center w-full",
          showHeader ? "min-h-[calc(100vh-5rem)]" : "min-h-screen"
        )}
      >
        {children}
      </main>
    </section>
  );
}
