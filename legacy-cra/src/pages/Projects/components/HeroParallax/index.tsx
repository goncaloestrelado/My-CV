import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ProjectCard } from "../ProjectCard";
import { useRef } from "react";
import { ProjectType } from "../../../../utils/types";
import styled from "styled-components";

export const HeroParallax = ({ projects, children }: { projects: Array<ProjectType>; children: JSX.Element }) => {
  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3, 5);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 250]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -250]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 150]), springConfig);

  return (
    <Container
      ref={ref}
      className="h-full py-8 xl:py-40 antialiased relative flex flex-col self-auto [transform-style:preserve-3d]"
    >
      {children}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="hidden xl:block"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project) => (
            <ProjectCard key={project.id} project={project} translate={translateXReverse} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((project) => (
            <ProjectCard key={project.id} project={project} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center space-y-8 ml-5 mb-24 xl:hidden">
        {projects.map((project) => (
          <div className="flex flex-col items-center sm:flex-row w-48 sm:w-full space-y-4 sm:space-y-0 sm:space-x-6 mx-4">
            <ProjectCard key={project.id} project={project} />
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-white font-bold">{project.title}</h2>
              <Techs className="text-xs md:text-base">
                {"{"}
                {project.techs.map((tech, index) => {
                  return (
                    <Tech key={index} style={{ color: tech.color }} href={tech.link} target="_blank" rel="noreferrer">
                      {tech.name} ,
                    </Tech>
                  );
                })}
                {"}"}
              </Techs>
              <div className="flex flex-col items-start space-y-2 text-xs md:text-base">
                <button
                  className="text-white"
                  /* onClick={handleOnClick} */
                >
                  See More →
                </button>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white border border-white px-4 py-2 rounded-md"
                  >
                    Github
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-black font-bold bg-white px-4 py-2 rounded-md"
                  >
                    Visit Deploy
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  perspective: 1000px;
`;

const Techs = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  & > * {
    margin: 0 5px;
  }
  /* @media (max-width: 980px) {
    font-size: calc(5px + min(2vw, 12px));
  } */
`;

const Tech = styled.a`
  color: gray;
  :hover {
    text-decoration: underline;
  }
`;
