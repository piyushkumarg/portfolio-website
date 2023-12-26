import React from "react";
import aboutAnimation from "./aboutAnim.json";
import Lottie from "lottie-react";
import Socialicons from "../common/Socialicons";
import { techSkills, toolStacks } from "./Skills";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700  text-white flex flex-col justify-between  md:p-16 p-8">
      <h1 className="font-medium md:text-6xl text-4xl text-center ">
        Know Who <span className="text-teal-500">I'M</span>
      </h1>
      <div className="flex md:flex-row flex-col-reverse justify-between ">
        <Lottie className="md:w-1/3" animationData={aboutAnimation} />
        <div className="flex flex-col text-justify  justify-center gap-7 md:w-1/2 ">
          <p className="md:text-2xl text-xl  ">
            Hi Everyone, I am{" "}
            <span className="text-teal-500 font-semibold ">Piyush Kumar</span>{" "}
            from Nalanda, Bihar, India. I am currently as a
            <span className="text-teal-500"> Computer Science</span> undergrad
            at UIET Panjab University. I love building digital experiences that
            blend innovation with practicality.
          </p>
          <p className="md:text-xl text-lg ">
            My career objective is to use my skills and knowledge to the create
            innovative and user-friendly web applications. I am passionate about
            crafting engaging user experiences and staying up to date with the
            latest web technologies and trends. My goal is to work in a
            collaborative environment where I can contribute my expertise in
            front-end and back-end development to build scalable web solutions.
          </p>
        </div>
      </div>

      <div>
        <div className="p-8">
          <h1 className="font-medium md:text-6xl text-4xl text-center">
            Professional <span className="text-teal-500">Skills</span>
          </h1>
          <div className="flex items-center justify-center gap-16 flex-wrap pt-16">
            {techSkills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center gap-2 text-8xl   rounded-xl  transition ease-in-out delay-150 bg-slate-700 p-4 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-500"
              >
                <skill.icon />
                <p className="text-base">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" p-8">
          <h1 className="font-medium md:text-6xl text-4xl text-center">
            <span className="text-teal-500">Tools</span> I Use
          </h1>
          <div className="flex items-center justify-center gap-16 flex-wrap pt-16">
            {toolStacks.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center gap-2 text-8xl   rounded-xl  transition ease-in-out delay-150 bg-slate-700 p-4 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-500"
              >
                <skill.icon />
                <p className="text-base">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        to="/contact"
        className="bg-teal-700 hover:bg-teal-600 text-2xl font-semibold p-2 rounded-lg mt-8 text-center tracking-widest"
      >
        Contact Me
      </Link>
    </div>
  );
}

export default About;
