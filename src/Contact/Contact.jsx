// import libraries
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import assets
import contact from "../assets/contact.png";
import Pulse from "react-reveal/Pulse";
import Slide from "react-reveal/Slide";
// import styles
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const clearInputs = (e) => {
    e.preventDefault();
    // 👇️ clear input field value
    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
    console.log("in");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      e.currentTarget.user_name.value === "" ||
      e.currentTarget.user_email.value === "" ||
      e.currentTarget.message.value === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "No empty entries allowed",
        timer: 1500,
      });
      return;
    }
    await emailjs
      .sendForm(
        "service_qe1it9h",
        "template_n6a2lje",
        form.current,
        "UibsY4UnD3uZLnpfw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        Swal.fire({
          icon: "success",
          title: "Your email has been sent",
          timer: 2000,
        })
      );
    clearInputs();
  };
  return (
    
      <div className="flex flex-col h-screen md:justify-start 2xl:justify-center md:flex-row  md:p-6">
        <div className="flex flex-col self-center  md:px-4">
          <Pulse delay={1400}>
            <img src={contact} alt="contact-logo" className="contact_logo" />
          </Pulse>
        </div>
        <div className="flex flex-col self-center w-4/5 md:w-2/5 px-4">
          <span className="text-orange-500 text-lg self-start pb-2">
            &#60;contact&#62;
          </span>
          <form
            id="myForm"
            className="contactme-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mt-0">
              <label className="text-sm mb-2 md:text-lg">Name</label>
              <Slide top>
                <input
                  autofocus
                  type="text"
                  name="user_name"
                  ref={ref1}
                  className="outline-violet-700 bg-neutral-900 mt-1 text-white w-full rounded-md outline outline-offset-2 outline-2 focus:outline-white sm:text-sm px-6 py-2"
                  placeholder="Enter you name"
                />
              </Slide>
            </div>
            <div className="mt-1">
              <label className="text-sm mb-2 md:text-lg">Email</label>
              <Slide top delay={200}>
                <input
                  type="email"
                  name="user_email"
                  ref={ref2}
                  className="mt-1 outline-violet-700 bg-neutral-900 text-white w-full rounded-md outline outline-offset-2 outline-2 focus:outline-white sm:text-sm px-6 py-2"
                  placeholder="www.example.com"
                />
              </Slide>
            </div>
            <div className="mt-1">
              <label className="text-sm mb-2 md:text-lg">Message</label>
              <div className="mt-1">
                <Slide top delay={400}>
                  <textarea
                    name="message"
                    ref={ref3}
                    rows="3"
                    className="mt-1 outline-violet-700 bg-neutral-900 text-white w-full rounded-md outline outline-offset-2 outline-2 focus:outline-white sm:text-sm px-6 py-2"
                    placeholder="Enter your message"
                  ></textarea>
                </Slide>
              </div>
            </div>

            <div className="mt-3 text-left">
              <button
                onSubmit={clearInputs}
                type="submit"
                className="bg_animate inline-flex justify-center rounded-md bg-violet-700 py-2 px-4 text-sm text-white md:text-base"
              >
                Save
              </button>
            </div>
          </form>
          <span className="text-orange-500 text-lg self-start pt-2">
            &#60;/contact&#62;
          </span>
        </div>
      </div>
  );
};

export default Contact;
