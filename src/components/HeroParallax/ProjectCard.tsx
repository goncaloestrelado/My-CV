"use client";

import { motion, MotionValue } from "framer-motion";
import { ProjectType } from "@/utils/types";
import Image from "next/image";

export const ProjectCard = ({ project, translate }: { project: ProjectType; translate?: MotionValue<number> }) => {
  return (
    <motion.div
      style={{
        x: translate || 0,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/project w-[12rem] h-[9.6rem] md:w-[30rem] md:h-96 relative flex-shrink-0"
    >
      <Image
        src={project.thumbnail}
        height={600}
        width={600}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={project.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-90 bg-black pointer-events-none"></div>
      <h2 className="text-3xl absolute top-4 left-4 opacity-0 group-hover/project:opacity-100 text-white font-bold">
        {project.title}
      </h2>
      <div className="absolute top-40 left-4 opacity-0 group-hover/project:opacity-100 flex justify-start flex-wrap [&>*]:mx-1.5 max-lg:text-[calc(5px+min(2vw,12px))]">
        {"{"}
        {project.techs.map((tech, index) => {
          return (
            <a
              key={index}
              style={{ color: tech.color }}
              href={tech.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:underline"
            >
              {tech.name} ,
            </a>
          );
        })}
        {"}"}
      </div>
      <button className="absolute bottom-4 left-4 opacity-0 group-hover/project:opacity-100 text-white">
        See More →
      </button>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-4 right-40 opacity-0 group-hover/project:opacity-100 text-white border border-white px-4 py-2 rounded-md"
      >
        Github
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-4 right-4 opacity-0 group-hover/project:opacity-100 text-black font-bold bg-white px-4 py-2 rounded-md"
        >
          Visit Deploy
        </a>
      )}
    </motion.div>
  );
};
