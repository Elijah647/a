import React, { useState } from "react";

const Contact = () => {
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

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formData,
      }).toString(),
    })
      .then(() => {
        setStatus("success"); // On success, show success message
        setFormData({ name: "", email: "", message: "" }); // Clear form data
      })
      .catch(() => {
        setStatus("error"); // On error, show error message
      });
  };

  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-8 bg-slate-800 rounded-lg w-full"
      >
        {/* Hidden Input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field to prevent bot submissions */}
        <input type="hidden" name="bot-field" />

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

        <button
          type="submit"
          className="w-full py-3 px-6 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {/* Display status message */}
      {status === "loading" && <p>Sending...</p>}
      {status === "success" && (
        <p className="text-green-500">Thank you for your message!</p>
      )}
      {status === "error" && (
        <p className="text-red-500">
          There was an error sending your message. Please try again.
        </p>
      )}
    </div>
  );
};

export default Contact;
