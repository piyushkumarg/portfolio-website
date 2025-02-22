import React from "react";
import Banner from "../components/home/Banner";
import Intro from "../components/home/Intro";
import Experience from "../components/experience";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

function Home() {
  return (
    <>
      <Banner />
      <Intro />
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute text-content flex flex-col justify-between md:pb-16 pb-8 ">
        <Experience />

        <div className="flex justify-center mt-8">
          <Link
            to={"/projects"}
            className=" flex gap-2 px-6  items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg  text-center sm:tracking-widest"
          >
            <FaLaptopCode />
            Take a Look at My Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
