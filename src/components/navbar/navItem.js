import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFileAlt,
  FaAddressCard,
} from "react-icons/fa";

export const navigationItem = [
  { id: 1, name: "Home", src: "/", current: true, icon: FaHome },
  { id: 2, name: "About", src: "/about", current: false, icon: FaUser },
  {
    id: 3,
    name: "Projects",
    src: "/projects",
    current: false,
    icon: FaLaptopCode,
  },
  { id: 4, name: "Resume", src: "/resume", current: false, icon: FaFileAlt },
  {
    id: 5,
    name: "Contact Me",
    src: "/contact",
    current: false,
    icon: FaAddressCard,
  },
  // { id: 6, name: "Blogs", src: "/blogs", current: false, icon: FaBlog },
];
