import React from "react";
import Socialicons from "../common/Socialicons";
import FooterBg from "./FooterBg";
import { Link } from "react-router-dom";
import { RiKakaoTalkLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";

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
            className=" flex gap-2 items-center   border-2 w-fit border-teal-600 justify-center transition ease-in-out delay-150 hover:-translate-y hover:scale-110 duration-500 text-lg text-teal-600 font-semibold p-2 rounded-lg  tracking-widest"
          >
            Let's Talk <RiKakaoTalkLine />
          </Link>
        </div>
      </footer>
      <div className="sticky bottom-0 border-none bg-gray-900 text-gray-200  flex justify-end items-center p-1 md:pr-4 z-50 ">
        <div className="absolute bottom-[110%] md:text-5xl text-4xl group flex flex-row-reverse pr-2 pb-1">
          <div className="opacity-0 group-hover:opacity-100 md:mr-6 mr-4 md:pr-8 pr-6 bg-[#0088CC] bottom-[5%] text-white md:text-2xl rounded-md py-1 px-2 text-xl absolute font-carattere tracking-widest ">
            Contact
          </div>
          <a
            href="https://t.me/PiyushKumarReal"
            className="bg-gray-200 text-[#0088CC] border-none rounded-full transition ease-in-out delay-150       hover:-translate hover:scale-105  hover:shadow-sm hover:shadow-[#0088CC] duration-500 z-10"
            target="_blank"
          >
            <FaTelegram />
          </a>
        </div>
        <div className="font-carattere tracking-[0.2em] flex items-center gap-2  w-full justify-center ">
          &copy; {currentYear} Designed & Code by{" "}
          <div className="flex gap-1 items-center sm:text-xl  font-semibold font-carattere ">
            <img src="./logo.svg" alt="" className="w-[1.5rem]" />
            iyush
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
