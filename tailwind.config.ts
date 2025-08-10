import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-gradient-to-r",
    "from-transparent",
    "via-indigo-500",
    "via-sky-500",
    "to-transparent",
    "animate-swirlInFwd",
    "animate-trackingInContract",
    "animate-flipInHorBottom",
    "animate-slideInLeft",
    "animate-slideInBottom",
    "animate-slideInRight",
    "animate-slideInRightDelay",
    "animate-slideInBottomDelay",
    "animate-puffOutCenter",
    "text-white",
    "text-black",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        slideInRight: "slideInRight 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        slideOutRight: "slideOutRight 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        swirlInFwd: "swirlInFwd 0.6s ease-out both",
        flipInHorBottom: "flipInHorBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both",
        slideInLeft: "slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s both",
        slideInBottom: "slideInBottom 0.8s 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        slideInBottomDelay: "slideInBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.6s both",
        slideInRightDelay: "slideInRight 0.8s 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        trackingInContract: "trackingInContract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s both",
        puffOutCenter: "puffOutCenter 1s cubic-bezier(0.165, 0.84, 0.44, 1) both",
        fadeInUp: "fadeInUp 0.6s ease-out",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        slideOutRight: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
        swirlInFwd: {
          "0%": {
            transform: "rotate(-540deg) scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "rotate(0) scale(1)",
            opacity: "1",
          },
        },
        flipInHorBottom: {
          "0%": {
            transform: "rotateX(80deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0)",
            opacity: "1",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-400px) scaleX(2.5) scaleY(0.2)",
            transformOrigin: "100% 50%",
            filter: "blur(40px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) scaleY(1) scaleX(1)",
            transformOrigin: "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        slideInBottom: {
          "0%": {
            transform: "translateY(1000px) scaleY(2.5) scaleX(0.2)",
            transformOrigin: "50% 100%",
            filter: "blur(40px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) scaleY(1) scaleX(1)",
            transformOrigin: "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        puffOutCenter: {
          "0%": {
            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(2)",
            filter: "blur(4px)",
            opacity: "0",
          },
        },
        trackingInContract: {
          "0%": {
            letterSpacing: "1em",
            opacity: "0",
          },
          "40%": {
            opacity: "0.6",
          },
          "100%": {
            letterSpacing: "normal",
            opacity: "1",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(1000px) scaleX(2.5) scaleY(0.2)",
            transformOrigin: "0% 50%",
            filter: "blur(40px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) scaleY(1) scaleX(1)",
            transformOrigin: "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Map utilities to next/font injected CSS variables (see lib/fonts.ts)
        raleway: ["var(--font-raleway)", "sans-serif"],
        anta: ["var(--font-anta)", "sans-serif"],
        modernTimes: ["var(--font-modernTimes)", "var(--font-anta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
