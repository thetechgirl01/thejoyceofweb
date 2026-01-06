import React from "react";
import Project from '../assets/director.jpg'
import { HiArrowUpRight } from "react-icons/hi2";


const projects = [
  {
    title: "Comprehensive Web Development",
    image: Project,
    link: "#",
  },
  {
    title: "Performance & SEO Optimization",
    image: Project,
    link: "#",
  },
  {
    title: "Content Management",
    image: Project,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="
              group relative
              h-[360px] sm:h-[420px]
              rounded-3xl
              overflow-hidden
              bg-black
            "
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                opacity-80
                group-hover:scale-105
                transition-transform duration-500
              "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Top-right arrow */}
            <div
              className="
                absolute top-4 right-4
                w-10 h-10
                rounded-xl
                bg-lime-300
                flex items-center justify-center
                group-hover:scale-110
                transition
              "
            >
              <HiArrowUpRight className="text-black w-5 h-5" />
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="
                text-white
                font-semibold
                uppercase
                leading-snug
                text-lg sm:text-xl
              ">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
