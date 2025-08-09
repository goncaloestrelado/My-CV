import styled, { css } from "styled-components";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Footer() {
  const location = useLocation();
  const pathname = location.pathname;
  const { lightMode } = useContext(ThemeContext);
  return (
    <Container lightMode={lightMode}>
      <Wrapper>
        <Signature>
          <span className="text-white">@{new Date().getFullYear()} - </span>
          <a
            href="
          https://www.linkedin.com/in/goncaloestrelado/
          "
            target="_blank"
            rel="noreferrer"
          >
            Gonçalo Estrelado
          </a>
        </Signature>
        {pathname === "/contact" ? null : (
          <Links>
            {/* {pathname === "/" ? <Toggle checked={lightMode} onToggle={toggleTheme} /> : null} */}
            <Link href="https://github.com/ST4R20RD/My-CV" target="_blank" rel="noreferrer">
              <FiGithub color="white" />
            </Link>
            <Link href="https://www.linkedin.com/in/goncaloestrelado/" target="_blank" rel="noreferrer">
              <FaLinkedinIn color="white" />
            </Link>
            <Link href="mailto:goncalo.estrelado@hotmail.com">
              <FiMail color="white" />
            </Link>
          </Links>
        )}
      </Wrapper>
    </Container>
  );
}

interface ContainerProps {
  lightMode: boolean;
}

const Container = styled.footer<ContainerProps>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
`;

const lightThemeStyles = css`
  background: linear-gradient(180deg, rgba(90, 90, 90, 0) 0%, rgba(90, 90, 90, 0.85) 100%);
`;

const darkThemeStyles = css`
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.03) 100%);
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Signature = styled.span`
  font-size: 0.6rem;
  @media (min-width: 411px) {
    font-size: 1rem;
  }
`;

function Link({ children, href, target, rel }: { children: JSX.Element; href: string; target?: string; rel?: string }) {
  return (
    <LinkContainer href={href} target={target} rel={rel}>
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg" />
        <div className="px-4 py-2 rounded-[6px] bg-slate-950 relative group transition duration-200 text-white hover:bg-transparent">
          {children}
        </div>
      </button>
    </LinkContainer>
  );
}

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  svg {
    color: black;
  }
  @media (min-width: 465px) {
    font-size: 1.5rem;
    padding: 10px;
  }
`;
