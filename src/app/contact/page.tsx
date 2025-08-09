"use client";

import { Layout } from "@/components";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen p-5 md:p-2.5">
        <div className="relative overflow-hidden p-px flex flex-col items-center rounded-[20px] md:rounded-[15px] max-w-[600px] w-full animate-[fadeInUp_0.6s_ease-out] before:content-[''] before:absolute before:inset-[-1000%] before:bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#6366f1_50%,#0ea5e9_100%)] before:animate-spin">
          <div
            className={`flex flex-col items-center p-10 md:py-7 md:px-5 rounded-[20px] md:rounded-[15px] w-full h-full relative z-[1] shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${
              isDark ? "bg-slate-950 text-white" : "bg-slate-100 text-gray-900"
            }`}
          >
            <h2 className="text-4xl md:text-3xl mb-7 md:mb-5 text-center font-bold font-anta bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <p className="w-full text-center m-0 mb-10 md:mb-7 leading-relaxed text-lg md:text-base">
              Thank you for exploring my portfolio!
              <br />
              If you have any inquiries or want to discuss potential projects,
              <br />
              please feel free to reach out.
              <br />
              <span className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                I&apos;m excited to hear from you!
              </span>
            </p>

            <div className="flex flex-col gap-5 md:gap-4 w-full">
              <a
                href="https://github.com/ST4R20RD"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center p-5 md:p-4 rounded-[15px] no-underline transition-all duration-300 border-none shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                    : "bg-gradient-to-br from-gray-300 to-gray-200 text-gray-900"
                }`}
              >
                <div className="text-3xl md:text-2xl mr-5 md:mr-4 flex items-center justify-center w-12 h-12 md:w-10 md:h-10 bg-white/20 rounded-xl">
                  <FiGithub />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-base font-semibold mb-1">GitHub</span>
                  <span className="text-sm md:text-xs opacity-90">ST4R20RD</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/goncaloestrelado/"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center p-5 md:p-4 rounded-[15px] no-underline transition-all duration-300 border-none shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] ${
                  isDark
                    ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white"
                    : "bg-gradient-to-br from-blue-400 to-blue-300 text-gray-900"
                }`}
              >
                <div className="text-3xl md:text-2xl mr-5 md:mr-4 flex items-center justify-center w-12 h-12 md:w-10 md:h-10 bg-white/20 rounded-xl">
                  <FaLinkedinIn />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-base font-semibold mb-1">LinkedIn</span>
                  <span className="text-sm md:text-xs opacity-90">goncaloestrelado</span>
                </div>
              </a>

              <a
                href="mailto:goncalo.estrelado@hotmail.com"
                className={`flex items-center p-5 md:p-4 rounded-[15px] no-underline transition-all duration-300 border-none shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] ${
                  isDark
                    ? "bg-gradient-to-br from-red-500 to-red-700 text-white"
                    : "bg-gradient-to-br from-red-400 to-red-300 text-gray-900"
                }`}
              >
                <div className="text-3xl md:text-2xl mr-5 md:mr-4 flex items-center justify-center w-12 h-12 md:w-10 md:h-10 bg-white/20 rounded-xl">
                  <FiMail />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-base font-semibold mb-1">Email</span>
                  <span className="text-sm md:text-xs opacity-90">goncalo.estrelado@hotmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
