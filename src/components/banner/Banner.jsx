import React from "react";
import Type from "./Type";
import bannerAnimation from "../lottieFiles/bannerAnim.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbMessage } from "react-icons/tb";
import { techSkills } from "../about/Skills";
import { skillSliderVariants, sliderVariants, textVariants } from "../motionVariants/motionVariants";
import Design from "../particleAnimation/Design";

function Banner() {
  return (
    <div className="min-h-[calc(100vh-3.75rem)] bg-gradient-to-b from-bgDark to-bgDarkMute flex flex-col">
      <div className="flex flex-col md:flex-row items-center text-content justify-center md:justify-evenly md:gap-8 gap-4 p-8 overflow-hidden relative">
        <motion.div
          className="flex flex-col  justify-center gap-7 md:w-1/3 z-10"
          variants={textVariants}
          initial={{ x: -500, opacity: 0 }}
          animate="animate"
        >
          <motion.h1
            className="lg:text-6xl sm:text-5xl text-4xl  "
            variants={textVariants}
          >
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋
            </span>
          </motion.h1>
          <motion.p className="sm:text-3xl text-2xl" variants={textVariants}>
            I'M{" "}
            <span className="text-contentHighlight sm:text-5xl text-3xl font-semibold font-carattere tracking-widest">
              Piyush kumar
            </span>
          </motion.p>
          <motion.div
            className="sm:text-3xl text-2xl md:pt-6 text-contentHighlight font-medium"
            variants={textVariants}
          >
            <Type />
          </motion.div>
          <motion.div
            className="sm:text-xl text-lg  gap-4 md:pt-6 flex font-medium gap"
            variants={textVariants}
          >
            <Link
              to="/contact"
              className=" flex gap-2  items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg  text-center sm:tracking-widest"
            >
              <TbMessage /> Contact Me
            </Link>
            <a
              href="https://github.com/piyushkumarg"
              target="_blank"
              className=" flex gap-2 items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y  hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg text-center sm:tracking-widest"
            >
              <FaGithub /> Github
            </a>
          </motion.div>
        </motion.div>

        <Lottie className="md:w-1/3 z-10" animationData={bannerAnimation} />

        {/* Background Slider */}
        <motion.div
          className="absolute text-[50vh]  whitespace-nowrap text-bgDarkMute opacity-25 w-1/2 font-bold"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Software Developer Freelancer
        </motion.div>

        {/* Particle Background */}
       
      </div>

      <div className="bg-gradient-to-r from-bgDark/50 to-bgDarkMute/50 p-4 md:pl-16 ">
        <div className="relative overflow-hidden md:w-1/2 w-full flex justify-center items-center">
          <motion.div variants={skillSliderVariants}
            initial="initial"
            animate="animate"
            className="flex gap-8">
            {techSkills.map((skill) => (


              <div
                key={skill.id}
                className="cursor-pointer">
                <skill.icon
                  className="text-4xl"
                  style={{ color: skill.color }}
                />
              </div>

            ))}
          </motion.div>
        </div>
        
      </div>
      <div className="w-full h-screen absolute top-0 left-0 ">
        <Design />
      </div>
    </div>
  );
}

export default Banner;
