import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="md:w-full p-5 shadow-slate-500 shadow-[0_-4px_6px_0_rgba(0,0,0,0.1)]">
        <ul className="flex md:gap-8 gap-2 text-md lg:text-xl w-full justify-center items-center text-white">
          <a href="#hero" className="hover:text-blue-400">
            <li>Home</li>
          </a>
          <span>|</span>
          <a href="#aboutMe" className="hover:text-blue-500">
            <li>About</li>
          </a>
          <span>|</span>
          <a href="#skills" className="hover:text-blue-500">
            <li>Skills</li>
          </a>
          <span>|</span>
          <a href="#projects" className="hover:text-blue-500">
            <li>Projects</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
