import React, { useState } from "react";
import { TextInput, Button, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Lottie from "lottie-react";
import submitAnimation from "../lottieFiles/submitAnim.json";
import loadingCircleAnimation from "../lottieFiles/loadingCircleAnim.json";
import { handleContactFormSubmit } from "../../services/helpers";

function ContactForm() {
  const [formLoad, setfromLoad] = useState(false);
  const [showSubmitAnimation, setShowSubmitAnimation] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },

    validate: {
      name: (value) => (value.length < 3 ? "Please enter a valid name" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Please enter valid email",
      mobile: (value) =>
        value.length < 10 ? "Please enter valid number" : null,
    },
  });

  const handleSubmit = async (values) => {
    try {
      setfromLoad(true);

      await handleContactFormSubmit(values);

      //reset form and show/hide animation
      form.reset();
      setShowSubmitAnimation(true);
      setTimeout(() => {
        setShowSubmitAnimation(false);
      }, 3000);
      setfromLoad(false);
      // console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className="space-y-4"
      >
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Write Your Full name"
          // styles={{
          //   input: { background: "rgb(209 213 219)" },
          // }}
          {...form.getInputProps("name")}
        />
        <TextInput
          variant="filled"
          withAsterisk
          label="Email"
          placeholder="Write your Email"
          {...form.getInputProps("email")}
        />

        <div>
          <label className="text-sm font-medium">
            Mobile <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country={"in"} // Set the default country
            inputProps={{
              name: "mobile",
              autoFocus: true,
              autoComplete: "tel",
              placeholder: "Enter mobile number",
            }}
            className="w-full  text-gray-800 rounded-lg"
            inputStyle={{ width: "100%" }}
            value={form.values.mobile}
            onChange={(value) => form.setFieldValue("mobile", value)}
          />
          {form.errors.mobile && (
            <div className="text-red-500">{form.errors.mobile}</div>
          )}
        </div>

        <Textarea
          label="Message"
          placeholder="Write message"
          {...form.getInputProps("message")}
        />

        <Button type="submit" fullWidth>
          Submit
        </Button>
      </form>
      {showSubmitAnimation && (
        <div className="absolute top-0 flex items-center w-full justify-center  h-full ">
          <Lottie animationData={submitAnimation} id="submit" />
        </div>
      )}
      {formLoad && (
        <div className="absolute top-0 flex items-center w-full justify-center bg-skillBgHover  h-full ">
          <Lottie animationData={loadingCircleAnimation} id="submit" />
        </div>
      )}
    </div>
  );
}

export default ContactForm;
