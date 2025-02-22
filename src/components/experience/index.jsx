import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skillsVariants } from "../motionVariants/motionVariants";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Experience Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Experience Section */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-12 text-contentHighlight">
            Professional Journey
          </h2>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {/* Driffle Experience */}
            <motion.div
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
              className="relative pl-8 border-l-2 border-blue-500/30"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 ring-4 ring-blue-500/20" />
              <div className="bg-gray-800/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-2">Software Developer</h3>
                <p className="text-blue-400 mb-4">
                  Driffle • Full-time • Feb 2024 - Present
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    Engineered Real-Time Marketing Feeds processing 100M+
                    updates daily
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    Developed Payment Management Module reducing processing time
                    by 30%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    Implemented Redis-based bulk product updates handling 5K+
                    records/batch
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Freelance Experience */}
            <motion.div
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
              className="relative pl-8 border-l-2 border-yellow-500/30"
            >
              <div className="absolute w-4 h-4 bg-yellow-500 rounded-full -left-[9px] top-0 ring-4 ring-yellow-500/20" />
              <div className="bg-gray-800/30 rounded-xl p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Freelance Developer
                    </h3>
                    <p className="text-yellow-400 mb-4">
                      10+ Successful Projects • 2021 - Present
                    </p>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    10+
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-gray-700/30 p-3 rounded-lg text-center">
                    <span className="text-sm text-yellow-400">E-commerce</span>
                  </div>
                  <div className="bg-gray-700/30 p-3 rounded-lg text-center">
                    <span className="text-sm text-yellow-400">
                      SAAS Platforms
                    </span>
                  </div>
                  <div className="bg-gray-700/30 p-3 rounded-lg text-center">
                    <span className="text-sm text-yellow-400">
                      CMS Development
                    </span>
                  </div>
                  <div className="bg-gray-700/30 p-3 rounded-lg text-center">
                    <span className="text-sm text-yellow-400">
                      API Integrations
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Digilabs Experience */}
            <motion.div
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
              className="relative pl-8 border-l-2 border-purple-500/30"
            >
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0 ring-4 ring-purple-500/20" />
              <div className="bg-gray-800/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-2">
                  Full Stack Developer Intern
                </h3>
                <p className="text-purple-400 mb-4">
                  Digilabs • Internship • Dec 2023 - Feb 2024
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">▹</span>
                    Developed full-stack features for enterprise SaaS platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">▹</span>
                    Implemented CI/CD pipelines reducing deployment time by 40%
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">▹</span>
                    Optimized database queries improving API response times by
                    25%
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Mediversal Experience */}
            <motion.div
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
              className="relative pl-8 border-l-2 border-green-500/30"
            >
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0 ring-4 ring-green-500/20" />
              <div className="bg-gray-800/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-2">
                  {" "}
                  Full Stack Developer Intern
                </h3>
                <p className="text-green-400 mb-4">
                  Mediversal • Internship • Oct 2023 - Dec 2023
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">▹</span>
                    Built healthcare management system modules using MERN stack
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">▹</span>
                    Created real-time patient monitoring dashboard with
                    WebSockets
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">▹</span>
                    Integrated HL7 FHIR standards for medical data
                    interoperability
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section remains similar with updated content */}
      </div>
    </>
  );
};

export default Experience;
