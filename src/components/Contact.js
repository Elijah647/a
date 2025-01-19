import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Import icons

export default function Contact() {
  const [formState, setFormState] = useState({
    submitted: false,
    error: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      if (response.ok) {
        setFormState({ submitted: true, error: false });
        form.reset(); // Reset the form after submission
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setFormState({ submitted: false, error: true });
    }
  };

  if (formState.submitted) {
    return (
      <p className="text-green-300 text-center lg:text-2xl p-16 lg:p-32">
        Thanks for your message! I will get back to you soon.
      </p>
    );
  }

  return (
    <>
      <div className="text-center py-10 sm:min-h-screen lg:min-h-0 lg:pb-24">
        <h1 className="text-4xl lg:text-5xl font-bold mb-10 text-sky-400 md:mb-20 underline decoration-amber-500">
          Get in Touch
        </h1>
        <div className="flex flex-col px-2 lg:flex-row-reverse items-center justify-center gap-10 lg:gap-24">
          <div className="lg:flex-col justify-center text-white lg:text-xl lg:text-start">
            <p className="leading-loose">
              Thanks for visiting my page! Don’t let this be the end of the
              road—let’s connect and see where we can go from here. I’m excited
              to hear from you and discuss how we can collaborate or address any
              questions you may have.
            </p>
            {/* Social Media Icons */}
            <div className="mt-5 flex justify-center space-x-6 md:mt-12 md:gap-5">
              <a
                href="https://www.linkedin.com/in/elijah-hwang-7a55b4202/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-10 h-10 md:w-12 text-white md:h-12 transition duration-200 hover:text-blue-900 hover:brightness-150 hover:scale-110"
                />
              </a>
              <a
                href="https://github.com/Elijah647"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-10 h-10 md:w-12 md:h-12 text-white transition duration-200 hover:brightness-150 hover:scale-110"
                />
              </a>
              <a
                href="https://twitter.com/elijah_hwang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  className="w-10 h-10 md:w-12 md:h-12 text-white transition duration-200 hover:brightness-150 hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            data-netlify="true"
            name="contact"
            className="max-w-2xl mx-auto p-8 bg-slate-800 rounded-lg w-full"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-6 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${formState.submitted ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {formState.submitted
                ? "Thank You!"
                : formState.error
                  ? "Try Again"
                  : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
