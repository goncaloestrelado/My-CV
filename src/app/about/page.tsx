"use client";

import { Layout } from "@/components";
import Image from "next/image";
import { FaNodeJs, FaHtml5, FaGithub, FaFigma, FaSass } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoCss3, IoLogoJavascript, IoLogoNpm } from "react-icons/io5";
import { SiFirebase, SiJson, SiMongodb, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { useTheme } from "@/context/ThemeContext";

function Skills() {
  return (
    <div className="w-full px-4 md:px-2">
      <div className="rounded-3xl md:rounded-2xl sm:rounded-xl flex flex-wrap justify-center items-center gap-2 lg:gap-3 xl:gap-3 p-3 lg:p-4 xl:p-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl [&>*]:flex-shrink-0 [&>*]:transition-transform [&>*]:duration-200 [&>*:hover]:scale-110 bg-gradient-to-b from-gray-400/0 to-gray-400/20">
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
      </div>
    </div>
  );
}

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Layout>
      <div className="flex flex-col justify-start items-center min-h-screen p-5 mt-12">
        <div className="relative overflow-hidden p-px flex flex-col items-center rounded-3xl md:rounded-2xl my-4 max-w-6xl w-full before:content-[''] before:absolute before:inset-[-1000%] before:bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#6366f1_50%,#0ea5e9_100%)] before:animate-spin">
          <div
            className={`p-8 md:p-6 rounded-3xl md:rounded-2xl w-full h-full relative z-[1] flex flex-col items-center gap-12 md:gap-8 ${
              isDark ? "bg-slate-950 text-white" : "bg-slate-100 text-gray-900"
            }`}
          >
            <div className="w-full text-center mb-4 md:mb-0">
              <Skills />
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-16 w-full max-w-5xl">
              <div className="flex flex-col items-center justify-start min-w-[280px] md:max-w-sm flex-shrink-0 space-y-5">
                <Image
                  src="/images/GonçaloEstrelado.png"
                  alt="Gonçalo Estrelado - FullStack Developer"
                  width={240}
                  height={320}
                  className="h-80 w-60 object-cover rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105"
                />
                <span className="text-2xl md:text-xl font-bold text-center my-4 font-anta">FullStack Developer</span>
                <div className="flex flex-col gap-2 text-center mt-4">
                  <span className="text-sm opacity-80">📍 Portugal</span>
                </div>
              </div>

              <div className="flex flex-col gap-6 flex-1 max-w-[600px] md:max-w-full">
                <h2 className="text-3xl md:text-2xl font-bold mb-4 font-anta">About Me</h2>

                <p className="leading-relaxed text-base md:text-[0.95rem] m-0 text-justify md:text-left">
                  Full-stack developer focused on building web applications with the MERN stack. I enjoy creating smooth
                  user experiences that work across all devices.
                </p>

                <p className="leading-relaxed text-base md:text-[0.95rem] m-0 text-justify md:text-left">
                  I turn ideas into working applications, with experience spanning from database design to deployment.
                </p>

                <p className="leading-relaxed text-base md:text-[0.95rem] m-0 text-justify md:text-left">My toolkit:</p>

                <ul className="list-none p-0 my-4 flex flex-col gap-3">
                  <li
                    className={`p-3 md:py-2 md:px-3 border-l-4 border-blue-600 rounded-r-lg text-[0.95rem] md:text-sm leading-relaxed transition-all duration-300 hover:translate-x-1 ${
                      isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    Frontend: React, TypeScript, HTML5, CSS3, Sass, Tailwind CSS
                  </li>
                  <li
                    className={`p-3 md:py-2 md:px-3 border-l-4 border-blue-600 rounded-r-lg text-[0.95rem] md:text-sm leading-relaxed transition-all duration-300 hover:translate-x-1 ${
                      isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    Backend: Node.js, Express.js, MongoDB, Firebase
                  </li>
                  <li
                    className={`p-3 md:py-2 md:px-3 border-l-4 border-blue-600 rounded-r-lg text-[0.95rem] md:text-sm leading-relaxed transition-all duration-300 hover:translate-x-1 ${
                      isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    Tools: Git, GitHub, npm, Figma, VS Code
                  </li>
                  <li
                    className={`p-3 md:py-2 md:px-3 border-l-4 border-blue-600 rounded-r-lg text-[0.95rem] md:text-sm leading-relaxed transition-all duration-300 hover:translate-x-1 ${
                      isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    Focus: Responsive design, component architecture
                  </li>
                </ul>

                <p className="leading-relaxed text-base md:text-[0.95rem] m-0 text-justify md:text-left">
                  I work well in teams and enjoy solving complex problems. Always learning new technologies and staying
                  current with best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
