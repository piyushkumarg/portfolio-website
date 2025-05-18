import React from "react";
import avtarAnimation from "../lottieFiles/avtarAnim.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";
import ProjectCTA from "../cta/ProjectCTA";

function Intro() {
  return (
    // Used in Home page
    <>
      <div className="bg-gradient-to-b from-bgDarkMute to-bgDark text-content flex flex-col justify-between items-center p-8">
        <h1 className="font-medium md:text-6xl sm:text-4xl text-3xl text-center">
          LET ME{" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl">
            introduce
          </span>{" "}
          MYSELF
        </h1>

        <motion.div
          className="flex lg:flex-row flex-col-reverse items-center justify-between"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <Lottie className="lg:w-1/2 w-4/5" animationData={avtarAnimation} />
          <div className="flex flex-col text-justify justify-center gap-7 lg:w-1/2 md:w-4/5 md:text-xl text-lg pt-8 lg:pb-8">
            <motion.p variants={textVariants}>
              Hey there!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>{" "}
              I'm{" "}
              <span className="text-contentHighlight text-2xl font-semibold font-carattere tracking-widest">
                Piyush Kumar
              </span>
              , a Software Engineer with over 2 year of professional experience.
              in building and maintaining scalable web applications. I’m
              currently working at Driffle as a Software Engineer, where I focus
              on developing real-time systems and scalable backend solutions.
              Previously, I've contributed as a{" "}
              <span className="text-contentHighlight font-medium">
                Full Stack Developer at Digilabs and Mediversal
              </span>
              , where I honed my skills in both frontend and backend
              technologies. I've also successfully delivered{" "}
              <span className="text-contentHighlight font-medium">
                10+ freelance projects
              </span>
              , demonstrating my ability to work independently and deliver
              client-focused solutions.
            </motion.p>

            <motion.p variants={textVariants}>
              My tech stack includes{" "}
              <span className="text-contentHighlight font-medium">
                TypeScript, JavaScript, Node.js, React.js, Next.js, Express.js
              </span>
              , and I'm proficient with databases like{" "}
              <span className="text-contentHighlight font-medium">
                PostgreSQL, MongoDB, and Redis
              </span>
              . I've worked extensively with modern tools like{" "}
              <span className="text-contentHighlight font-medium">
                Fastify, Prisma, NestJS, and Apache Airflow
              </span>
              .
            </motion.p>

            <motion.p variants={textVariants}>
              My passion lies in building scalable web applications and
              exploring emerging technologies in{" "}
              <span className="text-contentHighlight font-medium">
                Cloud Computing, DevOps, and System Design
              </span>
              . I'm constantly learning and adapting to new technologies while
              maintaining a strong foundation in software development
              principles.
            </motion.p>

            {/* <div className="flex justify-center">
              <Link
                to={"/resume"}
                className="flex gap-2 px-6 items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500 font-semibold p-2 rounded-lg text-center sm:tracking-widest"
              >
                <FaFileAlt />
                Check Out My CV
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
      <ProjectCTA />
    </>
  );
}

export default Intro;
