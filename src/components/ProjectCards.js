import React from "react";

export default function ProjectCard({
  title,
  tools,
  description,
  image,
  live, // Live Demo link
  git, // GitHub link
}) {
  return (
    <div className="bg-gray-900 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:shadow-slate-200 my-2 p-2 w-72 md:w-full mb-5 transition duration-200 hover:scale-105">
      <img
        className="w-full h-32 md:h-60 object-fit rounded-t-lg"
        src={image}
        alt={title}
      />
      <h3 className="text-2xl font-bold text-white mt-4">{title}</h3>
      <h4 className="text-md text-white mb-3 lg:mb-1">{tools}</h4>
      <p className="text-white lg:h-36 lg:py-3 md:py-5">{description}</p>
      <div className="flex justify-center gap-2 lg:gap-5 m-2 lg:m-1">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-white text-md w-24 md:w-28 md:text-lg border-2 border-white hover:bg-blue-700 px-2 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Live Demo
        </a>
        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-white text-md w-24 md:w-28 md:text-lg border-2 border-white hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
