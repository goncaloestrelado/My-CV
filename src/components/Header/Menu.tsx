"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { FaBars } from "react-icons/fa";
import MenuItems from "./MenuItems";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="flex items-center">
      <div className="hidden max-[425px]:block z-10 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>
      <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
    </div>
  );
}
