import React from "react";
import Socialicons from "../common/Socialicons";
import FooterBg from "./FooterBg";
import { Link } from "react-router-dom";
import { RiKakaoTalkLine } from "react-icons/ri";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-900 text-gray-200  flex justify-center items-center gap-6 pb-4 text-lg w-full relative select-none bg-cover flex-col">
        <FooterBg />
        <div className="absolute top-4 flex flex-col justify-center items-center gap-5 font-carattere tracking-[0.2em] ">
          <p className="md:text-3xl text-xl text-center ">
            Feel free to <span className="text-teal-500">connect</span> with me
          </p>
          <div className="flex justify-center  ">
            <Socialicons />
          </div>
          <Link
            to="/contact"
            className=" flex gap-2 items-center border-2 w-fit border-teal-600 justify-center transition ease-in-out delay-150 hover:-translate-y hover:scale-110 duration-500 text-lg text-teal-600 font-semibold p-2 rounded-lg  tracking-widest"
          >
            Let's Talk <RiKakaoTalkLine />
          </Link>
        </div>
      </footer>
      <div className="sticky bottom-0 bg-gray-900 text-gray-200  flex justify-center items-center p-1 z-50">
        <p className="font-carattere tracking-[0.2em] flex items-center gap-2 ">
          &copy; {currentYear} Designed & Code by{" "}
         
            <p className="flex gap-1 items-center sm:text-xl  font-semibold font-carattere ">
              <img src="./logo.svg" alt="" className="w-[1.5rem]" />
              iyush
            </p>
          
        </p>
      </div>
    </>
  );
}

export default Footer;
