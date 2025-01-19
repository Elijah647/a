import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Import icons
import { useForm, ValidationError } from "@formspree/react"; // Import Formspree React

export default function Contact() {
  // Use Formspree's useForm hook
  const [state, handleSubmit, reset] = useForm("movvyedl");

  // Handle form state after submission
  if (state.succeeded) {
    setTimeout(() => {
      reset(); // Reset the form after successful submission
    }, 3000); // Optionally delay resetting to allow success message to show
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
            className="max-w-2xl mx-auto p-8 bg-slate-800 rounded-lg  w-full"
          >
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
              {/* Validation error message */}
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6" // Makes the text area longer
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {/* Validation error message */}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-6 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${state.succeeded ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
              disabled={state.submitting}
            >
              {state.succeeded
                ? "Thank You!"
                : state.submitting
                  ? "Sending..."
                  : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
