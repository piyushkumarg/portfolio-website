import React from "react";

import {
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/piyush-kumarg/",
    icon: FaLinkedin,
    color: "#0077B5",
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/piyushkumarg",
    icon: FaGithub,
    color: "#181717",
  },
  {
    id: 3,
    name: "leetcode",
    link: "https://leetcode.com/piyushkumarg/",
    icon: SiLeetcode,
    color: "#FFA116",
  },
  {
    id: 4,
    name: "telegram",
    link: "https://t.me/PiyushKumarReal",
    icon: FaTelegram,
    color: "#0088cc",
  },
  {
    id: 5,
    name: "twitter",
    link: "https://twitter.com/piyushkumarreal",
    icon: FaXTwitter,
    color: "#000000",
  },
  {
    id: 6,
    name: "Instagram",
    link: "https://instagram.com/piyushkumarreal",
    icon: FaInstagramSquare,
    color: "#C13584",
  },
];

function Socialicons() {
  return (
    <div className="flex text-2xl flex-wrap  gap-2 ">
      {socialLinks?.map((social) => (
        <div
          key={social.id}
          className="relative group flex flex-col items-center rounded-xl transition ease-in-out delay-150  border-[1px] border-gray-500 p-2  hover:-translate hover:scale-105  hover:shadow-md hover:shadow-slate-700 duration-500"
        >
          <a
            href={social.link}
            style={{
              color: social.color,
              backgroundColor: "#FFFFFF",
              borderRadius: "0.25rem",
            }}
            target="_blank"
          >
            <social.icon />
          </a>
          <div className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs rounded-md py-1 px-2 absolute bottom-full font-sans tracking-normal ">
            {social.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Socialicons;
