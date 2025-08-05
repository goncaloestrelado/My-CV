import styled from "styled-components";
import { EducationCard } from "./EducationCard";
import { Skills } from "./Skills";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function About() {
  const { lightMode } = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper lightMode={lightMode}>
        <SkillsSection>
          <SectionTitle>Technical Skills</SectionTitle>
          <Skills />
        </SkillsSection>

        <ContentSection>
          <ProfileSection className="space-y-5">
            <ProfilePic
              src="images/GonçaloEstrelado.png"
              alt="Gonçalo Estrelado - FullStack Developer"
              loading="lazy"
            />
            <RoleTitle>FullStack Developer</RoleTitle>
            {/* <EducationCard /> */}
            <ContactInfo>
              <InfoItem>📍 Portugal</InfoItem>
            </ContactInfo>
          </ProfileSection>

          <TextSection>
            <SectionTitle>About Me</SectionTitle>
            <AboutText>
              Full-stack developer focused on building web applications with the MERN stack. I enjoy creating smooth
              user experiences that work across all devices.
            </AboutText>

            <AboutText>
              I turn ideas into working applications, with experience spanning from database design to deployment.
            </AboutText>

            <AboutText>My toolkit:</AboutText>

            <SkillsList>
              <SkillItem>Frontend: React, TypeScript, HTML5, CSS3, Sass, Tailwind CSS</SkillItem>
              <SkillItem>Backend: Node.js, Express.js, MongoDB, Firebase</SkillItem>
              <SkillItem>Tools: Git, GitHub, npm, Figma, VS Code</SkillItem>
              <SkillItem>Focus: Responsive design, component architecture</SkillItem>
            </SkillsList>

            <AboutText>
              I work well in teams and enjoy solving complex problems. Always learning new technologies and staying
              current with best practices.
            </AboutText>
          </TextSection>
        </ContentSection>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 1rem;
`;

const Wrapper = styled.div<{ lightMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ lightMode }) =>
    lightMode
      ? "linear-gradient(180deg, rgba(141, 141, 141, 0) 0%, rgba(141, 141, 141, 0.1) 100%)"
      : "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)"};
  padding: 2rem;
  border-radius: 30px;
  margin: 1rem 0;
  max-width: 1200px;
  width: 100%;
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 2rem;
  }
`;

const SkillsSection = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 280px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProfilePic = styled.img`
  height: 20rem;
  width: 240px;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const RoleTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;

  @media (max-width: 430px) {
    font-size: 1.25rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  margin-top: 1rem;
`;

const InfoItem = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SkillItem = styled.li`
  padding: 0.75rem 1rem;
  border-left: 4px solid #217db8;
  background: ${({ theme }) => (theme?.lightMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)")};
  border-radius: 0 8px 8px 0;
  font-size: 0.95rem;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: ${({ theme }) => (theme?.lightMode ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)")};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
`;

const AboutText = styled.p`
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: left;
  }
`;
