"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

interface Props {
  to: string;
  label: string;
  handleOpen: () => void;
}

export default function MenuItem({ to, label, handleOpen }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Link
      href={`/${to}`}
      onClick={handleOpen}
      className={`mx-7 max-[425px]:text-6xl hover:underline hover:decoration-solid hover:decoration-[3px] ${
        isDark ? "text-white hover:decoration-white" : "text-black hover:decoration-black"
      }`}
    >
      <h1 className="font-anta font-light">{label}</h1>
    </Link>
  );
}
