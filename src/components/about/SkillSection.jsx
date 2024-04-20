import React from 'react'
import { motion } from "framer-motion";
import { textVariants, skillsVariants } from "../motionVariants/motionVariants";
function SkillSection({ heading, skills }) {
    return (
        <div>
            <motion.div
                className="flex flex-col justify-center items-center gap-[1px] font-medium  md:text-5xl text-3xl text-center text-contentHighlight font-carattere tracking-widest"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
            >
                {heading}
                <div className="h-[2.5px] rounded-md w-[150px]  bg-contentHighlight">

                </div>
            </motion.div>
            <motion.div
                className=" flex items-center justify-center md:gap-8 gap-4 flex-wrap pt-4  "
                variants={skillsVariants}
                initial="initial"
                whileInView="animate"
            >
                {skills.map((skill, i) => (
                    <motion.div
                        key={`skill-${i}`}
                        variants={skillsVariants}
                        custom={i}
                        className="flex flex-col items-center gap-2 text-8xl  rounded-xl cursor-pointer  transition ease-in-out delay-150 bg-skillBg p-4 hover:-translate-y-1 hover:scale-110 hover:bg-skillBgHover shadow-md hover:skillShadow duration-500"
                    >
                        <skill.icon style={{ color: skill.color }} />
                        <p className="text-base">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}


export default SkillSection
