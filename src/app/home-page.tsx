"use client";

import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { AiFillFilePdf } from "react-icons/ai";
import { Layout, Button } from "@/components";

const LINKLIST = ["Projects", "About", "Contact"];

export default function Home() {
  const router = useRouter();

  const handleLinkClick = (to: string, index: number) => {
    const button = document.getElementById(`styledButton ${index}`);
    if (button) {
      // Remove existing animation classes and add clicked animation
      button.className = button.className.replace(/animate-\w+/g, "");
      button.classList.add("animate-puffOutCenter");

      setTimeout(() => {
        router.push(`/${to}`);
      }, 400);
    }
  };

  return (
    <Layout showHeader={false}>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="text-center m-2.5 flex flex-col items-center">
          <h3 className="animate-swirlInFwd">Hi! My name is</h3>
          <div className="flex overflow-hidden flex-col justify-center items-center w-full animate-trackingInContract">
            <h1 className="relative z-20 text-center text-white text-4xl md:text-7xl lg:text-9xl">Gonçalo</h1>
            <div className="w-48 md:w-96 lg:w-[40rem] h-3 relative">
              {/* Gradient Underline */}
              <div className="absolute -top-1 md:-top-2 lg:-top-3 right-5 left-5 md:right-12 md:left-12 lg:right-20 lg:left-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-0.5 w-3/4 blur-sm" />
              <div className="absolute -top-1 md:-top-2 lg:-top-3 right-5 left-5 md:right-12 md:left-12 lg:right-20 lg:left-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute -top-1 md:-top-2 lg:-top-3 right-20 left-20 md:right-36 md:left-36 lg:right-60 lg:left-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-1.5 w-1/4 blur-sm" />
              <div className="absolute -top-1 md:-top-2 lg:-top-3 right-20 left-20 md:right-36 md:left-36 lg:right-60 lg:left-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
            <div className="animate-flipInHorBottom">
              <p className="text-xl font-bold">FullStack Developer</p>
            </div>
          </div>
        </div>

        <nav className="text-center mt-5 flex flex-col items-center min-[495px]:min-w-[300px] min-[495px]:flex-row min-[495px]:justify-around">
          {LINKLIST.map((label, index) => {
            const animationClass =
              index === 0 ? "animate-slideInLeft" : index === 1 ? "animate-slideInBottom" : "animate-slideInRightDelay";

            return (
              <div
                key={label}
                id={`styledButton ${index}`}
                className={clsx("p-1.5 px-7 rounded-3xl m-1.5 cursor-pointer", animationClass)}
                onClick={() => handleLinkClick(label.toLowerCase(), index)}
              >
                <Button>{label}</Button>
              </div>
            );
          })}
        </nav>

        <a
          href="https://drive.google.com/file/d/1g5aKBIfFTY7h_cD5XLW4kq9agnZyg3-U/view"
          target="_blank"
          rel="noreferrer"
          className="text-white border-none p-1.5 px-7 text-2xl rounded-[30px] mt-2.5 italic flex items-center animate-slideInBottomDelay"
        >
          <Button>
            <AiFillFilePdf className="mr-3" />
            Curriculum Vitae
          </Button>
        </a>
      </div>
    </Layout>
  );
}
