import React from "react";

export default function Contact() {
  return (
    <>
      <div className="text-center py-10 sm:min-h-screen lg:min-h-0 lg:pb-24">
        <h1 className="text-4xl lg:text-5xl font-bold mb-10 text-sky-400 md:mb-20 underline decoration-amber-500">
          Get in Touch
        </h1>

        {/* Simple Contact Form */}
        <form
          name="contact"
          method="post"
          data-netlify="true" // Enable Netlify form handling
          className="max-w-2xl mx-auto p-8 bg-slate-800 rounded-lg w-full"
        >
          {/* Hidden Input for Netlify */}
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
            className="w-full py-3 px-6 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
