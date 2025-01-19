import React from "react";
import PP from "../assets/PP.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
  return (
    <div className="text-center p-2 md:p-10">
      <h1 className="text-4xl lg:text-5xl font-bold text-sky-400 m-5 lg:mb-0 underline decoration-amber-500">
        About
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-1 lg:gap-10 mb-10">
        <img
          src={PP}
          alt="Profile"
          className="w-72 h-72 md:w-1/3 md:h-auto object-cover my-5 rounded-full md:rounded-3xl shadow-lg shadow-slate-300"
        />
        <div className="w-full md:w-2/3">
          <p className="mb-8 text-center md:text-start md:text-lg md:p-10 lg:px-12 md:mb-6 text-white lg:leading-loose">
            I am passionate about web development and design, blending technical
            expertise with creative ingenuity to craft user-friendly and
            visually appealing digital solutions. My commitment to lifelong
            learning drives me to embrace new challenges and continuously hone
            my skills. In my spare time, I enjoy traveling, learning new
            languages, listening to music, and playing sports. I approach
            challenges with determination and confidence in my ability to adapt
            and acquire new skills. Dedicated to personal and professional
            growth, I am poised to contribute meaningfully to any domain I
            venture into.
          </p>
          <div className="flex justify-center md:justify-start gap-5 mt-2 md:mt-0 md:pl-10 lg:pl-12 md:gap-12">
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
      </div>
    </div>
  );
}
