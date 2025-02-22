import React from "react";
import About from "../components/about/About";
import EducationDetails from "../components/academic";
import Experience from "../components/experience";
import ProfessionalSkills from "../components/about/ProfessionalSkills";
import ProjectCTA from "../components/cta/ProjectCTA";

function AboutPage() {
  return (
    <>
      <About />
      <div className="bg-gradient-to-b from-bgDarkMute to-bgDark text-content flex flex-col justify-between">
        <EducationDetails />
      </div>
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute text-content flex flex-col justify-between">
        <Experience />
      </div>
      <ProfessionalSkills />
      <ProjectCTA />
    </>
  );
}

export default AboutPage;
