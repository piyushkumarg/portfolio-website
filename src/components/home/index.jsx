import React, { useEffect } from "react";
import Intro from "./Intro";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import Banner from "./Banner";
import Experience from "../experience";
import { detectClientInfo, storeIpDetails } from "../../services/helpers";

function HomePage() {
  useEffect(() => {
    const callFunction = async () => {
      const clientInfo = await detectClientInfo();
      await storeIpDetails(clientInfo);
    };

    callFunction();
  }, []);

  return (
    <>
      <Banner />
      <Intro />
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute text-content flex flex-col justify-between pb-8 ">
        <Experience />

        <div className="flex justify-center">
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

export default HomePage;
