import React from "react";
import Project from '../assets/director.jpg';
import { HiArrowUpRight } from "react-icons/hi2";
import Asterisks from "./Asterisks";

const projects = [
  { title: "Best Lagos State Logistics & Errands Comapny", 
    
    image: Project,
     link: "#" },
  { title: "Performance & SEO Optimization", image: Project, link: "#" },
  { title: "Content Management", image: Project, link: "#" },
  { title: "Content Management", image: Project, link: "#" },
];

const websiteTypes = [
  "E-commerce",
  "Portfolio",
  "Blog",
  "Landing Page",
  "Corporate",
  "SaaS",
  "Web App",
  "Non-Profit",
  "Educational",
  "Web3",
  "Real Estate",
  "Construction",
];

const Projects = () => {
  return (
    <>
    <section className="px-6 py-16 sm:py-24 max-w-7xl mx-auto ">
      {/* Horizontal scrolling header */}
      <div className="overflow- mb-12 flex-row overflow-hidden">
        
               
        <div className="flex flex-row animate-scroll whitespace-nowrap  h2 text-gray-300  text-md sm:text-lg font-medium uppercase">
          
    
       
          {websiteTypes.concat(websiteTypes).map((type, index) => (
            <span key={index} className="flex">
              {type}
                <Asterisks/>
              
             
        
            </span>
            
        
           
          ))}
        

        </div>
        

      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            {/* Card */}
            <div
              className="
                relative
                h-[320px] sm:h-[420px] md:h-[460px]
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
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Bottom Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-semibold uppercase leading-snug text-base sm:text-lg md:text-xl">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Button with gap */}
            <a
              href={project.link}
              className="
                absolute top-2 right-2
                 w-20 h-12  md:w-14 md:h-14 mt-2 mr-2 
                rounded-lg
                yellow
                flex items-center justify-center
                shadow-lg
                hover:scale-110
                transition
                
                
              "
            >
              <HiArrowUpRight className="text-black w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="mt-12 flex justify-center">
        <button className="px-8 py-4 yellow text-black font-semibold rounded-lg shadow-lg  transition">
          More Projects
        </button>
      </div>

      {/* Smooth scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
    </>
  );
};

export default Projects;
