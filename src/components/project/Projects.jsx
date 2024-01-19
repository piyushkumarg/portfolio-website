import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectData } from "./data";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { textVariants, skillsVariants } from "../motionVariants/motionVariants";
import Image from "../lazyLoadImage/Image";

function Projects() {
  return (
    <>
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute flex  flex-col  text-content md:p-16 p-4">
        <h1 className="font-medium md:text-6xl sm:text-4xl  text-3xl text-center">
          My Recent{" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
            Works{" "}
          </span>
        </h1>
        <p className="md:text-2xl text-lg text-center">
          Here are a few{" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-3xl text-xl ">
            Projects
          </span>{" "}
          worked on recently
        </p>

        <div className="flex flex-wrap justify-center  gap-4 pt-8">
          {projectData.map((project, i) => (
            <motion.div
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
              custom={i}
              className="border-2 p-4 bg-skillBgHover  border-bgDarkMute rounded-xl max-w-[450px] transition ease-in-out delay-150  hover:scale-110 hover:bg-bgDark hover:shadow-bgDarkMute    shadow-md  duration-500"
            >
              <motion.div
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                custom={i}
                className=" flex flex-col gap-8"
              >
                <div className="relative group flex flex-col items-center justify-center ">
                  <motion.a
                    variants={textVariants}
                    className="rounded-md  overflow-hidden  "
                    href={project.live}
                    target="_blank"
                  >
                    <Image
                      src={project.img}
                      alt=""
                      className=" w-full h-full object-cover aspect-[2/1]  "
                    />
                  </motion.a>
                  <div className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm rounded-md py-1 px-2 absolute  font-sans tracking-normal ">
                    {project.live}
                  </div>
                </div>
                <motion.div
                  variants={textVariants}
                  className="flex flex-col gap-1 text-justify"
                >
                  <h1 className="md:text-3xl text-xl font-bold tracking-wider text-contentHighlight">
                    {project.name}
                  </h1>
                  <p className="md:text-lg ">{project.desc}</p>
                </motion.div>
                <motion.div
                  variants={textVariants}
                  className="flex items-center justify-center gap-2 flex-wrap  "
                >
                  {project.techStack.map((skill) => (
                    <div
                      key={skill.id}
                      className="relative group flex flex-col items-center text-xl rounded-xl transition ease-in-out delay-150 bg-skillBg p-4 hover:-translate hover:scale-105 hover:bg-skillBgHover hover:shadow-md hover:shadow-skillBg duration-500 "
                    >
                      <div className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs rounded-md py-1 px-2 absolute top-full ">
                        {skill.name}
                      </div>
                      <div className="cursor-pointer">
                        <skill.icon
                          className="text-xl"
                          style={{ color: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  variants={textVariants}
                  className="flex gap-4 justify-center "
                >
                  <a
                    href={project.github}
                    target="_blank"
                    className=" flex gap-2 items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500 text-lg font-semibold p-2 rounded-lg  text-center tracking-widest"
                  >
                    <FaGithub /> Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className=" flex gap-2 items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y  hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500 text-lg font-semibold p-2 rounded-lg text-center tracking-widest"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* <Link
          to="/contact"
          className=" text-2xl font-semibold p-2 rounded-lg mt-8 text-center tracking-widest transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-105 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500"
        >
          Contact Me
        </Link> */}
      </div>
      <Helmet>
        <title>Piyush | Projects</title>
      </Helmet>
    </>
  );
}

export default Projects;
