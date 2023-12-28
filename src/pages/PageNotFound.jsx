import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen">
      <div
        className="bg-no-repeat bg-center h-full w-full flex items-end pb-40 justify-center"
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
        }}
      >
        <Link
          to="/"
          className="font-carattere text-3xl text-gray-100 font-semibold p-2 pl-8 pr-8 rounded-lg mt-8 text-center tracking-widest transition ease-in-out delay-150 bg-green-600 hover:-translate-y hover:scale-105  shadow-md hover:shadow-green-500 duration-500"
        >
          Galat aa gye ho 😆{" "}
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
