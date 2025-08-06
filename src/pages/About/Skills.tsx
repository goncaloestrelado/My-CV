import { FaNodeJs, FaHtml5, FaGithub, FaFigma, FaSass } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoCss3, IoLogoJavascript, IoLogoNpm } from "react-icons/io5";
import { SiFirebase, SiJson, SiMongodb, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiGit } from "react-icons/di";
import styled, { css } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Skills() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <Container>
      <Wrapper lightMode={lightMode}>
        <FaNodeJs />
        <IoLogoJavascript />
        <SiTypescript />
        <GrReactjs />
        <SiMongodb />
        <SiFirebase />
        <FaHtml5 />
        <IoLogoCss3 />
        <SiTailwindcss />
        <FaSass />
        <SiStyledcomponents />
        <IoLogoNpm />
        <DiGit />
        <FaGithub />
        <SiJson />
        <FaFigma />
      </Wrapper>
    </Container>
  );
}

const lightThemeStyles = css`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
`;

const darkThemeStyles = css`
  background: linear-gradient(180deg, rgba(141, 141, 141, 0) 0%, rgba(141, 141, 141, 0.2) 100%);
`;

const Container = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;
const Wrapper = styled.div<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  font-size: 3rem;

  /* Desktop and larger screens */
  @media (min-width: 1200px) {
    font-size: 3.5rem;
    gap: 20px;
    padding: 25px;
  }

  /* Tablets and medium screens */
  @media (max-width: 1024px) {
    font-size: 2.5rem;
    gap: 12px;
    padding: 18px;
  }

  /* Small tablets */
  @media (max-width: 768px) {
    font-size: 2rem;
    gap: 10px;
    padding: 15px;
    border-radius: 20px;
  }

  /* Mobile phones */
  @media (max-width: 480px) {
    font-size: 1.5rem;
    gap: 8px;
    padding: 12px;
    border-radius: 15px;
  }

  /* Very small screens */
  @media (max-width: 320px) {
    font-size: 1.2rem;
    gap: 6px;
    padding: 10px;
  }

  & > * {
    flex-shrink: 0;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
