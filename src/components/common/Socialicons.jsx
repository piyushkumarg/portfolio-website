import React from 'react'

import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/piyush-kumarg/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/piyushkumarg",
    icon: <FaGithub />,
  },
  {
    id: 3,
    name: "leetcode",
    link: "https://leetcode.com/piyushkumarg/",
    icon: <SiLeetcode />,
  },
  {
    id: 4,
    name: "twitter",
    link: "https://twitter.com/piyushkumarreal",
    icon: <FaXTwitter />,
  },
  {
    id: 5,
    name: "Instagram",
    link: "https://instagram.com/piyushkumarreal",
    icon: <FaInstagramSquare />,
  },
];

function Socialicons() {
  return (
    <div className="flex text-2xl flex-wrap  gap-8 ">
      {socialLinks?.map((social) => (
        <div key={social.id}>
          <a href={social.link} className="hover:text-teal-500" target="_blank">
            {social.icon}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Socialicons;