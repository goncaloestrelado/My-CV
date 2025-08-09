"use client";

import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import MenuItem from "./MenuItem";
import { useTheme } from "@/context/ThemeContext";

const LINKLIST = ["Projects", "About", "Contact"];

interface Props {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  isMobile: boolean;
}

export default function MenuItems({ isOpen, setIsOpen, isMobile }: Props) {
  const pathname = usePathname().slice(1);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={clsx(
        "flex items-center text-base lg:text-2xl xl:text-3xl",
        "max-[425px]:flex-col max-[425px]:justify-center max-[425px]:items-center max-[425px]:absolute max-[425px]:top-0 max-[425px]:right-0 max-[425px]:w-[80vw] max-[425px]:h-screen",
        isOpen
          ? "animate-[slideInRight_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_both]"
          : "animate-[slideOutRight_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_both]",
        isDark
          ? "max-[425px]:bg-gradient-to-r max-[425px]:from-transparent max-[425px]:via-gray-900/90 max-[425px]:to-gray-900 text-white"
          : "text-black max-[425px]:bg-gradient-to-r max-[425px]:from-transparent max-[425px]:via-gray-300/90 max-[425px]:to-gray-300"
      )}
    >
      {LINKLIST.filter((label) => {
        if (label.toLowerCase() === pathname) {
          return false;
        }
        return true;
      }).map((label, index) => {
        return (
          <MenuItem
            key={index}
            to={label.toLowerCase()}
            label={label}
            handleOpen={() => {
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          />
        );
      })}
    </div>
  );
}
