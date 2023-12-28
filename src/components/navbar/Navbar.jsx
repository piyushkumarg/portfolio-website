import { useState } from "react";
import { FaCloudSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import {navigationItem} from './navItem';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [navigation, setNavigation] = useState(navigationItem);

  const handleLinkClick = (index) => {
    console.log(index);
    const updatedNavigation = navigation.map((nav) => {
      if (nav.id === index) {
        return { ...nav, current: true };
      } else {
        return { ...nav, current: false };
      }
    });
    setOpen(false); // Close the mobile menu on link click
    setNavigation(updatedNavigation); // Update the navigation state
  };

  return (
    <>
      <nav className="bg-gray-900 flex items-center justify-between h-[3.85rem] text-gray-200  lg:pl-16 lg:pr-16 pl-4 pr-4 sticky top-0 z-50">
        <Link
          to="/"
          onClick={() => handleLinkClick(1)}
          className="text-2xl font-medium font-carattere tracking-widest  "
        >
          <div className="flex gap-1 items-center ">
            <img src="./logo.svg" alt="" className="w-[1.75rem]" />
            iyush
          </div>
        </Link>
        <div className="lg:gap-4 gap-1 hidden md:flex">
          {navigation.map((nav) => (
            <Link
              to={nav.src}
              onClick={() => handleLinkClick(nav.id)}
              className={`flex items-center justify-center p-2 gap-1 cursor-pointer text-lg font-medium rounded-lg hover:-translate-y  hover:scale-110    duration-500 ${
                nav.current
                  ? "bg-gray-200 text-gray-800 hover:text-gray-800"
                  : "hover:text-teal-300"
              }`}
              key={nav.id}
            >
              <nav.icon />
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden  absolute w-full  block  bg-gray-900 left-0  top-[3.75rem]">
          {open && (
            <div className="h-[calc(100vh-6rem)]  flex flex-col justify-center items-center gap-4 ">
              {navigation.map((nav) => (
                <Link
                  to={nav.src}
                  onClick={() => handleLinkClick(nav.id)}
                  className={`flex items-center justify-center ml-4 mr-4 p-2 pl-16 pr-16  gap-1 cursor-pointer text-lg font-medium rounded-lg hover:-translate-y  hover:scale-110    ${
                    nav.current
                      ? "bg-gray-200 text-gray-800 hover:text-gray-800"
                      : "hover:text-teal-300 duration-500"
                  }`}
                  key={nav.id}
                >
                  <nav.icon />
                  {nav.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-4">
          <button className="text-2xl">
            <FaCloudSun />
          </button>
          <button
            className="md:hidden block text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
