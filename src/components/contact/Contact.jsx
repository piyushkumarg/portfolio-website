import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Socialicons from "../common/Socialicons";
import Lottie from "lottie-react";
import loadingCircleAnimation from "../lottieFiles/loadingCircleAnim.json";
import { Helmet } from "react-helmet";
import ContactForm from "./ContactForm";

const env = import.meta.env;

function Contact() {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className="lg:h-[calc(100vh-7rem)] h-full   bg-gradient-to-b from-bgDark to-bgDarkMute  text-content flex items-center  md:pr-8   md:pl-8 w-full ">
        <div className="w-full space-y-2">
          <h1 className="font-medium md:text-6xl text-4xl text-center">
            <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
              Contact
            </span>{" "}
            ME
          </h1>
          <p className="md:text-2xl text-lg text-center">
            Feel free to{" "}
            <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-3xl text-xl ">
              connect
            </span>{" "}
            with me
          </p>
          <div className="flex flex-col w-full lg:justify-between items-center lg:items-stretch   lg:flex-row  gap-4 p-4">
            <div className=" sm:w-3/4 w-11/12 flex flex-col  justify-center  rounded-lg bg-skillBgHover  contact-info p-4  text-lg space-y-4">
              <h1 className="text-2xl">Let&apos;s talk about everything!</h1>
              <div className="flex gap-2 items-center ">
                Don&apos;t like forms? Send me an{" "}
                <a
                  href="mailto:piyushkumar1116@gmail.com"
                  className="text-contentHighlight flex items-center gap-1 font-semibold text-2xl font-carattere tracking-widest hover:scale-105"
                >
                  <MdEmail /> email
                </a>
              </div>
              <div className="space-y-2 pt-8">
                <h3 className="text-2xl">Or FIND ME ON:</h3>
                <Socialicons />
              </div>
              <div className="pt-4">
                <div className="flex items-center  gap-1">
                  <MdEmail />
                  piyushkumar1116@gmail.com
                </div>
                <div className="flex items-center  gap-1">
                  <IoLocation />
                  Nalanda, Bihar, India
                </div>
              </div>
            </div>
            <div className="sm:w-3/4 w-11/12 p-4 lg:p-0 lg:h-auto h-[450px] bg-skillBgHover rounded-lg ">
              {isLoading && (
                <div className=" flex  items-center h-full">
                  <Lottie animationData={loadingCircleAnimation} />
                </div>
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.794634097136!2d85.45420824195082!3d25.12225491103678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f22035c54b97%3A0x46687132915778f3!2sNalanda%2C%20Bihar%20803111!5e0!3m2!1sen!2sin!4v1703598510257!5m2!1sen!2sin"
                loading="lazy"
                onLoad={() => setLoading(false)}
                className="h-full w-full rounded-lg"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className=" sm:w-3/4 relative w-11/12 rounded-lg p-4 bg-skillBgHover   m-auto ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Piyush | Contact</title>
      </Helmet>
    </>
  );
}

export default Contact;
