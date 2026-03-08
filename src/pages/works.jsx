import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Workpic from "../assets/EbbPic.jpeg";
import ManclothPic from '../assets/mancloth.jpeg'
import FlowerPic from '../assets/flower.jpeg'
import Contact from "./Contact";

const Works = () => {
  const works = [
    {
      id: 1,
      tags: ["B2C", "JIU JITSU", "WEB PLATFORM"],
      industries: ["Featured", "Web App", "Landing Page"],
      image: Workpic,
      UrlText: "www.errandsbybrownie.com",
      title: "Courier & Errand Company in Lagos, Nigeria.",
      description:""
        ,
      demoLink: "https://www.errandsbybrownie.com",
      slug: "errands-by-brownie",
    },
    {
      id: 2,
      tags: ["SOCIAL MEDIA", "SRE", "SAAS"],
      industries: ["Featured", "SaaS", "Web App"],
      image: ManclothPic,
      UrlText: "4thmanclothing.com",
      title: "Uk Fashion E-commerce Platform",
      description:
        "Inspired connects innovators and investors, enabling collaboration at scale.",
      demoLink: "https://4thmanclothing.com",
      slug: "inspired",
    },
    {
      id: 3,
      tags: ["FINANCE", "MOBILE APP"],
      industries: ["Featured", "Mobile App", "Finance"],
      image: FlowerPic,
      title: "Robo-advisor & trading platform",
      description:
        "A mobile investment platform combining automated investing and manual trading.",
      demoLink: "https://zad-demo.com",
      slug: "zad-finance",
    },
      {
      id: 1,
      tags: ["B2C", "JIU JITSU", "WEB PLATFORM"],
      industries: ["Featured", "Web App", "Landing Page"],
      image: Workpic,
      UrlText: "www.errandsbybrownie.com",
      title: "Courier & Errand Company in Lagos, Nigeria.",
      description:
        "Abu Dhabi Jiu Jitsu Pro (AJP) is a professional Brazilian Jiu Jitsu organization created to grow the sport globally.",
      demoLink: "https://www.errandsbybrownie.com",
      slug: "errands-by-brownie",
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
  ];

  const [selectedIndustries, setSelectedIndustries] = useState(["Featured"]);
  const [filteredWorks, setFilteredWorks] = useState(
    works.filter(w => w.industries.includes("Featured"))
  );

  const handleIndustryClick = (industry) => {
    let updated;

    if (selectedIndustries.includes(industry)) {
      updated = selectedIndustries.filter(i => i !== industry);
      if (updated.length === 0) updated = ["Featured"];
    } else {
      updated = [...selectedIndustries, industry];
    }

    setSelectedIndustries(updated);

    if (updated.length === 1 && updated[0] === "Featured") {
      setFilteredWorks(works.filter(w => w.industries.includes("Featured")));
    } else {
      setFilteredWorks(
        works.filter(w =>
          updated.some(ind => w.industries.includes(ind))
        )
      );
    }
  };

  const ProjectCard = ({ project }) => (
    <div className="relative min-w-[320px]">
  <div
    className="relative h-[480px] rounded-3xl overflow-hidden group"
    style={{
      clipPath: `
        polygon(
          0 0,
          76% 0,
          76% 18%,
          100% 18%,
          100% 100%,
          0 100%
        )
      `,
    }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
    />
  </div>

  {/* LIVE DEMO BUTTON */}
  <a
    href={project.demoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-2 right-2 
               w-20 h-14 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 
               rounded-lg bg-yellow-500 flex items-center justify-center 
               shadow-lg hover:scale-110 transition z-10"
  >
    <HiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
  </a>
</div>
  );

  return (
    <div className="min-h-screen py-20 pt-32 max-w-7xl mx-auto">
   
      {/* HEADER */}
      <header className="px-4 mb-20 mt-20">
        <h1 className="text-white font-bold leading-tight max-w-5xl 
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  mt-1 bg">
          We help businesses achieve their goals. <bt/>By solving real, meaningful problems.
        </h1>
      </header>

      {/* FILTER — SCROLLABLE, SCROLLBAR HIDDEN */}
      <div className="bg mb-10 px-4 p">
        <div className="space-x-6 space-y-4">
          {industries.map((item) => (
            <button
              key={item}
              onClick={() => handleIndustryClick(item)}
              className={`text-2xl transition ${
                selectedIndustries.includes(item)
                  ? "text-gray-500"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 sm:gap-y-24 md:gap-y-0 gap-y-24 px-4">
        {filteredWorks.map((work, index) => (
          <div
            key={work.id}
            className={`${index % 2 === 1 ? "lg:mt-96" : ""}`}
          >
            <ProjectCard project={work} />

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-6 mb-4">
              {work.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wide text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* TITLE — INTERNAL LINK */}
            <Link to={`/projects/${work.slug}`}>
              <h3 className="text-3xl font-bold text-white mb-4 hover:text-yellow-300">
                {work.title}
              </h3>
            </Link>

            <p className="text-gray-400 text-lg">
              {work.description}
            </p>
          </div>
        ))}
      </main>

      <Contact/>
    </div>
  );
};

export default Works;
