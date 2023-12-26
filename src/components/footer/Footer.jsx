import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200  py-4 flex justify-center items-center text-lg ">
      <p className="font-carattere tracking-widest ">
        &copy; {currentYear} Designed & Code by{" "}
        <span className="text-xl font-medium font-carattere tracking-widest ">
          Piyush
        </span>
      </p>
    </footer>
  );
}

export default Footer;
