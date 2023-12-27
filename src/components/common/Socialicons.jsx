import React from 'react'

import { FaLinkedin, FaGithub, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/piyush-kumarg/",
    icon: FaLinkedin,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/piyushkumarg",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "leetcode",
    link: "https://leetcode.com/piyushkumarg/",
    icon: SiLeetcode,
  },
  {
    id: 4,
    name: "telegram",
    link: "https://t.me/PiyushKumarReal",
    icon: FaTelegram,
  },
  {
    id: 5,
    name: "twitter",
    link: "https://twitter.com/piyushkumarreal",
    icon: FaXTwitter,
  },
  {
    id: 5,
    name: "Instagram",
    link: "https://instagram.com/piyushkumarreal",
    icon: FaInstagramSquare,
  },
];

function Socialicons() {
  return (
    <div className="flex text-2xl flex-wrap  gap-4 ">
      {socialLinks?.map((social) => (
        <div
          key={social.id}
          className="transition ease-in-out delay-150 hover:-translate-y hover:scale-110  shadow-md hover:shadow-teal-600 duration-500"
        >
          <a
            href={social.link}
            className="hover:text-teal-500 transition ease-in-out delay-150 hover:-translate-y hover:scale-110 hover:bg-teal-700 shadow-md  duration-500"
            target="_blank"
          >
            <social.icon />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Socialicons;