import React, { useRef } from "react";
import Project from "../assets/director.jpg";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  { title: "Best Lagos State Logistics & Errands Company", image: Project },
  { title: "Performance & SEO Optimization", image: Project },
  { title: "Content Management System", image: Project },
  { title: "Custom Web Application", image: Project },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Projects that actually <br /> move businesses forward
        </h1>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* TEXT SIDE */}
        <div className="lg:w-1/3 space-y-6">
          <p className="text-gray-400 text-lg">
            Every project we ship is built with performance, clarity,
            and conversion in mind.
          </p>

          <p className="text-gray-400 text-lg">
            From startups to large brands, we design systems that scale.
          </p>
        </div>

        {/* SCROLLABLE CARDS */}
        <div className="lg:w-2/3 relative">
          
          {/* Horizontal Scroll Area */}
          <div
            ref={scrollRef}
            className="
              flex gap-6
              overflow-x-auto
              scrollbar-thin
              scrollbar-thumb-yellow-500
              scrollbar-track-transparent
              pb-6
            "
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  min-w-[280px] sm:min-w-[320px]
                  h-[420px]
                  relative
                  rounded-3xl
                  overflow-hidden
                  bg-black
                  flex-shrink-0
                  group
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-semibold uppercase text-lg">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 yellow rounded-lg flex items-center justify-center">
                  <HiArrowUpRight className="text-black w-6 h-6" />
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex gap-4 mt-6 lg:hidden">
            <button
              onClick={() => scroll("prev")}
              className="px-6 py-3 border border-gray-700 text-white rounded-lg"
            >
              Back
            </button>
            <button
              onClick={() => scroll("next")}
              className="px-6 py-3 yellow text-black rounded-lg"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
