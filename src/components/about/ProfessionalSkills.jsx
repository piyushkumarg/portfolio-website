import React from "react";
import { techSkills } from "./Skills";

import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";
import SkillSection from "./SkillSection";

function ProfessionalSkills() {
  return (
    <>
      <div className="bg-gradient-to-b from-bgDarkMute to-bgDark text-content flex flex-col justify-between p-8">
        <div className="flex flex-col md:gap-12 gap-8 md:pt-16 pt-4">
          <motion.h1
            className="font-medium md:text-6xl text-3xl text-center"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            Professional{" "}
            <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl">
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
    </>
  );
}

export default ProfessionalSkills;
