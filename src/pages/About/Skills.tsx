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

const Container = styled.div``;
const Wrapper = styled.div<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  font-size: 3rem;

  & > * {
    margin: 10px;
  }
`;
