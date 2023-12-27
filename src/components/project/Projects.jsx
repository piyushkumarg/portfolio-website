import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { projectData } from "./data";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Projects() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-700 flex  flex-col  text-gray-200 md:p-16 p-4">
        <h1 className="font-medium md:text-6xl sm:text-4xl  text-3xl text-center">
          My Recent Works
        </h1>
        <p className="md:text-2xl text-lg text-center">
          Here are a few{" "}
          <span className="text-teal-600 font-medium">Projects</span> worked on
          recently
        </p>

        <div className="flex flex-wrap justify-center  gap-4 pt-8">
          {projectData.map((project) => (
            <div className=" border-2 p-4  border-slate-500 rounded-xl max-w-[450px]  flex flex-col gap-8 transition ease-in-out delay-150   shadow-slate-700 shadow-md hover:scale-[101%] hover:shadow-slate-500 duration-500">
              <a
                className="rounded-md  overflow-hidden  "
                href={project.live}
                target="_blank"
              >
                <img
                  src={project.img}
                  alt=""
                  className=" w-full h-full object-cover  "
                />
              </a>
              <div className="flex flex-col gap-1 text-justify">
                <h1 className="md:text-3xl text-xl font-bold tracking-wider text-teal-600">
                  {project.name}
                </h1>
                <p className="md:text-xl ">{project.desc}</p>
              </div>
              <div className="flex items-center justify-center gap-2 flex-wrap  ">
                {project.techStack.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center text-xl  rounded-xl  transition ease-in-out delay-150 bg-slate-700 p-4 hover:-translate-y-1 hover:scale-105 hover:bg-slate-800 hover:shadow-md hover:shadow-slate-700 duration-500"
                  >
                    <skill.icon />
                  </div>
                ))}
              </div>
              <div className="flex gap-4 justify-center ">
                <a
                  href={project.github}
                  target="_blank"
                  className=" flex gap-2 items-center transition ease-in-out delay-150 bg-teal-600 hover:-translate-y hover:scale-110 hover:bg-teal-700 shadow-md hover:shadow-teal-600 duration-500 text-xl font-semibold p-2 rounded-lg  text-center tracking-widest"
                >
                  <FaGithub /> Github
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className=" flex gap-2 items-center transition ease-in-out delay-150 bg-teal-600 hover:-translate-y  hover:scale-110 hover:bg-teal-700 shadow-md hover:shadow-teal-600 duration-500 text-xl font-semibold p-2 rounded-lg text-center tracking-widest"
                >
                  Live <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className=" text-2xl font-semibold p-2 rounded-lg mt-8 text-center tracking-widest transition ease-in-out delay-150 bg-teal-600 hover:-translate-y hover:scale-105 hover:bg-teal-700 shadow-md hover:shadow-teal-600 duration-500"
        >
          Contact Me
        </Link>
      </div>
      <Helmet>
        <title>
          Piyush | Projects
        </title>
      </Helmet>
    </>
  );
}

export default Projects;
