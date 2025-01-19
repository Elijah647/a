import React from "react";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import arrow from "./assets/arrow.png"; // Import your arrow image

function App() {
  // Function to handle smooth scroll
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900">
      <Navbar />
      <section id="hero" className="relative">
        <Hero />
        <img
          src={arrow}
          alt="Arrow icon"
          className="cursor-pointer h-[3rem] absolute left-1/2 bottom-5 transform -translate-x-1/2 filter invert hover:text-[rgb(152,89,6)] hover:translate-y-[-10px] hover:scale-110 transition-all duration-300 lg:block hidden"
          onClick={() => scrollToSection("aboutMe")}
        />
      </section>

      <div className="mx-10 md:mx-24">
        <section id="aboutMe" className="relative">
          <AboutMe />
          <img
            src={arrow}
            alt="Arrow icon"
            className="cursor-pointer h-[3rem] absolute left-1/2 bottom-5 transform -translate-x-1/2 filter invert hover:text-[rgb(152,89,6)] hover:translate-y-[-10px] hover:scale-110 transition-all duration-300 lg:block hidden"
            onClick={() => scrollToSection("skills")}
          />
        </section>

        <section id="skills" className="relative">
          <Skill />
          <img
            src={arrow}
            alt="Arrow icon"
            className="cursor-pointer h-[3rem] absolute left-1/2 bottom-5 transform -translate-x-1/2 filter invert hover:text-[rgb(152,89,6)] hover:translate-y-[-10px] hover:scale-110 transition-all duration-300 lg:block hidden "
            onClick={() => scrollToSection("projects")}
          />
        </section>

        <section id="projects" className="relative">
          <Projects />
          <img
            src={arrow}
            alt="Arrow icon"
            className="cursor-pointer h-[3rem] absolute left-1/2 bottom-5 transform -translate-x-1/2 filter invert hover:text-[rgb(152,89,6)] hover:translate-y-[-10px] hover:scale-110 transition-all duration-300 lg:block hidden "
            onClick={() => scrollToSection("contact")}
          />
        </section>

        <section id="contact" className="relative">
          <Contact />
        </section>
      </div>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
