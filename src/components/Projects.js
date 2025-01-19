import React from "react";
import ProjectCard from "./ProjectCards";
import Llemon from "../assets/Llemon.png";
import Exp from "../assets/exp1.png";
import Vd from "../assets/proj3.png";

const projects = [
  {
    title: "Little Lemon",
    tools: "React | Figma | Formik/Yak | Jest",
    description:
      "Restaurant booking system with Formik and Yup for form validation. The Figma-designed prototype ensures branding alignment, and Jest with React Testing Library validates functionalities.",
    image: Llemon, // Replace with your image URLs
    live: "https://github.com/Elijah647/Little-Lemon-Restaurant",
    git: "https://github.com/Elijah647/Little-Lemon-Restaurant",
  },
  {
    title: "Viaje de Encuentras",
    tools: "React | Figma | Bootstrap",
    description:
      "A responsive photo gallery showcasing a 5-month trip throughout LATAM. Features include lazy loading for faster performance and Lightbox for focused image viewing.",
    image: Vd, // Replace with your image URLs
    live: "https://vde.netlify.app/",
    git: "https://github.com/Elijah647/Viaje-de-Encuentros",
  },
  {
    title: "ExpTrak",
    tools: "React | Tailwind | ContextAPI",
    description:
      "Dynamic expense tracker dashboard. It provides real-time updates, robust data validation, and an intuitive interface to simplify financial management. Data is persisted with Local Storage for a seamless experience.",
    image: Exp, // Replace with your image URLs
    live: "https://thexptrack.netlify.app/",
    git: "https://github.com/Elijah647/ExpTrak",
  },
];

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen lg:min-h-0 lg:p-2 text-center gap-1 p-2 px-10 md:p-2">
        <h1 className="text-4xl lg:text-5xl font-bold text-sky-400 underline decoration-amber-500 lg:mt-5">
          Projects
        </h1>
        <div className=" md:flex md:flex-row md:gap-10 my-5 lg:mb-16 lg:px-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tools={project.tools}
              description={project.description}
              image={project.image}
              live={project.live}
              git={project.git}
            />
          ))}
        </div>
      </div>
    </>
  );
}
