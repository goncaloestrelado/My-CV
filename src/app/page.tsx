"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Layout, Button } from "@/components";
import { AiFillFilePdf } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const btnRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigationOptions = [
    { route: "/projects", name: "Projects" },
    { route: "/about", name: "About" },
    { route: "/contact", name: "Contact" },
  ];

  return (
    <Layout showHeader={false}>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Presentation Section */}
        <div className="text-center m-[10px] flex flex-col items-center">
          <motion.h3
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl text-gray-300"
          >
            Hi! My name is
          </motion.h3>

          {/* Name Section */}
          <motion.div
            initial={{ opacity: 0, scaleX: 1.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.215, 0.61, 0.355, 1],
              delay: 0.5,
            }}
            className="flex overflow-hidden flex-col justify-center items-center w-full"
          >
            <h1 className="relative z-20 text-center text-4xl md:text-7xl lg:text-9xl font-normal leading-none tracking-tight text-white font-anta">
              Gonçalo
            </h1>

            {/* Gradient Underlines */}
            <div className="w-48 md:w-96 lg:w-[40rem] h-3 relative">
              {/* Outer Lines */}
              <div className="absolute -top-1 md:-top-2 lg:-top-3 left-5 right-5 md:left-12 md:right-12 lg:left-20 lg:right-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute -top-1 md:-top-2 lg:-top-3 left-5 right-5 md:left-12 md:right-12 lg:left-20 lg:right-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />

              {/* Inner Lines */}
              <div className="absolute -top-1 md:-top-2 lg:-top-3 left-20 right-20 md:left-36 md:right-36 lg:left-60 lg:right-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute -top-1 md:-top-2 lg:-top-3 left-20 right-20 md:left-36 md:right-36 lg:left-60 lg:right-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>

            {/* Job Position */}
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1,
              }}
            >
              <p className="text-xl font-bold text-gray-200">FullStack Developer</p>
            </motion.div>
          </motion.div>
        </div>{" "}
        {/* Navigation */}
        <div className="text-center mt-5 flex flex-col items-center min-[495px]:min-w-[300px] min-[495px]:flex-row min-[495px]:justify-around">
          {navigationOptions.map((option, index) => {
            const animations = [
              { x: -50, delay: 1.2 }, // slideInLeft
              { y: 50, delay: 1.6 }, // slideInBottom
              { x: 50, delay: 2.0 }, // slideInRight
            ];

            return (
              <motion.div
                key={option.route}
                ref={(el) => {
                  btnRefs.current[index] = el;
                }}
                initial={{ opacity: 0, ...animations[index] }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: animations[index].delay,
                }}
                className="m-[5px]"
                onClick={(e) => {
                  e.preventDefault();
                  const el = btnRefs.current[index];
                  if (el) {
                    el.classList.remove("animate-puffOutCenter");
                    // force reflow to restart animation
                    void el.offsetWidth;
                    el.classList.add("animate-puffOutCenter");
                  }
                  setTimeout(() => router.push(option.route), 400);
                }}
              >
                <Button variant="primary">{option.name}</Button>
              </motion.div>
            );
          })}
        </div>
        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 2.6,
          }}
          className="mt-2.5"
        >
          <Button variant="primary">
            <a
              href="https://drive.google.com/file/d/1g5aKBIfFTY7h_cD5XLW4kq9agnZyg3-U/view"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-white text-2xl"
            >
              <AiFillFilePdf className="mr-[13px]" />
              Curriculum Vitae
            </a>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
