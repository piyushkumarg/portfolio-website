import React from "react";

export default function AcademicDetails() {
  return (
    <div className="text-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Education Section */}
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-contentHighlight to-contentHighlight/90 bg-clip-text text-transparent">
        Academic Background
      </h2>

      {/* Education Timeline */}
      <div className="space-y-12">
        {/* Bachelor's Degree */}
        <div className="relative pl-8 border-l-2 border-green-500/30">
          <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0 ring-4 ring-green-500/20" />
          <div className="bg-gray-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">
              Bachelor of Engineering in Computer Science
            </h3>
            <p className="text-green-400 mb-4">
              Panjab University, Chandigarh • Jul 2020 - Jun 2024
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="bg-green-500/10 p-3 rounded-lg flex-1">
                <p className="text-sm text-green-400">Final GPA</p>
                <p className="text-2xl font-bold">8.80/10</p>
              </div>
              <div className="bg-blue-500/10 p-3 rounded-lg flex-1">
                <p className="text-sm text-blue-400">Specialization</p>
                <p className="font-medium">Software Systems</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">▹</span>
                Coursework: Algorithms, Database Systems, Computer Networks,
                AI/ML
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">▹</span>
                Final Year Project: AI-powered Learning Management System
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">▹</span>
                Dean's List: 3 consecutive semesters
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        {/* <div className="relative pl-8 border-l-2 border-blue-500/30">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 ring-4 ring-blue-500/20" />
            <div className="bg-gray-800/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">
                Certifications & Courses
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-blue-400 mb-2">
                    Full Stack Development Specialization
                  </p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Coursera • 2023</span>
                    <span>Grade: 98.4%</span>
                  </div>
                </div>
                <div>
                  <p className="text-blue-400 mb-2">
                    AWS Certified Developer - Associate
                  </p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Amazon Web Services • 2024</span>
                    <span>Score: 892/1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        {/* Academic Achievements */}
        {/* <div className="relative pl-8 border-l-2 border-purple-500/30">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0 ring-4 ring-purple-500/20" />
            <div className="bg-gray-800/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <p className="text-purple-400 mb-2">
                    Smart India Hackathon 2023
                  </p>
                  <p className="text-sm text-gray-400">
                    National Finalist • Education Technology Category
                  </p>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <p className="text-purple-400 mb-2">Research Publication</p>
                  <p className="text-sm text-gray-400">
                    IEEE Conference on Machine Learning Applications
                  </p>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}
