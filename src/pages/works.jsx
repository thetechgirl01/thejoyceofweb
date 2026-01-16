import React, { useEffect, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:1337";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState(["Featured"]);

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

  useEffect(() => {
    fetch(`${API_URL}/api/projects?populate=*`)
      .then(res => res.json())
      .then(res => {
        const data = res.data.map(item => ({
          id: item.id,
          title: item.attributes.title,
          slug: item.attributes.slug,
          description: item.attributes.description,
          tags: item.attributes.tags || [],
          industries: item.attributes.industries || [],
          image: item.attributes.featuredImage?.data?.attributes?.url
            ? `${API_URL}${item.attributes.featuredImage.data.attributes.url}`
            : null,
        }));

        setWorks(data);
        setFilteredWorks(
          data.filter(work => work.industries.includes("Featured"))
        );
      });
  }, []);

  const handleIndustryClick = (industry) => {
    let updated;

    if (selectedIndustries.includes(industry)) {
      updated = selectedIndustries.filter(i => i !== industry);
      if (!updated.length) updated = ["Featured"];
    } else {
      updated = [...selectedIndustries, industry];
    }

    setSelectedIndustries(updated);

    if (updated.includes("Featured") && updated.length === 1) {
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
          clipPath: `polygon(0 0,76% 0,76% 20%,100% 20%,100% 100%,0 100%)`
        }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition"
          />
        )}
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-6 left-6 right-6">
          <Link to={`/work/${project.slug}`}>
            <h3 className="text-white font-semibold uppercase text-lg">
              {project.title}
            </h3>
          </Link>
        </div>
      </div>

      <Link
        to={`/work/${project.slug}`}
        className="absolute top-2 right-2 w-14 h-14 rounded-lg bg-yellow-500 flex items-center justify-center hover:scale-110 transition"
      >
        <HiArrowUpRight className="w-6 h-6 text-black" />
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen py-16 max-w-7xl mx-auto">
      <header className="px-4 mb-20 mt-20">
        <h1 className="text-white text-5xl max-w-[800px]">
          Helping businesses achieve goals. Solving people's problems.
        </h1>
      </header>

      <div className="flex flex-wrap gap-4 px-4 mb-10">
        {industries.map(item => (
          <button
            key={item}
            onClick={() => handleIndustryClick(item)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedIndustries.includes(item)
                ? "bg-yellow-500 text-black border-yellow-500"
                : "text-white border-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32 px-4">
        {filteredWorks.map((work, i) => (
          <div key={work.id} className={i % 2 ? "lg:mt-96" : ""}>
            <ProjectCard project={work} />

            <div className="flex flex-wrap gap-2 mt-6">
              {work.tags.map(tag => (
                <span key={tag} className="text-xs text-gray-500 uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-white mt-6">
              {work.title}
            </h3>
            <p className="text-gray-400 mt-4">{work.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Works;
