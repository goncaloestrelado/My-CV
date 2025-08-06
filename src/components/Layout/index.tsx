import { Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  const { lightMode } = useContext(ThemeContext);
  return (
    <Container lightMode={lightMode}>
      {pathname === "/" ? null : <Header />}
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </Container>
  );
}

const lightThemeStyles = css`
  position: absolute;
  top: 0;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url("/images/block-texture-white.gif");
  background-size: 100%;
  background-repeat: repeat;
  background-attachment: fixed;
`;

const darkThemeStyles = css`
  position: absolute;
  top: 0;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/block-texture.gif");
  background-size: 100%;
  background-repeat: repeat;
  background-attachment: fixed;
`;

const OutletWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
`;

const Container = styled.section<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  ${OutletWrapper} {
    ${({ lightMode }) => css`
      color: ${lightMode ? "white" : "black"};
    `}
  }
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
