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
      icon: <MdMobileFriendly className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "High-performance mobile applications designed for speed, scalability, and real-world usage.",
      longDescription:
        "We design and develop robust mobile applications for both iOS and Android platforms, focusing on performance, intuitive design, and long-term scalability. From idea validation and UI planning to development, testing, and deployment, we ensure your app delivers real value, engages users, and supports business growth.",
      link: "#"
    },
    {
      icon: <MdCode className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom-built websites and web applications using modern, reliable technologies.",
      longDescription:
        "Our web development process focuses on building fast, secure, and scalable digital products. Whether it’s a business website, portfolio, or complex web application, we combine clean code, optimized performance, and modern frameworks to create solutions that are easy to maintain and ready to grow with your business.",
      link: "#"
    },
    {
      icon: <MdMobileFriendly className="w-12 h-12" />,
      title: "Mobile Responsive",
      description:
        "Fully responsive layouts that adapt seamlessly across all screen sizes and devices.",
      longDescription:
        "We ensure your website looks and functions perfectly on smartphones, tablets, laptops, and desktops. By applying responsive design principles and extensive testing, we deliver a consistent user experience that improves accessibility, engagement, and conversion rates on every device.",
      link: "#"
    },
    {
      icon: <MdSearch className="w-12 h-12" />,
      title: "Performance & SEO Optimization",
      description:
        "Search-engine-friendly websites built to increase visibility and organic traffic.",
      longDescription:
        "Our SEO optimization process combines clean semantic code, fast load speeds, and technical best practices to help your website rank higher on search engines. We optimize site structure, metadata, and performance to attract qualified traffic and improve long-term discoverability.",
      link: "#"
    },
    {
      icon: <MdAnalytics className="w-12 h-12" />,
      title: "Analytics & Tracking",
      description:
        "Advanced tracking systems that turn user activity into meaningful insights.",
      longDescription:
        "We set up comprehensive analytics and tracking tools that allow you to understand how users interact with your website or app. From traffic sources to user behavior and conversion tracking, we provide data-driven insights that support smarter business decisions and continuous improvement.",
      link: "#"
    },
    {
      icon: <MdSecurity className="w-12 h-12" />,
      title: "Security Solutions",
      description:
        "Strong security layers to protect your platform, users, and sensitive data.",
      longDescription:
        "Security is built into every solution we deliver. We implement SSL encryption, secure authentication, regular updates, and best-practice security measures to protect your website or application against threats, vulnerabilities, and unauthorized access.",
      link: "#"
    },
    {
      icon: <MdCloud className="w-12 h-12" />,
      title: "Cloud Hosting",
      description:
        "Reliable, scalable cloud hosting optimized for speed and uptime.",
      longDescription:
        "Our cloud hosting solutions provide high availability, fast performance, and flexible scaling as your traffic grows. We handle deployment, configuration, and optimization to ensure your website or application remains stable, secure, and accessible at all times.",
      link: "#"
    },
    {
      icon: <MdSettings className="w-12 h-12" />,
      title: "Maintenance & Support",
      description:
        "Ongoing support to keep your digital products running smoothly.",
      longDescription:
        "We offer continuous maintenance and technical support to keep your website or app updated, secure, and performing at its best. From bug fixes and content updates to performance monitoring and feature enhancements, we ensure long-term reliability and peace of mind.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen mt-10 py-5">
      {/* Hero/Header */}
      <header className="px-6 py-12 max-w-7xl mx-auto">
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-6">
    {/* Left: Our Services */}
    <h1 className="text-white font-bold text-5xl sm:text-3xl md:text-6xl  leading-none text-center md:text-left h1">
      What Are The Services We Offer?
    </h1>

    {/* Right: Quote */}
    <p className="text-white/50 text-lg sm:text-xl md:text-2xl max-w-lg text-center md:text-right">
        “Excellence is not an act, but a habit. It is achieved through discipline,
  precision, and a commitment to doing things right even when no one is watching.
  That is why we focus on delivering quality, performance, and reliability in
  every line of code we write.”
  <span className="block mt-3 text-white/40 text-base">
    — Inspired by Aristotle
  </span>
    </p>
  </div>
</header>


      {/* Services Section */}
      <section className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                text-left
                hover:bg-white/10
                hover:border-blue-500/30
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="
                w-16 h-16
                bg-gradient-to-br from-blue-500 to-blue-700
                rounded-2xl
                flex items-center justify-center
                mb-5
              ">
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-2 uppercase">
                {service.title}
              </h3>

              {/* Short description */}
              <p className="text-blue-300 text-sm mb-3">
                {service.description}
              </p>

              {/* Long description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {service.longDescription}
              </p>

              {/* Custom CTA Button */}
              <a
                href={service.link}
                className="
                  group
                  flex items-center justify-between
                  w-full sm:w-2/3
                  border border-white/20
                  rounded-full
                  px-4 py-2
                  hover:bg-white/10
                  transition
                  text-sm sm:text-base
                "
              >
                <span className="text-white font-medium">
                  Read more about it
                </span>

                {/* Yellow circular arrow */}
                <span className="
                  w-9 h-9
                  bg-yellow-400
                  rounded-full
                  flex items-center justify-center
                  group-hover:translate-x-1
                  transition
                ">
                  <HiArrowRight className="text-black w-5 h-5 -rotate-18" />
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
