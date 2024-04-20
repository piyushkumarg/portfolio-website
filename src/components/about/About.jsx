import React from "react";
import aboutAnimation from "../lottieFiles/aboutAnim.json";
import Lottie from "lottie-react";
import { techSkills } from "./Skills";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { textVariants, skillsVariants } from "../motionVariants/motionVariants";
import SkillSection from "./SkillSection";

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
              <span className="text-contentHighlight"> Computer Science</span>{" "}
              undergrad at UIET Panjab University, Chandigarh. I love building digital
              experiences that blend innovation with practicality.
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

        {/* <div className="flex flex-col md:gap-12 gap-8 md:pt-16 pt-4">
          <motion.h1
            className="font-medium md:text-6xl text-3xl text-center"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            Educational {" "}
            <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
              Journey
            </span>
          </motion.h1>

          <SkillSection
            heading="Languages I Use"
            skills={techSkills.filter((skill) => skill.type === "Languages")}
          />
          <SkillSection
            heading="Frontend Skills"
            skills={techSkills.filter((skill) => skill.type === "Frontend")}
          />
          <SkillSection
            heading="Backend Skills"
            skills={techSkills.filter((skill) => skill.type === "Backend")}
          />
          <SkillSection
            heading="Tools I Use"
            skills={techSkills.filter((skill) => skill.type === "Tools")}
          />
        </div> */}
        {/* Professional Skills */}
        <div className="flex flex-col md:gap-12 gap-8 md:pt-16 pt-4">
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

          <SkillSection
            heading="Languages I Use"
            skills={techSkills.filter((skill) => skill.type === "Languages")}
          />
          <SkillSection
            heading="Frontend Skills"
            skills={techSkills.filter((skill) => skill.type === "Frontend")}
          />
          <SkillSection
            heading="Backend Skills"
            skills={techSkills.filter((skill) => skill.type === "Backend")}
          />
          <SkillSection
            heading="Tools I Use"
            skills={techSkills.filter((skill) => skill.type === "Tools")}
          />
        </div>
      </div>
      <Helmet>
        <title>Piyush | About</title>
      </Helmet>
    </>
  );
}

export default About;

