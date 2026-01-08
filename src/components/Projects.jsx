import React, { useRef, useState } from "react";
import Project from "../assets/director.jpg";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Asterisks from "./Asterisks";

const projects = [
  { title: "Best Lagos State Logistics & Errands Company", image: Project },
  { title: "Performance & SEO Optimization", image: Project },
  { title: "Content Management System", image: Project },
  { title: "High Conversion Landing Pages", image: Project },
];

const websiteTypes = [
  "E-commerce","Portfolio","Blog","Landing Page","Corporate",
  "SaaS","Web App","Web3","Real Estate","Construction",
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => Math.min(i + 1, projects.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="px-6 py-20 sm:py-28 max-w-7xl mx-auto">
      
      {/* H1 INTRO */}
      <div className="mb-16 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          Projects that don’t just look good —
          <span className="yellow block mt-2">they perform.</span>
        </h1>
        <p className="text-gray-400 mt-6 text-lg">
          Carefully crafted websites engineered for speed, clarity,
          and real business results.
        </p>
      </div>

      {/* ANIMATED SKILLS */}
      <div className="overflow-hidden mb-20">
        <div className="flex animate-scroll whitespace-nowrap uppercase text-gray-300 text-sm sm:text-base">
          {websiteTypes.concat(websiteTypes).map((type, i) => (
            <span key={i} className="flex items-center mr-6">
              {type}
              <Asterisks />
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex flex-col lg:flex-row gap-12">

        {/* TEXT SIDE */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Selected Work
          </h2>
          <p className="text-gray-400 mt-4">
            A mix of client projects, experimental builds,
            and performance-focused websites.
          </p>
        </div>

        {/* PROJECTS – LARGE SCREEN SCROLL */}
        <div
          ref={scrollRef}
          className="
            hidden lg:flex
            lg:w-2/3
            gap-6
            overflow-x-auto
            pb-6
            scroll-smooth
            fancy-scrollbar
          "
        >
          {projects.map((project, i) => (
            <div key={i} className="min-w-[320px] relative">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* PROJECTS – MOBILE SLIDER */}
        <div className="lg:hidden relative">
          <ProjectCard project={projects[index]} />

          {/* CONTROLS */}
          <div className="flex justify-between mt-6">
            <button onClick={prev} className="p-3 rounded-lg yellow">
              <HiChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button onClick={next} className="p-3 rounded-lg yellow">
              <HiChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .fancy-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .fancy-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .fancy-scrollbar::-webkit-scrollbar-thumb {
          background: #facc15;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div
    className="
      relative
      h-[380px]
      rounded-3xl
      overflow-hidden
      bg-black
      group
    "
    style={{
      clipPath: `
        polygon(
          0 0,
          70% 0,
          70% 20%,
          100% 20%,
          100% 100%,
          0 100%
        )
      `
    }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition"
    />
    <div className="absolute inset-0 bg-black/60" />

    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="text-white font-semibold uppercase text-lg">
        {project.title}
      </h3>
    </div>

    <div className="absolute top-3 right-3 w-14 h-14 yellow rounded-lg flex items-center justify-center">
      <HiArrowUpRight className="w-6 h-6 text-black" />
    </div>
  </div>
);

export default Projects;
