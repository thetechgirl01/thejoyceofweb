import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tklogo from "../assets/tklogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/5 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="w-14">
              <img src={Tklogo} alt="Teckneik Logo" />
            </div>

            {/* Menu Button - FIXED SECTION */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[60] w-11 h-11 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {/* Animated Circle - Now white when open */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
                  isOpen ? "scale-100 bg-white" : "scale-0 bg-transparent"
                }`}
              />

              {/* ICON Container - Always on top */}
              <span className="relative z-10">
                {!isOpen ? (
                  /* Two-line Menu Icon */
                  <span className="relative flex flex-col gap-2">
                    <span className="block h-[2px] w-7 bg-white" />
                    <span className="block h-[2px] w-5 bg-white" />
                  </span>
                ) : (
                  /* X Icon - Now white and properly positioned */
                  <span className="relative w-6 h-6 flex items-center justify-center">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                      <span className="absolute w-6 h-[2px] bg-black rotate-45" />
                      <span className="absolute w-6 h-[2px] bg-black -rotate-45" />
                    </span>
                  </span>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      </div>

      {/* SLIDE MENU */}
      <aside
        className={`fixed top-0 right-0 h-screen z-50 bg-gray-900/95 text-black
        transition-transform duration-500 ease-in-out
        w-full md:w-[35%]
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col justify-center px-10 md:px-14">
          <ul className="space-y-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl md:text-4xl font-light tracking-tight hover:opacity-60 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}