import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import Workpic from "../assets/director.jpg";

const Works = () => {
  // Updated works data with industry tags and links
  const works = [
    {
      id: 1,
      tags: ["B2C", "JIU JITSU TOURNAMENT ORGANIZATION", "WEB PLATFORM"],
      industries: ["Featured", "Web App", "Corporate", "Landing Page"],
      image: Workpic,
      title: "AJP: World's fastest growing jiu jitsu tournament organization",
      description:
        "Abu Dhabi Jiu Jitsu Pro (AJP) is a professional Brazilian Jiu Jitsu organization created with the goal of developing the sport of jiu jitsu around the world.",
      link: "#",
    },
    {
      id: 2,
      tags: ["SOCIAL MEDIA", "SITE RELIABILITY ENGINEERING", "SRE", "DOWNTIME", "UPTIME"],
      industries: ["Featured", "SaaS", "Web App", "Web3"],
      image: Workpic,
      title: "Innovating connections: empowering innovators and investors with Inspired",
      description:
        "Inspired connects innovators and investors, making collaboration seamless and impactful.",
      link: "#",
    },
    {
      id: 3,
      tags: ["B2C", "FINANCE", "MOBILE APPLICATION"],
      industries: ["Featured", "Mobile App", "Finance", "Landing Page"],
      image: Workpic,
      title: "Platform that integrates both robo-advisor and trading features",
      description:
        "Zad is a mobile investment platform that integrates both robo-advisor and trading features.",
      link: "#",
    },
    {
      id: 4,
      tags: ["E-COMMERCE", "SHOPPING", "RETAIL"],
      industries: ["E-commerce", "Web App", "B2C"],
      image: Workpic,
      title: "Modern e-commerce platform for fashion retailers",
      description:
        "A full-featured online shopping platform with advanced filtering and recommendation systems.",
      link: "#",
    },
    {
      id: 5,
      tags: ["PORTFOLIO", "DESIGN", "CREATIVE"],
      industries: ["Portfolio", "Corporate", "Landing Page"],
      image: Workpic,
      title: "Interactive portfolio for creative agency",
      description:
        "Showcasing creative work with immersive animations and smooth transitions.",
      link: "#",
    },
    {
      id: 6,
      tags: ["REAL ESTATE", "PROPERTY", "VR"],
      industries: ["Real Estate", "Web App", "Web3", "Landing Page"],
      image: Workpic,
      title: "Virtual reality property tours platform",
      description:
        "Revolutionizing real estate viewings with immersive VR experiences.",
      link: "#",
    },
  ];

  const industries = [
    "Featured",
    "E-commerce",
    "Portfolio",
    "Blog",
    "Landing Page",
    "Corporate",
    "SaaS",
    "Web App",
    "Web3",
    "Real Estate",
    "Finance",
    "Mobile App",
  ];

  const [selectedIndustries, setSelectedIndustries] = useState(["Featured"]);
  const [filteredWorks, setFilteredWorks] = useState(works);

  // Handle industry selection/deselection
  const handleIndustryClick = (industry) => {
    let updatedIndustries;
    
    if (selectedIndustries.includes(industry)) {
      // Remove industry if already selected
      updatedIndustries = selectedIndustries.filter(item => item !== industry);
      // If no industries selected, default to "Featured"
      if (updatedIndustries.length === 0) {
        updatedIndustries = ["Featured"];
      }
    } else {
      // Add industry
      updatedIndustries = [...selectedIndustries, industry];
    }
    
    setSelectedIndustries(updatedIndustries);
    filterWorks(updatedIndustries);
  };

  // Filter works based on selected industries
  const filterWorks = (industries) => {
    if (industries.includes("Featured") && industries.length === 1) {
      // Show all works with "Featured" tag
      const featuredWorks = works.filter(work => 
        work.industries.includes("Featured")
      );
      setFilteredWorks(featuredWorks);
    } else {
      // Filter works that match ANY of the selected industries
      const filtered = works.filter(work =>
        industries.some(industry => work.industries.includes(industry))
      );
      setFilteredWorks(filtered);
    }
  };

  // Card component with your specified design
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

      {/* LINK BUTTON */}
      <a
        href={project.link}
        className="absolute top-2 right-2 w-14 h-14 rounded-lg bg-yellow-500 flex items-center justify-center shadow-lg hover:scale-110 transition z-10"
      >
        <HiArrowUpRight className="w-6 h-6 text-black" />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen py-10 sm:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <header className="px-4 sm:px-6 mb-12 sm:mb-20 mt-20">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight max-w-[800px]">
          Helping businesses achieve goals. Solving people's problems.
        </h1>
      </header>

      {/* Industry Filter */}
      <div className="overflow-x-auto mb-8">
        <div className="flex flex-wrap justify-start gap-2 sm:gap-4 px-4">
          {industries.map((item, index) => (
            <button
              key={index}
              onClick={() => handleIndustryClick(item)}
              className={`text-lg px-4 py-2 rounded-3xl border text-center flex-shrink-0 transition-all ${
                selectedIndustries.includes(item)
                  ? "bg-yellow-500 text-black border-yellow-500"
                  : "text-white border-gray-500 hover:border-yellow-300 hover:text-yellow-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        {/* Selected filters indicator */}
        <div className="px-4 mt-4">
          <p className="text-gray-400 text-sm">
            {selectedIndustries.length === 1 && selectedIndustries[0] === "Featured"
              ? "Showing all featured projects"
              : `Showing projects in: ${selectedIndustries.join(", ")}`
            }
          </p>
        </div>
      </div>

      {/* Works Grid */}
      <main className="px-4">
        {filteredWorks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div key={work.id} className="flex flex-col">
                {/* Project Card */}
                <ProjectCard project={work} />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 mb-4">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Industries */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {work.industries.map((industry, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium uppercase tracking-wide px-3 py-1 rounded-full ${
                        selectedIndustries.includes(industry)
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-gray-800/50 text-gray-400"
                      }`}
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <div className="max-w-[800px]">
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-5 text-white">
                    {work.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-400">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl text-white mb-4">No projects found</h3>
            <p className="text-gray-400">
              Try selecting different industries or tags
            </p>
          </div>
        )}
      </main>

      {/* Results Count */}
      <div className="px-4 mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-400">
          Showing {filteredWorks.length} of {works.length} projects
        </p>
      </div>
    </div>
  );
};

export default Works;