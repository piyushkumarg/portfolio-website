import React from "react";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";
import { Link } from "react-router-dom";
const ProjectCTA = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full text-content text-lg font-medium">
      {/* Deepcore AI Project */}
      <a href="https://deepcore.in" target="_blank">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="cursor-pointer bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl sm:p-8 p-2 border-2 overflow-hidden border-blue-900/30 hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-purple-900/50 hover:border-blue-900/50"
        >
          <div className="flex sm:flex-row flex-col gap-4 sm:items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-contentHighlight">
              Deepcore AI
            </h3>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-content px-6 py-2 rounded-full 
                         transition-all duration-300 hover:scale-105 flex items-center"
            >
              Visit Platform
            </button>
          </div>
          <p className="text-content/80 mb-6">
            An AI-powered syllabus management platform that helps students track
            their learning progress and provides intelligent insights for better
            study planning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-content/10 rounded-lg sm:p-4 p-2">
              <h4 className="font-semibold mb-2">AI Integration</h4>
              <p className="text-content/70">
                Smart progress tracking and personalized recommendations
              </p>
            </div>
            <div className="bg-content/10 rounded-lg sm:p-4 p-2">
              {/* <Code className="w-6 h-6 text-blue-400 mb-2" /> */}
              <h4 className="font-semibold mb-2">Modern Tech Stack</h4>
              <p className="text-content/70">
                Built with Next.js, Node.js, and PostgreSQL
              </p>
            </div>
            <div className="bg-content/10 rounded-lg sm:p-4 p-2">
              {/* <Star className="w-6 h-6 text-blue-400 mb-2" /> */}
              <h4 className="font-semibold mb-2">Performance</h4>
              <p className="text-content/70">
                Optimized for speed and scalability
              </p>
            </div>
          </div>
        </motion.div>
      </a>
      {/* </section> */}
    </div>
  );
};

export default ProjectCTA;
