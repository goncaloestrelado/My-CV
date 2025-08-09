"use client";

import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export function Footer() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={
        isDark
          ? "fixed bottom-0 w-full z-10 bg-gradient-to-t from-black via-black/50 to-black/5"
          : "fixed bottom-0 w-full z-10 bg-gradient-to-t from-gray-500/0 via-gray-500/60 to-gray-500/85 text-black"
      }
    >
      <div className="flex justify-between items-end p-4">
        <span className="text-[0.6rem] min-[411px]:text-base">
          <span className={isDark ? "text-white" : "text-black"}>@{new Date().getFullYear()} - </span>
          <a
            href="https://www.linkedin.com/in/goncaloestrelado/"
            target="_blank"
            rel="noreferrer"
            className={isDark ? "text-white hover:underline" : "text-black hover:underline drop-shadow"}
          >
            Gonçalo Estrelado
          </a>
        </span>
        {pathname === "/contact" ? null : (
          <div className="flex items-center">
            <Link href="https://github.com/ST4R20RD/My-CV" target="_blank" rel="noreferrer">
              <FiGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/goncaloestrelado/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </Link>
            <Link href="mailto:goncalo.estrelado@hotmail.com">
              <FiMail />
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}

function Link({
  children,
  href,
  target,
  rel,
}: {
  children: React.ReactElement;
  href: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="flex items-center text-base min-[465px]:text-xl min-[465px]:p-2.5"
    >
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg" />
        <div className="px-4 py-2 rounded-md bg-slate-950 relative group transition duration-200 text-white hover:bg-transparent">
          <div className="text-white [&_svg]:text-white">{children}</div>
        </div>
      </button>
    </a>
  );
}
