import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DownloadCV } from "./DownloadCV";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  flipInHorBottom,
  puffOutCenter,
  slideInBottom,
  slideInLeft,
  slideInRight,
  swirlInFwd,
  trackingInContract,
} from "./animations";
import { darkThemeStyles, lightThemeStyles } from "./ThemeStyles";
import { Button } from "../../components/Button";

const LINKLIST = ["Projects", "About", "Contact"];

export function Home() {
  const { lightMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLinkClick = (to: string, index: number) => {
    const button = document.getElementById(`styledButton ${index}`);
    button?.classList.add("clicked");
    setTimeout(() => {
      button?.classList.remove("clicked");
      navigate(to);
    }, 400);
  };
  return (
    <Container>
      <Presentation>
        <h3>Hi! My name is</h3>
        <Name>
          <h1 className="md:text-7xl text-4xl lg:lg:text-9xl">Gonçalo</h1>
          <Underline className="w-[12rem] md:w-[25rem] lg:w-[40rem] h-3 relative">
            {/* Gradient Underline */}
            <OuterLine className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <OuterLine className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <InnerLine className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <InnerLine className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </Underline>
          <JobPosition>
            <p className="text-xl font-bold">FullStack Developer</p>
          </JobPosition>
        </Name>
      </Presentation>
      <Navigation>
        {LINKLIST.map((label, index) => {
          return (
            <NavLink
              id={`styledButton ${index}`}
              lightMode={lightMode}
              onClick={() => handleLinkClick(label.toLowerCase(), index)}
            >
              <Button>{label}</Button>
            </NavLink>
          );
        })}
      </Navigation>
      <DownloadCV />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Presentation = styled.div`
  text-align: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    animation: ${swirlInFwd} 0.6s ease-out both;
  }
`;

const Name = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: ${trackingInContract} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s both;
  h1 {
    position: relative;
    z-index: 20;
    text-align: center;
    color: #ffffff;
  }
`;

const Underline = styled.div``;

const OuterLine = styled.div`
  position: absolute;
  top: -0.25rem;
  right: 1.25rem;
  left: 1.25rem;

  @media (min-width: 768px) {
    top: -0.5rem;
    right: 3rem;
    left: 3rem;
  }
  @media (min-width: 1024px) {
    top: -0.75rem;
    right: 5rem;
    left: 5rem;
  }
`;

const InnerLine = styled.div`
  position: absolute;
  top: -0.25rem;
  right: 5rem;
  left: 5rem;

  @media (min-width: 768px) {
    top: -0.5rem;
    right: 9rem;
    left: 9rem;
  }
  @media (min-width: 1024px) {
    top: -0.75rem;
    right: 15rem;
    left: 15rem;
  }
`;

const JobPosition = styled.div`
  animation: ${flipInHorBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
`;

const Navigation = styled.div`
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:nth-child(1) {
    animation: ${slideInLeft} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s both;

    &.clicked {
      animation: ${puffOutCenter} 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
  }
  & > *:nth-child(2) {
    animation: ${slideInBottom} 0.8s 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    &.clicked {
      animation: ${puffOutCenter} 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
  }
  & > *:nth-child(3) {
    animation: ${slideInRight} 0.8s 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    &.clicked {
      animation: ${puffOutCenter} 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
  }
  @media (min-width: 495px) {
    min-width: 300px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const NavLink = styled.a<{ lightMode: boolean }>`
  /* ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}; */
  padding: 6px 30px;
  border-radius: 20px;
  margin: 5px;
  :hover {
    cursor: pointer;
  }
`;
