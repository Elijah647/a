import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Import icons

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // Form submission status

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Set the form status to loading
    setStatus("loading");

    // Fetch request to submit the form to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact", // Netlify form name
        ...formData,
      }).toString(),
    })
      .then(() => {
        // Set the status to success after submission
        setStatus("success");

        // Reset the form data after a delay
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" }); // Reset form
          setStatus(null); // Reset status
        }, 3000); // 3 seconds delay to allow the success message to show
      })
      .catch(() => {
        setStatus("error"); // Handle submission error
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
            onSubmit={handleSubmit}
            name="contact" // Name for Netlify form handling
            method="POST" // Form submission method
            data-netlify="true" // Enable Netlify form handling
            className="max-w-2xl mx-auto p-8 bg-slate-800 rounded-lg w-full"
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Success/Error Message */}
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
                required
                value={formData.name}
                onChange={handleChange}
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
                required
                value={formData.email}
                onChange={handleChange}
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
                required
                value={formData.message}
                onChange={handleChange}
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
              className={`w-full py-3 px-6 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                status === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
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
