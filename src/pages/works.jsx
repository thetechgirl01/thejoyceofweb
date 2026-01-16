import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Workpic from "../assets/director.jpg";

const Works = () => {
  const works = [
    {
      id: 1,
      tags: ["B2C", "JIU JITSU", "WEB PLATFORM"],
      industries: ["Featured", "Web App", "Corporate", "Landing Page"],
      image: Workpic,
      title: "AJP: World's fastest growing jiu jitsu tournament organization",
      description:
        "Abu Dhabi Jiu Jitsu Pro (AJP) is a professional Brazilian Jiu Jitsu organization created to grow the sport globally.",
      demoLink: "https://ajp-demo.com",
      slug: "errands-by-brownie",
    },
    {
      id: 2,
      tags: ["SOCIAL MEDIA", "SRE", "SAAS"],
      industries: ["Featured", "SaaS", "Web App"],
      image: Workpic,
      title: "Inspired — connecting innovators & investors",
      description:
        "Inspired connects innovators and investors, enabling collaboration at scale.",
      demoLink: "https://inspired-demo.com",
      slug: "inspired",
    },
    {
      id: 3,
      tags: ["FINANCE", "MOBILE APP"],
      industries: ["Featured", "Mobile App", "Finance"],
      image: Workpic,
      title: "Robo-advisor & trading platform",
      description:
        "A mobile investment platform combining automated investing and manual trading.",
      demoLink: "https://zad-demo.com",
      slug: "zad-finance",
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
          `,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* TITLE → INTERNAL PAGE */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link to={`/projects/${project.slug}`}>
            <h3 className="text-white font-semibold uppercase text-lg">
              {project.title}
            </h3>
          </Link>
        </div>
      </div>

      {/* LIVE DEMO BUTTON */}
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 w-14 h-14 rounded-lg bg-yellow-500 flex items-center justify-center shadow-lg hover:scale-110 transition z-10"
      >
        <HiArrowUpRight className="w-6 h-6 text-black" />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen py-16 max-w-7xl mx-auto">
      {/* HEADER */}
      <header className="px-4 mb-20 mt-20">
        <h1 className="text-white text-5xl leading-tight max-w-[800px]">
          Helping businesses achieve goals. Solving real problems.
        </h1>
      </header>

      {/* FILTER */}
      <div className="overflow-x-auto mb-10 px-4">
        <div className="flex flex-wrap gap-3">
          {industries.map((item) => (
            <button
              key={item}
              onClick={() => handleIndustryClick(item)}
              className={`px-4 py-2 rounded-3xl border transition ${
                selectedIndustries.includes(item)
                  ? "bg-yellow-500 text-black border-yellow-500"
                  : "text-white border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-24 px-4">
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

            {/* INDUSTRIES */}
            <div className="flex flex-wrap gap-2 mb-6">
              {work.industries.map(ind => (
                <span
                  key={ind}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400"
                >
                  {ind}
                </span>
              ))}
            </div>

            {/* CONTENT */}
            <h3 className="text-3xl font-bold text-white mb-4">
              {work.title}
            </h3>
            <p className="text-gray-400 text-lg">
              {work.description}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Works;
