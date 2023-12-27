import React from "react";
import avtarAnimation from "./avtarAnim.json";
import Socialicons from "../common/Socialicons";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-900  text-white flex flex-col justify-between  md:p-16 p-8">
      <h1 className="font-medium md:text-6xl sm:text-4xl text-3xl text-center ">
        LET ME <span className="text-teal-500">INTRODUCE</span> MYSELF
      </h1>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-between ">
        <Lottie className="lg:w-1/2  w-4/5" animationData={avtarAnimation} />
        <div className="flex flex-col text-justify justify-center gap-7 lg:w-1/2 md:w-4/5 md:text-xl text-lg pt-8 lg:pb-8">
          <p>
            Hey there!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋
            </span>{" "}
            I'm <span className="text-teal-500 font-medium">Piyush Kumar</span>,
            a passionate Software Engineering undergrad at UIET Panjab
            University. 💻 By day, I'm a tech enthusiast exploring the wonders
            of coding, and by night, I transform into an aspiring full-stack
            developer.
          </p>

          <p>
            I am fluent in classics like{" "}
            <span className="text-teal-500 font-medium">C/C++, JavaScript</span>
            . I've honed my skills in frontend technologies and Modern
            Javascript Library or Frameworks like{" "}
            <span className="text-teal-500 font-medium">
              React.js, Next.js, Redux and TailwindCSS{" "}
            </span>{" "}
            as well as backend tools such as{" "}
            <span className="text-teal-500 font-medium">
              NodeJS and MongoDB
            </span>
            .
          </p>
          <p>
            My field of Interest's are building new Web Technologies and
            Products and also in areas related to{" "}
            <span className="text-teal-500 font-medium">
              Blockchain & DevOps
            </span>
            .
          </p>
        </div>
      </div>
      
     
    </div>
  );
}

export default Intro;
