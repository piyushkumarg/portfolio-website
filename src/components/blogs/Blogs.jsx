import React from "react";
import { Helmet } from "react-helmet";

function Blogs() {
  return (
    <>
      <div className="h-[calc(50vh)] bg-gradient-to-b from-bgDark to-bgDarkMute flex items-center justify-center font-carattere tracking-widest text-content md:text-8xl text-5xl">
        Updated Soon...
      </div>
      <Helmet>
        <title>Piyush | Blogs</title>
      </Helmet>
    </>
  );
}

export default Blogs;
