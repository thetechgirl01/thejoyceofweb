import React, { useRef, useState } from "react";
import Project1 from "../assets/EbbPic.jpeg";
import Project2 from "../assets/mancloth.jpeg";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Asterisks from "./Asterisks";
import { Link } from "react-router-dom";
import Project3 from "../assets/Baller.jpeg";

const projects = [
  { title: "Courier & Errand Company in Lagos, Nigeria.", image: Project1, link: "https://www.errandsbybrownie.com" },
  { title: "Uk Fashion E-commerce Platform", image: Project2, link: "https://4thmanclothing.com" },
  { title: "Bowling Alley", image: Project3, link: "https://parabola-drab.vercel.app/" },
  
];

const websiteTypes = [
  "E-commerce","Portfolio","Blog","Landing Page",
  "Corporate","SaaS","Web App","Web3","Real Estate",
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index) => {
    const cardWidth = 340; // card + gap
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  const handleScroll = () => {
    const cardWidth = 340;
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActive(index);
  };

  return (
    <section className="px-auto  py-24 max-w-7xl mx-auto">

      {/* TWO FLEX SIDES */}
      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE — TEXTS */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Real projects.
            <span className=""> Real results.</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Carefully engineered websites designed to convert,
            scale, and stand out in competitive markets.
          </p>
        </div>

        {/* RIGHT SIDE — SKILLS + CARDS */}
        <div className="lg:w-2/3 relative">

          {/* ANIMATED SKILLS */}
          <div className="overflow-hidden mb-8">
            <div className="flex animate-scroll whitespace-nowrap uppercase text-gray-300 text-sm">
              {websiteTypes.concat(websiteTypes).map((type, i) => (
                <span key={i} className="flex items-center mr-6">
                  {type}
                  <Asterisks />
                </span>
              ))}
            </div>
          </div>

          {/* LEFT / RIGHT ARROWS */}
          <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 text-gray-500">
            <HiChevronLeft className="w-5 h-5" />
          </div>
          <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-gray-500">
            <HiChevronRight className="w-5 h-5" />
          </div>

          {/* CARDS SCROLL */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar px-auto "
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>

         <div className="flex flex-row justify-between">
           {/* PROGRESS / BUTTONS */}
          <div className="flex gap-3 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                aria-label={`Show project ${i + 1}: ${projects[i].title}`}
                aria-pressed={active === i}
                onClick={() => scrollTo(i)}
                className={`
                  transition-all duration-300
                  ${active === i
                    ? "w-8 h-1 mt-2 bg-yellow-400"
                    : "w-3 h-3 bg-gray-600 rounded-full"}
                `}
              />
            ))}
          </div>

          {/* MORE PROJECTS BUTTON */}
          <div className="mt-12 flex justify-end">
            <Link to="/works">
            <span className="inline-block cursor-pointer px-8 py-4 yellow text-black font-semibold rounded-4xl shadow-lg hover:scale-105 transition">
             More 
            </span>
            
            </Link>
          </div>
         </div>
        </div>
      </div>

    
       
   
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="relative min-w-[320px]">

    {/* CARD */}
    <div
      className="relative h-[380px] rounded-3xl overflow-hidden bg-black group"
      style={{
        clipPath: `
          polygon(
            0 0,
            76% 0,
            76% 20%,
            100% 20%,
            100% 100%,
            0 100%
          )
        `
      }}
    >
      <img
        src={project.image}
        loading="lazy"
        decoding="async"
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white font-semibold uppercase text-lg">
          {project.title}
        </h3>
      </div>
    </div>

    {/* LINK BUTTON — RESTORED */}
    <a
      aria-label={`Visit ${project.title}`}
      href={project.link}
      className="absolute top-2 right-2 w-14 h-14 rounded-lg yellow flex items-center justify-center shadow-lg hover:scale-110 transition z-10"
    >
      <HiArrowUpRight className="w-6 h-6 text-black" />
    </a>
  </div>
);

export default Projects;
