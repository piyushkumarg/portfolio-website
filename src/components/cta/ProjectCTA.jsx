import React from "react";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";
import { FaCode, FaGamepad, FaRobot } from "react-icons/fa";
import { TbLifebuoy } from "react-icons/tb";

const ProjectCTA = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
      <a href="https://deepcore.in" target="_blank" rel="noopener noreferrer">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="cursor-pointer bg-gray-800  bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl sm:p-8 p-2 border-2 border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 group font-medium"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Deepcore
              </h3>
              <p className="text-lg text-gray-300 mt-2">
                AI Solutions & Development Ecosystem
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 group-hover:scale-105">
              <span>Explore Platform</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Deepcore empowers industries with customizable AI agents while
            providing comprehensive development services and developer support.
            Our platform combines professional tools with leisure through
            integrated gaming experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-500/10 sm:p-4 p-2 rounded-lg">
              <FaRobot className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-100 mb-2">
                AI Agent Deployment
              </h4>
              <p className="text-gray-400">
                Enterprise-ready AI solutions for various industry verticals
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-500/10 sm:p-4  p-2 rounded-lg">
              <FaCode className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-100 mb-2">
                Web Development
              </h4>
              <p className="text-gray-400">
                Full-stack development services with modern tech stack
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-500/10 sm:p-4 p-2 rounded-lg">
              <TbLifebuoy className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-100 mb-2">
                Developer Support
              </h4>
              <p className="text-gray-400">
                Comprehensive resources & community-driven assistance
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-500/10 sm:p-4 p-2 rounded-lg">
              <FaGamepad className="w-8 h-8 text-orange-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-100 mb-2">
                Leisure Games
              </h4>
              <p className="text-gray-400">
                Curated collection of casual games for relaxation
              </p>
            </div>
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default ProjectCTA;
