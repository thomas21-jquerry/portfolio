"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
  initial="hidden"
  animate="visible"
  className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20] text-center md:text-start"
>
  <div className="h-full w-full flex flex-col gap-5 justify-center m-auto">
    <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
    >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h1 className="Welcome-text text-[12px] md:text-[13px]">
        Fullstack Developer Portfolio
      </h1>
    </motion.div>

    <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col gap-4 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[350px] sm:max-w-[600px] mx-auto md:mx-0"
    >
      <span>
        Engineering the
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          future{" "}
        </span>
        one stellar line of code at a time.
      </span>
    </motion.div>

    <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-base md:text-lg text-gray-400 my-5 max-w-[350px] sm:max-w-[600px] mx-auto md:mx-0"
    >
      Hi 👋 my name is Thomas. I&apos;m a Full Stack Software Engineer with over 3 years of experience in Website,
      Blockchain, and Software development. Check out my projects and skills.
    </motion.p>

    <motion.a
      variants={slideInFromLeft(1)}
      href="/resume.pdf"
      download="Resume.pdf"
      className="py-2 px-4 button-primary text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0 text-center"
    >
      Download Resume
    </motion.a>
  </div>

  <motion.div
    variants={slideInFromRight(0.8)}
    className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
  >
    <Image
      src="/mainIconsdark.svg"
      alt="work icons"
      height={400}
      width={400}
      className="w-[300px] md:w-[400px] lg:w-[650px]"
    />
  </motion.div>
</motion.div>

  );
};

export default HeroContent;