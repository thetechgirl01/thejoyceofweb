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
      tags: ["Courier", "Errands", "WEB PLATFORM"],
      industries: ["Featured", "Web Design & Development"],
      image: Workpic,
      UrlText: "www.errandsbybrownie.com",
      title: "Courier & Errand Company in Lagos, Nigeria.",
      description:"A responsive website for a Lagos-based courier and errand service, designed to showcase services and make it easy for customers to request deliveries and errands online."
        ,
      demoLink: "https://www.errandsbybrownie.com",
      slug: "errands-by-brownie",
    },
    {
      id: 2,
      tags: ["E-commerce", "Fashion", "Brand"],
      industries:  ["Featured", "Web Design & Development"],
      image: ManclothPic,
      UrlText: "4thmanclothing.com",
      title: "Uk Fashion E-commerce Platform",
      description:
        "A modern e-commerce website for a UK fashion brand, designed to showcase products, provide a smooth shopping experience, and make online purchasing simple and fast.",
      demoLink: "https://4thmanclothing.com",
      slug: "4thmanclothing",
    },
    {
      id: 3,
      tags: ["Flowershop", "Store", "Web App"],
      industries: ["Featured", "Web Design & Development"],
      image: FlowerPic,
      title: "Online Flower Store",
      description:
        "A beautifully designed online flower store that showcases floral products and allows customers to easily browse and order flowers online",
      demoLink: "https://zad-demo.com",
      slug: "the-rose-room-by-adelas",
    },
    
  ];

  const industries = [
    "Featured",
    "Web Design & Development",
    "Logo Design"
   
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
    <div className="relative min-w-0">
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
      loading="lazy"
      decoding="async"
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
    />
  </div>

  {/* LIVE DEMO BUTTON */}
  <a
    aria-label={`Visit ${project.title} (opens in a new tab)`}
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
          We help businesses achieve their goals. <br />By solving real, meaningful problems.
        </h1>
      </header>

      {/* FILTER — SCROLLABLE, SCROLLBAR HIDDEN */}
      <div className="bg mb-10 px-4 p">
        <div className="space-x-6 space-y-4">
          {industries.map((item) => (
            <button
              key={item}
              aria-pressed={selectedIndustries.includes(item)}
              onClick={() => handleIndustryClick(item)}
              className={`text-2xl transition ${
                selectedIndustries.includes(item)
                  ? "text-gray-300"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <section aria-label="Projects" className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-24 px-4">
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
                  className="text-xs uppercase tracking-wide text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* TITLE — INTERNAL LINK */}
            {work.slug === "errands-by-brownie" ? <Link to={`/projects/${work.slug}`}>
              <h3 className="text-3xl font-bold text-white mb-4 hover:text-yellow-300">
                {work.title}
              </h3>
            </Link> : <h3 className="text-3xl font-bold text-white mb-4">{work.title}</h3>}

            <p className="text-gray-400 text-lg">
              {work.description}
            </p>
          </div>
        ))}
      </section>

      <Contact/>
    </div>
  );
};

export default Works;
