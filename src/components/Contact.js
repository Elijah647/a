import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Import icons

export default function Contact() {
  // Manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // To store form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set status to "loading" while waiting for the form to submit
    setStatus("loading");

    // Form submission to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact", // The form name Netlify will use
        ...formData,
      }).toString(),
    })
      .then(() => {
        // Simulate a delay before resetting the form and showing the success message
        setTimeout(() => {
          setStatus("success"); // On success, show success message
          setFormData({ name: "", email: "", message: "" }); // Clear form data
        }, 3000); // Delay of 3 seconds to show the success message
      })
      .catch(() => {
        setStatus("error"); // On error, show error message
      });
  };

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
            name="contact" // This is the form name
            method="POST" // POST method for form submission
            data-netlify="true" // Enable Netlify form handling
            onSubmit={handleSubmit} // Handle form submit
            className="max-w-2xl mx-auto p-8 bg-slate-800 rounded-lg w-full"
          >
            {/* Hidden input to tell Netlify the form name */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Success/Error message */}
            {status === "success" && (
              <p className="text-green-300 text-center lg:text-2xl p-16 lg:p-32">
                Thanks for your message! I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-300 text-center lg:text-2xl p-16 lg:p-32">
                Something went wrong. Please try again later.
              </p>
            )}

            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Honeypot field for bot prevention */}
            <div className="hidden">
              <label htmlFor="bot-field">
                Don’t fill this out if you're human:
              </label>
              <input id="bot-field" name="bot-field" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 px-6 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${status === "success" ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
              disabled={status === "loading"}
            >
              {status === "success"
                ? "Thank You!"
                : status === "loading"
                  ? "Sending..."
                  : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
