import React from "react";
import Workpic from "../assets/director.jpg";

const Works = () => {
  const works = [
    {
      id: 1,
      tags: ["B2C", "JIU JITSU TOURNAMENT ORGANIZATION", "WEB PLATFORM"],
      Image: Workpic,
      title: "AJP: World's fastest growing jiu jitsu tournament organization",
      description:
        "Abu Dhabi Jiu Jitsu Pro (AJP) is a professional Brazilian Jiu Jitsu organization created with the goal of developing the sport of jiu jitsu around the world. In 2023, Shakuro has been privileged to design and build a website for AJP.",
    },
    {
      id: 2,
      tags: ["SOCIAL MEDIA", "SITE RELIABILITY ENGINEERING", "SRE", "DOWNTIME", "UPTIME"],
      Image: Workpic,
      title:
        "Innovating connections: empowering innovators and investors with Inspired",
      description:
        "Inspired connects innovators and investors, making collaboration seamless and impactful.",
    },
    {
      id: 3,
      tags: ["B2C", "FINANCE", "MOBILE APPLICATION"],
      Image: Workpic,
      title:
        "Platform that integrates both robo-advisor and trading features",
      description:
        "Zad is a mobile investment platform that integrates both robo-advisor and trading features.",
    },
   
  ];

  const industry = [
    
    "Featured", "E-commerce","Portfolio","Blog","Landing Page",
  "Corporate","SaaS","Web App","Web3","Real Estate",
  ]

  return (
    
    <div className="min-h-screen py-10 sm:py-16 max-w-7xl mx-auto ">

      {/* Header */}
      <header className="px-4 sm:px-6 o mb-12 sm:mb-20 mt-20">
       

        <h1 className="text-white text-4xl blue sm:text-5xl lg:text-[3.5rem] leading-tight max-w-[800px]">
          Helping businesses achieve goals. Solving people's problems.
        </h1>
      </header>

      <div className="overflow-x-auto mb-8">
  <div className="flex flex-wrap justify-start gap-4">
    {industry.map((item, index) => (
      <div
        key={index}
        className="text-white text-lg px-4 py-2 rounded-3xl border border-gray-500 text-center flex-shrink-0"
      >
        {item}
      </div>
    ))}
  </div>
</div>


     

      {/* Works Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 md:gap-y-0 blue">
        {works.map((work, index) => (
          <div
            key={work.id}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:mt-96" : ""
            }`}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {work.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium uppercase tracking-wide text-gray-500 oncli"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Image */}
            <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] mb-8 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={work.Image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="max-w-[800px]">
              <h3 className="text-3xl sm:text-[2.5rem] font-bold leading-tight mb-5">
                {work.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-400">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </main>

   
    </div>
  );
};

export default Works;
