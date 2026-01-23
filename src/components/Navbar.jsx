import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tklogo from '../assets/tklogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Works", path: "/works" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Custom web development",
    "UI/UX design",
    "Content marketing",
    "E-commerce solutions",
    "SEO optimization",
    "Mobile app development",
    "Brand strategy",
    "Digital transformation"
  ];

  const tools = [
    'JavaScript', 'React', 'Node', 'Express', 'Bootstrap', 'jQuery',
    'PHP', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma', 'WordPress',
    'Tailwind CSS', 'Next.js', 'TypeScript', 'GraphQL', 'AWS', 'Docker'
  ];

  return (
    <>
      {/* NAVBAR - Fixed with highest z-index */}
      <nav
        className={`fixed w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/5 backdrop-blur-sm shadow-md text-black"
            : "bg-transparent text-white bg-white/5 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 w-14">
              <img src={Tklogo} alt="Teckneik Logo" />
            </div>

            {/* Menu Button - Always clickable */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-11 h-11 flex items-center justify-center rounded-full overflow-visible"
              aria-label="Toggle menu"
            >
              {/* Animated White Circle Background */}
              <span
                className={`absolute inset-0 rounded-full bg-white transition-all duration-500 ease-out ${
                  isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
              
              {/* Menu Icon Container */}
              <span className="relative w-6 h-5 flex items-center justify-center">
                {/* Two-line Hamburger Menu (when closed) */}
                {!isOpen ? (
                  <span className="flex flex-col gap-1.5 w-full">
                    <span className="block h-[2px] w-full bg-white rounded-full transition-all duration-300" />
                    <span className="block h-[2px] w-3/4 bg-white rounded-full transition-all duration-300" />
                  </span>
                ) : (
                  /* X Icon (when open) */
                  <span className="relative w-5 h-5">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[2px] bg-black rotate-45 rounded-full" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[2px] bg-black -rotate-45 rounded-full" />
                  </span>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay - Behind nav but above content */}
      <div
        className={`fixed inset-0 z-[90] bg-black transition-opacity duration-500 ${
          isOpen
            ? "opacity-40 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide Menu - Below navbar but above overlay */}
      <aside
        className={`fixed top-0 right-0 h-screen z-[95] bg-gray-900/95 backdrop-blur-md
          transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          w-full md:w-[35%] lg:w-[30%] xl:w-[25%]
          overflow-y-auto`}
      >
        <div className="h-full flex flex-col px-8 sm:px-12 md:px-16 pt-16 pb-8">
          {/* Navigation Links */}
          <div className="flex-grow">
            <ul className="space-y-6 md:space-y-8 mb-12">
              {navLinks.map((link, index) => (
                <li key={link.name} className="overflow-hidden">
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-3xl md:text-4xl lg:text-5xl font-light text-white 
                             tracking-tight hover:text-yellow-300 
                             transition-all duration-300 transform hover:translate-x-4
                             hover:opacity-80"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transform: isOpen ? 'translateX(0)' : 'translateX(100px)',
                      opacity: isOpen ? 1 : 0,
                      transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms, 
                                   opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms, 
                                   color 0.3s ease`
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Services Section */}
            <div 
              className="mb-10 overflow-hidden"
              style={{
                transitionDelay: `${navLinks.length * 100 + 200}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 200}ms, 
                             opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 200}ms`
              }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-yellow-300 mb-4">
                What We Bring to the Table
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div 
                    key={service}
                    className="text-white/80 hover:text-yellow-300 transition-colors duration-300"
                    style={{
                      transitionDelay: `${navLinks.length * 100 + 300 + (index * 50)}ms`,
                      transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                      opacity: isOpen ? 1 : 0,
                      transition: `transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 300 + (index * 50)}ms, 
                                   opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 300 + (index * 50)}ms`
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-300 text-xs">▸</span>
                      <span className="text-sm md:text-base">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div 
              className="overflow-hidden"
              style={{
                transitionDelay: `${navLinks.length * 100 + 600}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 600}ms, 
                             opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 600}ms`
              }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-yellow-300 mb-4">
                Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span 
                    key={tool}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full 
                             text-white/90 hover:text-yellow-300 hover:bg-white/20 
                             text-xs md:text-sm transition-all duration-300"
                    style={{
                      transitionDelay: `${navLinks.length * 100 + 700 + (index * 30)}ms`,
                      transform: isOpen ? 'scale(1)' : 'scale(0.8)',
                      opacity: isOpen ? 1 : 0,
                      transition: `transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 700 + (index * 30)}ms, 
                                   opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 700 + (index * 30)}ms`
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Button - Sticky at bottom */}
          <div 
            className="pt-8 mt-8 border-t border-white/20 overflow-hidden"
            style={{
              transitionDelay: `${navLinks.length * 100 + 1000}ms`,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 1000}ms, 
                           opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100 + 1000}ms`
            }}
          >
          
          </div>
        </div>
      </aside>
    </>
  );
}