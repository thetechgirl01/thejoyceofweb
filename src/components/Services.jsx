// src/pages/ServicesPage.jsx
import React from "react";
import {
  MdCode,
  MdMobileFriendly,
  MdSearch,
  MdAnalytics,
  MdSecurity,
  MdCloud,
  MdSettings
} from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

const ServicesPage = () => {
  const services = [
    {
      icon: <MdMobileFriendly className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile App Development",
      description:
        "High-performance mobile applications designed for speed, scalability, and real-world usage.",
      longDescription:
        "We design and develop robust mobile applications for both iOS and Android platforms, focusing on performance, intuitive design, and long-term scalability.",
      link: "#"
    },
    {
      icon: <MdCode className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Web Development",
      description:
        "Custom-built websites and web applications using modern, reliable technologies.",
      longDescription:
        "Our web development process focuses on fast, secure, and scalable digital products that are easy to maintain and ready to grow.",
      link: "#"
    },
    {
      icon: <MdMobileFriendly className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile Responsive",
      description:
        "Fully responsive layouts that adapt seamlessly across all screen sizes.",
      longDescription:
        "We ensure your website looks and works perfectly across smartphones, tablets, and desktops through responsive design and testing.",
      link: "#"
    },
    {
      icon: <MdSearch className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Performance & SEO",
      description:
        "Search-engine-friendly websites built to increase visibility.",
      longDescription:
        "We combine clean semantic code, fast load speeds, and SEO best practices to improve rankings and discoverability.",
      link: "#"
    },
    {
      icon: <MdAnalytics className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics & Tracking",
      description:
        "Advanced tracking systems that turn user activity into insights.",
      longDescription:
        "We set up analytics tools to understand user behavior, traffic sources, and conversions for smarter decisions.",
      link: "#"
    },
    {
      icon: <MdSecurity className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Security Solutions",
      description:
        "Strong security layers to protect platforms and data.",
      longDescription:
        "We implement SSL, secure authentication, updates, and best practices to protect against threats.",
      link: "#"
    },
    {
      icon: <MdCloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Cloud Hosting",
      description:
        "Reliable, scalable cloud hosting optimized for uptime.",
      longDescription:
        "High availability hosting with flexible scaling and performance optimization.",
      link: "#"
    },
    {
      icon: <MdSettings className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Maintenance & Support",
      description:
        "Ongoing support to keep products running smoothly.",
      longDescription:
        "Continuous maintenance, updates, monitoring, and feature enhancements for long-term reliability.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16">
      
      {/* HERO */}
      <header className="px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          
          <h1 className="
            text-white font-bold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            text-center lg:text-left
            max-w-xl
          ">
            What Are The Services We Offer?
          </h1>

          <p className="
            text-white/50
            text-sm sm:text-base md:text-lg
            max-w-lg
            text-center lg:text-right
            leading-relaxed
          ">
            “Excellence is not an act, but a habit. It is achieved through discipline,
            precision, and a commitment to doing things right even when no one is watching.”
            <span className="block mt-2 text-white/40 text-xs sm:text-sm">
              — Inspired by Aristotle
            </span>
          </p>
        </div>
      </header>

      {/* SERVICES GRID */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-xl
                p-4 sm:p-6
                hover:bg-white/10
                hover:-translate-y-1
                transition
              "
            >
              {/* Icon */}
              <div className="
                w-12 h-12 sm:w-14 sm:h-14
                bg-gradient-to-br from-blue-500 to-blue-700
                rounded-xl
                flex items-center justify-center
                mb-4
              ">
                <div className="text-white">{service.icon}</div>
              </div>

              <h3 className="text-white text-base sm:text-lg font-semibold mb-1 uppercase">
                {service.title}
              </h3>

              <p className="text-blue-300 text-xs sm:text-sm mb-2">
                {service.description}
              </p>

              <p className="text-gray-300 text-xs sm:text-sm leading-snug mb-4">
                {service.longDescription}
              </p>

              <a
                href={service.link}
                className="
                  group
                  flex items-center justify-between
                  w-full
                  border border-white/20
                  rounded-full
                  px-3 py-2
                  text-xs sm:text-sm
                  hover:bg-white/10
                  transition
                "
              >
                <span className="text-white font-medium">
                  Read more
                </span>

                <span className="
                  w-8 h-8
                  bg-yellow-400
                  rounded-full
                  flex items-center justify-center
                  group-hover:translate-x-1
                  transition
                ">
                  <HiArrowRight className="text-black w-4 h-4 -rotate-45" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
