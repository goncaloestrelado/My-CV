"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { Counter } from "../Counter";
import { useTheme } from "@/context/ThemeContext";
import { ProjectType } from "@/utils/types";
import Image from "next/image";

export function Card({
  dateSince,
  isFinished,
  thumbnail,
  title,
  subTitle,
  description,
  techs,
  github,
  live,
}: ProjectType) {
  const [showMoreDesc, setShowMoreDesc] = useState<boolean>(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sliceTheFirstPhrase = description.slice(0, description.indexOf(".") + 1);

  return (
    <div
      className={clsx(
        "flex flex-col items-center max-w-[900px] rounded-lg",
        "lg:flex-row lg:h-[50vh]",
        "max-lg:items-start max-lg:max-w-[600px] max-lg:w-[80vw]",
        isDark ? "bg-gradient-to-b from-transparent to-black/20" : "bg-gradient-to-b from-gray-400/0 to-gray-400/20"
      )}
    >
      <div className="flex flex-col p-4 max-w-[180px] max-lg:p-0">
        <a href={live} target="_blank" rel="noreferrer">
          <Image
            src={thumbnail}
            alt={title}
            width={600}
            height={400}
            className={clsx(
              "w-full h-full object-cover rounded-lg",
              "max-lg:w-[80vw] max-lg:h-[110px] max-lg:max-w-[600px] max-lg:object-[50%_-0%]"
            )}
          />
        </a>
      </div>

      <div className="flex flex-col justify-between h-full w-[calc(100%-2rem)] m-4 [&>*]:my-2.5 max-lg:[&_h2]:text-[5vw]">
        <div className="flex flex-col items-start max-w-[620px] [&>*]:my-1.5 max-lg:text-[calc(5px+min(1vw,20px))]">
          <h2>{title}</h2>
          <div className="flex justify-start flex-wrap [&>*]:mx-1.5 max-lg:text-[calc(5px+min(2vw,12px))]">
            {"{"}
            {techs.map((tech, index) => (
              <a
                key={index}
                style={{ color: isDark ? tech.color : "rgb(13, 16, 23)" }}
                href={tech.link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {tech.name} ,
              </a>
            ))}
            {"}"}
          </div>
          <p>{subTitle}</p>
          <div className="h-fit max-h-[170px] flex flex-col justify-center max-lg:w-[75vw] max-lg:max-w-[590px] max-lg:pr-2.5">
            <p className="h-full w-full mr-2.5 overflow-y-auto max-lg:text-[calc(5px+min(1.8vw,20px))]">
              {description.length > 350 ? (
                <span>{!showMoreDesc ? sliceTheFirstPhrase : description}</span>
              ) : (
                description
              )}
            </p>
            {description.length > 350 && (
              <button
                onClick={() => setShowMoreDesc(!showMoreDesc)}
                className={clsx(
                  "bg-none border-none cursor-pointer outline-none px-2 mt-1.5",
                  isDark ? "text-gray-300" : "text-gray-500"
                )}
              >
                {!showMoreDesc ? "Read more" : "less"}
              </button>
            )}
          </div>
        </div>
        <Counter startTime={new Date(dateSince)} isFinished={isFinished} />
      </div>

      <div className="flex justify-around mt-2.5 text-4xl [&>*]:py-2 [&>*]:px-4 lg:flex-col">
        <a href={github} target="_blank" rel="noreferrer">
          <TbBrandGithub className="mx-4" />
        </a>
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            <MdOpenInNew className="mx-4" />
          </a>
        )}
      </div>
    </div>
  );
}
