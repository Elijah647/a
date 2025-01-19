import React, { useState, useEffect } from "react";
import resume from "../assets/resume.pdf";

const handleClick = () => {
  window.open(resume);
};

const Hero = () => {
  const [name, setName] = useState("");
  const [currentLength, setCurrentLength] = useState(0);
  const [nameCompleted, setNameCompleted] = useState(false);

  const codeletters = "&#*+%?£@$"; // Random characters for animation

  useEffect(() => {
    const message = "Elijah Hwang"; // The name to animate

    const generateRandomString = (length) => {
      let randomText = "";
      while (randomText.length < length) {
        randomText += codeletters.charAt(
          Math.floor(Math.random() * codeletters.length)
        );
      }
      return randomText;
    };

    const animateName = () => {
      if (currentLength < message.length) {
        setCurrentLength((prev) => prev + 1);
        const randomString = generateRandomString(currentLength);
        setName(randomString); // Update the animated text
      } else {
        setName(message); // Final name after animation
        setNameCompleted(true); // Mark animation as complete
      }
    };

    const interval = setInterval(animateName, 125);
    return () => clearInterval(interval);
  }, [currentLength]);

  return (
    <div
      className="relative flex flex-col md:flex-row items-center gap-y-2 justify-center min-h-screen gap-x-20 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/bg.jpeg')" }}
    >
      {/* Background Tint Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 md:w-1/2 text-center md:text-start flex flex-col items-center md:items-start p-5 md:p-1">
        <p className="text-2xl font-semibold text-gray-100 mb-2 animate-fadeInUp delay-300">
          Hey, I'm
        </p>

        {/* Animated Name with Typewriter Effect */}
        <p
          className={`text-5xl font-bold text-sky-400 mb-2 md:text-6xl  underline decoration-amber-500 ${
            nameCompleted ? "animate-fadeIn" : ""
          }`}
        >
          {name}
        </p>

        {/* Animated "Web Developer" Title */}
        <p className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-8 animate-scaleUp delay-600">
          &lt; Web Developer /&gt;
        </p>

        <p className="text-lg md:text-xl text-white px-10 lg:px-0 font-normal mb-16 animate-fadeInUp delay-900 leading-snug tracking-wide">
          <span className="inline ">Lifelong learner,</span>
          <span className="inline "> Traveler,</span>
          <span className="inline"> Builder of intuitive web apps</span>
        </p>

        <div className="flex space-x-4 mb-4 opacity-0 animate-fadeInUp delay-1100">
          <button
            onClick={handleClick}
            className="text-md bg-gray-900 text-white border-yellow-400 p-2 w-28 md:w-36 md:text-lg rounded-full hover:bg-neutral-400 transition duration-300 transform hover:scale-105"
          >
            Resume
          </button>
          <a href="#contact">
            <button className="text-md bg-white text-black w-28 p-2 md:w-36 md:text-lg rounded-full hover:bg-neutral-400 transition duration-300 transform hover:scale-105">
              Contact info
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
