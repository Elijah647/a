import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faAngular,
  faGitAlt,
  faBootstrap,
  faPython,
  faJava,
  faHtml5,
  faCss3,
  faWordpress,
  faFigma,
} from "@fortawesome/free-brands-svg-icons"; // Import icons
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Skill() {
  return (
    <div className="text-center py-2 sm:min-h-screen lg:min-h-0 lg:px-20 lg:py-10">
      <h1 className="text-4xl lg:text-5xl font-bold text-sky-400 mb-5 underline decoration-amber-500">
        Skills
      </h1>
      <div className="grid grid-cols-2 px-12 gap-5 my-10 md:my-16 md:gap-5 md:grid-cols-3 md:px-5 lg:gap-16 lg:grid-cols-4 lg:px-32 text-white">
        <div className="p-2 flex flex-col">
          <FontAwesomeIcon
            icon={faJs}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          JavaScript
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faReact}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          React
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faAngular}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Angular
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faGitAlt}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Git
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faBootstrap}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Bootstrap
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faPython}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Python
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faFigma}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Figma
        </div>

        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faDatabase}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Databases
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faJava}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Java
        </div>
        <div className="flex flex-col p-2 ">
          <FontAwesomeIcon
            icon={faHtml5}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Html5
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faCss3}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          CSS3
        </div>
        <div className="flex flex-col p-2">
          <FontAwesomeIcon
            icon={faWordpress}
            className="text-5xl md:text-6xl lg:text-7xl "
          />{" "}
          Wordpress
        </div>
      </div>
    </div>
  );
}
