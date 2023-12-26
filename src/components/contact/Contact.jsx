import React, { useEffect, useState } from "react";
import { TextInput, Button, Group, Select, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Socialicons from "../common/Socialicons";

function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },

    validate: {
      name: (value) => (value.length < 3 ? "Invalid name" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      mobile: (value) => {
        const numericValue = Number(value);
        if (isNaN(numericValue) || value.length < 10) {
          return "Invalid mobile number ";
        }
        return null;
      },
    },
  });

  const handleSubmit = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="lg:h-[calc(100vh-7.5rem)] h-full   bg-gradient-to-b from-gray-900 to-gray-700  text-gray-200 flex items-center  md:pr-8   md:pl-8 w-full ">
      <div className="w-full">
        <h1 className="font-medium md:text-6xl text-4xl text-center">
          Contact Me
        </h1>
        <p className="md:text-2xl text-lg text-center">
          Feel free to <span className="text-teal-500">connect</span> with me
        </p>
        <div className="flex flex-col w-full lg:justify-between items-center lg:items-stretch   lg:flex-row  gap-4 p-4">
          <div className=" sm:w-3/4 w-11/12 flex flex-col  justify-center  rounded-lg bg-slate-800  contact-info p-4  text-lg space-y-4">
            <h1 className="text-2xl">Let&apos;s talk about everything!</h1>
            <div>
              Don&apos;t like forms? Send me an{" "}
              <a
                href="mailto:piyushkumar1116@gmail.com"
                className="text-teal-500 font-semibold text-2xl"
              >
                email
              </a>
              . 👋
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
          <div className="sm:w-3/4 w-11/12  p-4 lg:p-0 lg:h-auto h-[450px] bg-slate-800 rounded-lg ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.794634097136!2d85.45420824195082!3d25.12225491103678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f22035c54b97%3A0x46687132915778f3!2sNalanda%2C%20Bihar%20803111!5e0!3m2!1sen!2sin!4v1703598510257!5m2!1sen!2sin"
              loading="lazy"
              className="h-full w-full rounded-lg"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" sm:w-3/4     w-11/12  rounded-lg p-4 bg-slate-800 ">
            <form
              onSubmit={form.onSubmit((values) => handleSubmit(values))}
              className="space-y-4"
            >
              <TextInput
                withAsterisk
                label="Name"
                placeholder="Write Your Full name"
                {...form.getInputProps("name")}
              />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="Write your Email"
                {...form.getInputProps("email")}
              />
              <TextInput
                withAsterisk
                label="Mobile"
                placeholder="Write your mobile number"
                {...form.getInputProps("mobile")}
              />
              <Textarea
                label="Message"
                placeholder="Write message"
                {...form.getInputProps("message")}
              />

              <Button type="submit" fullWidth>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
