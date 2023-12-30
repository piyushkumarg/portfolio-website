import React from "react";
import aboutAnimation from "./aboutAnim.json";
import Lottie from "lottie-react";
import { techSkills, toolStacks } from "./Skills";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { textVariants, skillsVariants } from "../motionVariants/motionVariants";


function About() {
  return (
    <>
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute  text-content flex flex-col justify-between  md:p-16 p-8">
        <h1 className="font-medium md:text-6xl text-4xl text-center ">
          Know Who{" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
            i'm
          </span>
        </h1>
        <div className="flex md:flex-row flex-col-reverse justify-between sm:pt-0 pt-4">
          <Lottie className="md:w-1/3" animationData={aboutAnimation} />
          <motion.div
            className="flex flex-col text-justify  justify-center gap-7 md:w-1/2 "
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.p className="md:text-2xl text-xl  " variants={textVariants}>
              Hi Everyone{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>{" "}
              I am{" "}
              <span className="text-contentHighlight text-2xl font-semibold font-carattere tracking-widest ">
                Piyush kumar
              </span>{" "}
              from Nalanda, Bihar, India. I am currently as a
              <span className="text-contentHighlight"> Computer Science</span> undergrad
              at UIET Panjab University. I love building digital experiences
              that blend innovation with practicality.
            </motion.p>
            <motion.p className="md:text-xl text-lg " variants={textVariants}>
              My career objective is to use my skills and knowledge to the
              create innovative and user-friendly web applications. I am
              passionate about crafting engaging user experiences and staying up
              to date with the latest web technologies and trends. My goal is to
              work in a collaborative environment where I can contribute my
              expertise in front-end and back-end development to build scalable
              web solutions.
            </motion.p>
          </motion.div>
        </div>

        <div>
          <div className="md:p-8   ">
            <motion.h1
              className="font-medium md:text-6xl text-3xl text-center"
              variants={textVariants}
              initial="initial"
              whileInView="animate"
            >
              Professional{" "}
              <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
                Skills
              </span>
            </motion.h1>
            <motion.div
              className="flex items-center justify-center md:gap-16 gap-4 flex-wrap md:pt-16 pt-8 "
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
            >
              {techSkills.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  variants={skillsVariants}
                  custom={i}
                  className="flex flex-col items-center gap-2 text-8xl  rounded-xl cursor-pointer  transition ease-in-out delay-150 bg-skillBg p-4 hover:-translate-y-1 hover:scale-110 hover:bg-skillBgHover shadow-md hover:skillShadow duration-500"
                >
                  <skill.icon />
                  <p className="text-base">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="md:p-8 pt-8   ">
            <motion.h1
              className="font-medium md:text-6xl text-3xl text-center"
              variants={textVariants}
              initial="initial"
              whileInView="animate"
            >
              <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
                Tools
              </span>{" "}
              I Use
            </motion.h1>
            <motion.div
              className="flex items-center justify-center md:gap-16 gap-4 flex-wrap md:pt-16 pt-8 "
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
            >
              {toolStacks.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  variants={skillsVariants}
                  custom={i}
                  className="flex flex-col items-center gap-2 text-8xl  rounded-xl cursor-pointer  transition ease-in-out delay-150 bg-skillBg p-4 hover:-translate-y-1 hover:scale-110 hover:bg-skillBgHover shadow-md hover:skillShadow duration-500"
                >
                  <skill.icon />
                  <p className="text-base">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Piyush | About</title>
      </Helmet>
    </>
  );
}

export default About;
