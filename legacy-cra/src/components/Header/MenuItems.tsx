import { useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const LINKLIST = ["Projects", "About", "Contact"];

interface Props {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  isMobile: boolean;
}

export default function MenuItems({ isOpen, setIsOpen, isMobile }: Props) {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  const { lightMode } = useContext(ThemeContext);

  return (
    <Container lightMode={lightMode} isOpen={isOpen}>
      {LINKLIST.filter((label) => {
        if (label.toLocaleLowerCase() === pathname) {
          return false;
        }
        return true;
      }).map((label) => {
        return (
          <MenuItem
            to={label.toLowerCase()}
            label={label}
            handleOpen={() => {
              isMobile && setIsOpen(false);
            }}
          />
        );
      })}
      {/* <Toggle checked={lightMode} onToggle={toggleTheme} /> */}
    </Container>
  );
}

const darkThemeStyles = css`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #191919e6, #191919, #191919, #191919);
`;

const lightThemeStyles = css`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #a3a3a3e6, #a3a3a3, #a3a3a3, #a3a3a3);
`;

const slideInRight = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const Container = styled.div<{ lightMode: boolean; isOpen: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1rem;
  ${(props) =>
    props.isOpen
      ? css`
          animation: ${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        `
      : css`
          animation: ${slideOutRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        `}
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 80vw;
    height: 100vh;
    ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  }
  @media (min-width: 990px) {
    font-size: 2rem;
  }
  @media (min-width: 1325px) {
    font-size: 3rem;
  }
`;
