import { useState, useEffect } from "react";
import styled from "styled-components";
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
    <MenuContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </MenuButton>
      <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
    </MenuContainer>
  );
}
const MenuButton = styled.div``;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  ${MenuButton} {
    display: none;
  }
  @media (max-width: 425px) {
    ${MenuButton} {
      display: block;
      z-index: 10;
    }
  }
`;
