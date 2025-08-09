import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Header() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <HeaderContainer lightMode={lightMode}>
      <Logo to="/">
        <h1>Gonçalo Estrelado</h1>
      </Logo>
      <Menu />
    </HeaderContainer>
  );
}

const lightThemeStyles = css`
  background-color: rgb(141, 141, 141);
  background: linear-gradient(180deg, rgba(90, 90, 90, 0.85) 0%, rgba(90, 90, 90, 0) 100%);
  a,
  svg {
    color: black;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;

const darkThemeStyles = css`
  background-color: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%);
`;

const HeaderContainer = styled.nav<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 50px;
  height: 80px;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled(Link)`
  font-weight: 300;
  font-size: 1rem;
  @media (min-width: 542px) {
    font-size: 2rem;
  }
  @media (min-width: 815px) {
    font-size: 4rem;
  }
`;
