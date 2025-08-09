import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";
import styled, { css, keyframes } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Contact() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <Container>
      <Wrapper lightMode={lightMode}>
        <WrapperInner lightMode={lightMode}>
          <Title>Get In Touch</Title>
          <GreetBox>
            Thank you for exploring my portfolio!
            <br />
            If you have any inquiries or want to discuss potential projects,
            <br />
            please feel free to reach out.
            <br />
            <Highlight>I'm excited to hear from you!</Highlight>
          </GreetBox>
          <Links>
            <LinkCard href="https://github.com/ST4R20RD" target="_blank" rel="noreferrer" github>
              <IconWrapper>
                <FiGithub />
              </IconWrapper>
              <LinkContent>
                <LinkTitle>GitHub</LinkTitle>
                <LinkSubtitle>ST4R20RD</LinkSubtitle>
              </LinkContent>
            </LinkCard>
            <LinkCard href="https://www.linkedin.com/in/goncaloestrelado/" target="_blank" rel="noreferrer" linkedin>
              <IconWrapper>
                <FaLinkedinIn />
              </IconWrapper>
              <LinkContent>
                <LinkTitle>LinkedIn</LinkTitle>
                <LinkSubtitle>goncaloestrelado</LinkSubtitle>
              </LinkContent>
            </LinkCard>
            <LinkCard href="mailto:goncalo.estrelado@hotmail.com" email>
              <IconWrapper>
                <FiMail />
              </IconWrapper>
              <LinkContent>
                <LinkTitle>Email</LinkTitle>
                <LinkSubtitle>goncalo.estrelado@hotmail.com</LinkSubtitle>
              </LinkContent>
            </LinkCard>
          </Links>
        </WrapperInner>
      </Wrapper>
    </Container>
  );
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const lightThemeStyles = css`
  background: #020617;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const darkThemeStyles = css`
  background: #f8fafc;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Wrapper = styled.div<{ lightMode: boolean }>`
  position: relative;
  overflow: hidden;
  padding: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: 768px) {
    border-radius: 15px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1000%;
    background: conic-gradient(from 90deg at 50% 50%, #0ea5e9 0%, #6366f1 50%, #0ea5e9 100%);
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const WrapperInner = styled.div<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? lightThemeStyles : darkThemeStyles)}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 15px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const GreetBox = styled.p`
  width: 100%;
  text-align: center;
  margin: 0 0 40px 0;
  line-height: 1.6;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const LinkCard = styled.a<{ github?: boolean; linkedin?: boolean; email?: boolean }>`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${({ github, linkedin, email }) => {
    if (github) return "linear-gradient(135deg, #333 0%, #24292e 100%)";
    if (linkedin) return "linear-gradient(135deg, #0077b5 0%, #005885 100%)";
    if (email) return "linear-gradient(135deg, #ea4335 0%, #d33b2c 100%)";
    return "#fff";
  }};
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
`;

const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LinkSubtitle = styled.span`
  font-size: 0.9rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
