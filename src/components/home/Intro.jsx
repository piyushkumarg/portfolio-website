import React from "react";
import avtarAnimation from "../lottieFiles/avtarAnim.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";
import SkillSection from "../about/SkillSection";
import { techSkills } from "../about/Skills";
import { FaFileAlt, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function Intro() {
  return (
    // Used in Home page
    <>
      <div className="bg-gradient-to-b from-bgDarkMute to-bgDark  text-content flex flex-col justify-between  items-center p-8">
        <h1 className="font-medium md:text-6xl sm:text-4xl text-3xl text-center ">
          LET ME{" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
            introduce
          </span>{" "}
          MYSELF
        </h1>

        <motion.div
          className="flex lg:flex-row flex-col-reverse items-center justify-between "
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <Lottie className="lg:w-1/2  w-4/5" animationData={avtarAnimation} />
          <div className="flex flex-col text-justify justify-center gap-7 lg:w-1/2 md:w-4/5 md:text-xl text-lg pt-8 lg:pb-8">
            <motion.p variants={textVariants}>
              Hey there!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>{" "}
              I'm{" "}
              <span className="text-contentHighlight text-2xl font-semibold font-carattere tracking-widest">
                Piyush kumar
              </span>
              , a passionate Software Engineering undergrad at UIET Panjab
              University, Chandigarh. 💻 By day, I'm a tech enthusiast exploring the wonders
              of coding, and by night, I transform into an aspiring full-stack
              developer.
            </motion.p>

            <motion.p variants={textVariants}>
              I am fluent in classics like{" "}
              <span className="text-contentHighlight font-medium">
                C/C++, JavaScript
              </span>
              . I've honed my skills in frontend technologies and Modern
              Javascript Library or Frameworks like{" "}
              <span className="text-contentHighlight font-medium">
                React.js, Next.js, Redux and TailwindCSS{" "}
              </span>{" "}
              as well as backend tools such as{" "}
              <span className="text-contentHighlight font-medium">
                NodeJS and MongoDB
              </span>
              .
            </motion.p>
            <motion.p variants={textVariants}>
              My field of Interest's are building new Web Technologies and
              Products and also in areas related to{" "}
              <span className="text-contentHighlight font-medium">
                Blockchain & DevOps
              </span>
              .
            </motion.p>
            <div className="flex justify-center">
              <Link
                to={'/resume'}
                className=" flex gap-2 px-6  items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg  text-center sm:tracking-widest"
              >
                <FaFileAlt />Check Out My CV
              </Link>
            </div>

          </div>
        </motion.div>

      </div>

      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute text-content flex flex-col md:gap-12 gap-8 pb-8 md:px-16 px-4 ">
        <motion.h1
          className="font-medium md:text-6xl text-3xl text-center"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          Area of {" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
            Expertise
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
        <div className="flex justify-center">
          <Link
            to={'/projects'}
            className=" flex gap-2 px-6  items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg  text-center sm:tracking-widest"
          >
            <FaLaptopCode />Take a Look at My Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Intro;
