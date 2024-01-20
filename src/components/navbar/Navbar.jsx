import { useEffect, useState } from "react";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { navigationItem } from "./navItem";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [navigation, setNavigation] = useState(navigationItem);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("data-theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(storedTheme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem("data-theme", theme);
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.75*window.innerHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTheme = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
  };

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
      <nav
        className={`flex items-center justify-between h-[3.85rem] text-content lg:pl-16 lg:pr-16 pl-4 pr-4 sticky top-0  z-50 ${
          scrolling ? "bg-bgDark" : "md:bg-transparent bg-bgDark"
        }`}
      >
        <Link
          to="/"
          onClick={() => handleLinkClick(1)}
          className="text-2xl font-bold font-carattere tracking-widest  "
        >
          <div className="flex gap-1 items-center ">
            <img src="./logo.svg" alt="" className="w-[1.75rem] " />
            iyush
          </div>
        </Link>
        {/* Desktop menu navigation */}
        <div className="lg:gap-4 gap-1 hidden md:flex">
          {navigation.map((nav) => (
            <Link
              to={nav.src}
              onClick={() => handleLinkClick(nav.id)}
              className={`flex items-center justify-center p-2 gap-1 cursor-pointer text-lg font-medium rounded-lg hover:-translate-y  hover:scale-110 hover:text-bgDark hover:bg-content   duration-500 ${
                nav.current ? "bg-content text-bgDark " : ""
              }`}
              key={nav.id}
            >
              <nav.icon />
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu Navigation  */}
        <div className="md:hidden  absolute w-full  block  bg-bgDark left-0  top-[3.75rem]">
          {open && (
            <div className="h-[calc(100vh-5.75rem)]  flex flex-col justify-center items-center gap-4 ">
              {navigation.map((nav) => (
                <Link
                  to={nav.src}
                  onClick={() => handleLinkClick(nav.id)}
                  className={`flex items-center justify-center ml-4 mr-4 p-2 w-52  gap-1 cursor-pointer text-lg font-medium rounded-lg hover:-translate-y  hover:bg-content hover:text-bgDark hover:scale-110    ${
                    nav.current ? "bg-content text-bgDark " : " "
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
        <div className="flex gap-4 items-center justify-center">
          <button
            className="  text-3xl  ransition ease-in-out delay-150 hover:-translate-y hover:scale-110 duration-500 t font-semibold p-2 rounded-lg  tracking-widest"
            onClick={handleTheme}
          >
            {theme === "light" ? (
              <FaCloudMoon />
            ) : (
              <FaCloudSun className="text-yellow-600" />
            )}
          </button>
          <button
            className="md:hidden block text-2xl"
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
