import React from "react";
import Type from "./Type";
import bannerAnimmation from "./bannerAnim.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbMessage } from "react-icons/tb";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Banner() {
  return (
    <div className="h-[calc(100vh-3.75rem)] bg-gradient-to-b from-gray-900 to-gray-700  text-gray-200  flex flex-col md:flex-row items-center justify-center md:justify-evenly md:gap-8 gap-4 p-8 overflow-hidden relative">
      <motion.div
        className="flex flex-col  justify-center gap-7 md:w-1/3 z-10  "
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="lg:text-6xl sm:text-5xl text-4xl  " variants={textVariants}>
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋
          </span>
        </motion.h1>
        <motion.p className="sm:text-3xl text-2xl" variants={textVariants}>
          I'M{" "}
          <span className="text-teal-500 sm:text-4xl text-3xl font-semibold">
            PIYUSH KUMAR
          </span>
        </motion.p>
        <motion.div
          className="sm:text-3xl text-2xl md:pt-6 text-teal-500 font-medium"
          variants={textVariants}
        >
          <Type />
        </motion.div>
        <motion.div
          className="text-3xl gap-4 md:pt-6 flex font-medium gap"
          variants={textVariants}
        >
          <Link
            to="/contact"
            className=" flex gap-2 items-center transition ease-in-out delay-150 bg-teal-600 hover:-translate-y hover:scale-110 hover:bg-teal-700 shadow-md hover:shadow-teal-600 duration-500 text-xl font-semibold p-2 rounded-lg  text-center tracking-widest"
          >
            <TbMessage /> Contact Me
          </Link>
          <a
            href="https://github.com/piyushkumarg"
            target="_blank"
            className=" flex gap-2 items-center transition ease-in-out delay-150 bg-teal-600 hover:-translate-y  hover:scale-110 hover:bg-teal-700 shadow-md hover:shadow-teal-600 duration-500 text-xl font-semibold p-2 rounded-lg text-center tracking-widest"
          >
            <FaGithub /> Github
          </a>
        </motion.div>
      </motion.div>

      <Lottie className="md:w-1/3 z-10" animationData={bannerAnimmation} />

      <motion.div
        className="absolute text-[50vh]  whitespace-nowrap text-gray-700 opacity-25 w-1/2 font-bold"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer Freelancer
      </motion.div>
    </div>
  );
}

export default Banner;
