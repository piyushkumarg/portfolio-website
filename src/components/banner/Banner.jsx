import React from "react";
import Type from "./Type";
import bannerAnimmation from "./bannerAnim.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

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
    <div className="h-[calc(100vh-3.75rem)] bg-gradient-to-b from-gray-900 to-gray-800  text-gray-200 flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 p-8 overflow-hidden relative">
      <motion.div
        className=" flex flex-col  justify-center gap-7 md:w-1/3 z-10 "
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="lg:text-6xl text-5xl" variants={textVariants}>
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋
          </span>
        </motion.h1>
        <motion.p className="text-3xl" variants={textVariants}>
          I'M{" "}
          <span className="text-teal-500 text-4xl font-semibold">
            PIYUSH KUMAR
          </span>
        </motion.p>
        <motion.div
          className="text-3xl pt-6 text-teal-500 font-medium"
          variants={textVariants}
        >
          <Type />
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
