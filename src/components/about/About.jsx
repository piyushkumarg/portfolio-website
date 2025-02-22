import React from "react";
import aboutAnimation from "../lottieFiles/aboutAnim.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { textVariants, skillsVariants } from "../motionVariants/motionVariants";

function About() {
  return (
    <>
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute text-content flex flex-col justify-between md:p-16 p-8">
        <h1 className="font-medium md:text-6xl text-4xl text-center">
          Know Who{" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl">
            i'm
          </span>
        </h1>
        <div className="flex md:flex-row flex-col-reverse justify-between sm:pt-0 pt-4">
          <Lottie className="md:w-1/3" animationData={aboutAnimation} />
          <motion.div
            className="flex flex-col text-justify justify-center gap-7 md:w-1/2"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.p className="md:text-2xl text-xl" variants={textVariants}>
              Hi Everyone{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>{" "}
              I am{" "}
              <span className="text-contentHighlight text-2xl font-semibold font-carattere tracking-widest">
                Piyush kumar
              </span>{" "}
              from Nalanda, Bihar, India. I completed my Bachelor's in{" "}
              <span className="text-contentHighlight">Computer Science</span> at
              UIET Panjab University, Chandigarh Chandigarh in 2024. I love
              building digital experiences that blend innovation with
              practicality.
            </motion.p>
            <motion.p className="md:text-xl text-lg" variants={textVariants}>
              My career objective is to leverage my skills and knowledge to
              create innovative and user-friendly web applications. With over
              10+ successfully completed freelance projects and valuable
              experience at leading companies, I've developed a strong
              foundation in both front-end and back-end development.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <Helmet>
        <title>Piyush | About</title>
      </Helmet>
    </>
  );
}

export default About;
