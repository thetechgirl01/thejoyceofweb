// src/pages/Contact.jsx
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaPhone,
  FaMapMarkerAlt,
  FaRegEnvelope
} from "react-icons/fa";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (step === 1 && !name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email");
        return;
      }
    }
    setError("");
    setStep(step + 1);
  };

  const handleSend = () => {
    if (!message.trim()) {
      setError("Please enter your message");
      return;
    }
    setError("");
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setStep(1);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (step < 3) handleNext();
      else handleSend();
    }
  };

  return (
      <div className="min-h-screen py-10 sm:py-16">
      
      {/* HERO */}
      <header className="px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8">

            <h1 className="
              text-white font-bold leading-tight text-center lg:text-left
              text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              max-w-lg sm:max-w-xl
              px-2
            ">
              Let's Build Something Amazing
            </h1>

            {/* Envelope Icon */}
            <div className="
              w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 md:flex sm:hidden
              rounded-full border-2 border-blue-400 
              bg-blue-400
              flex items-center justify-center
              flex-shrink-0
              mt-2 sm:mt-0
             
            ">
              <FaRegEnvelope className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="
            text-center lg:text-left
            text-gray-300 mt-4 sm:mt-6
            text-sm sm:text-base md:text-lg
            max-w-2xl
          ">
            Get in touch and let's discuss how we can bring your vision to life.
          </p>

          {/* Contact Info Bar */}
          <div className="
            mt-6 sm:mt-8 
            flex flex-col xs:flex-row 
            gap-3 sm:gap-4 
            justify-center lg:justify-start
          ">
           
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
            
            {/* Form Section */}
            <div className="w-full lg:w-2/3">
              <div className="bg-gray-900/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/50">
                
                {/* Progress Indicator */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    {[1, 2, 3].map((num) => (
                      <React.Fragment key={num}>
                        <div className={`
                          w-8 h-8 sm:w-10 sm:h-10 
                          rounded-md flex items-center justify-center
                          border-2 ${step >= num ? 'border-yellow-400 bg-yellow-400/20' : 'border-gray-600'}
                          ${step === num ? 'ring-2 ring-yellow-400/30' : ''}
                        `}>
                          <span className={`
                            text-sm sm:text-base font-semibold
                            ${step >= num ? 'text-yellow-400' : 'text-gray-500'}
                          `}>
                            {num}
                          </span>
                        </div>
                        {num < 3 && (
                          <div className={`
                            w-6 sm:w-8 h-0.5 
                            ${step > num ? 'bg-yellow-400' : 'bg-gray-700'}
                          `} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Name */}
                  {step === 1 && (
                    <div className="relative">
                      
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="
                          w-full 
                          border-b-2 border-gray-600 
                          text-white placeholder-gray-500 
                          font-semibold
                          px-3 sm:px-4 py-3 sm:py-4
                          text-xl sm:text-3xl md:text-5xl 
                          focus:outline-none
                          transition-colors 
                          rounded-t-lg
                        "
                        autoFocus
                      />
                      {error && <p className="text-red-400 text-xs sm:text-sm mt-2">{error}</p>}
                      <button
                        onClick={handleNext}
                        className="
                          absolute right-0 top-1 sm:top-6
                          w-10 h-10 sm:w-12 sm:h-12
                          border-2 
                          text-black rounded-full 
                          flex items-center justify-center 
                         yellow hover:text-black 
                          transition-all duration-300
                          active:scale-95
                        "
                      >
                        <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
                      </button>
                    </div>
                  )}

                  {/* Email */}
                  {step === 2 && (
                    <div className="relative">
                      
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="
                           w-full 
                          border-b-2 border-gray-600 
                          text-white 
                          font-semibold
                          px-3 sm:px-4 py-3 sm:py-4
                          text-xl sm:text-3xl md:text-5xl 
                          focus:outline-none
                          transition-colors 
                          rounded-t-lg
                        "
                        autoFocus
                      />
                      {error && <p className="text-red-400 text-xs sm:text-sm mt-2">{error}</p>}
                      <button
                        onClick={handleNext}
                        className="
                        absolute right-0 top-1 sm:top-6
                          w-10 h-10 sm:w-12 sm:h-12
                          border-2 
                          text-black rounded-full 
                          flex items-center justify-center 
                         yellow hover:text-black 
                          transition-all duration-300
                          active:scale-95
                        "
                      >
                        <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 -rotatae-45" />
                      </button>
                    </div>
                  )}

                  {/* Message */}
                  {step === 3 && (
                    <div className="relative">
                      <label className="block text-gray-400 text-sm sm:text-base mb-2">
                     
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="
                            w-full 
                          border-b-2 border-gray-600 
                          text-white placeholder-gray-500 
                          font-semibold
                          px-3 sm:px-4 py-3 sm:py-4
                          text-2xl sm:text-3xl md:text-5xl 
                          focus:outline-none
                          transition-colors 
                          rounded-t-lg
                        
                          rounded-lg
                          resize-none
                          min-h-[120px] sm:min-h-[150px]
                        "
                        autoFocus
                      />
                      {error && <p className="text-red-400 text-xs sm:text-sm mt-2">{error}</p>}
                      <div className="flex justify-between items-center mt-4">
                        <button
                          onClick={() => setStep(2)}
                          className="
                            text-gray-400 hover:text-white
                            text-sm sm:text-base
                            flex items-center gap-1
                            transition-colors
                          "
                        >
                          ← Back
                        </button>
                        <button
                          onClick={handleSend}
                          className="
                            px-4 sm:px-6 py-2 sm:py-3
                            bg-gradient-to-r from-yellow-500 to-yellow-600
                            text-black font-semibold
                            text-sm sm:text-base
                            rounded-full
                            hover:from-yellow-400 hover:to-yellow-500
                            transform hover:-translate-y-0.5
                            transition-all duration-300
                            flex items-center gap-2
                            shadow-lg hover:shadow-yellow-500/20
                          "
                        >
                          Send Message
                          <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Matching Height Content for Large Screens */}
              <div className="hidden lg:block mt-6">
                <div className="bg-gray-900/40 rounded-2xl p-8 border border-gray-700/50 h-full">
                  <h3 className="text-white text-xl font-semibold mb-6">
                    Why Choose Us?
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Expert Consultation</h4>
                        <p className="text-gray-400 text-sm">
                          Get personalized advice from industry experts with 10+ years of experience.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Fast Turnaround</h4>
                        <p className="text-gray-400 text-sm">
                          We deliver high-quality results faster than industry standards.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Ongoing Support</h4>
                        <p className="text-gray-400 text-sm">
                          24/7 support and maintenance to keep your project running smoothly.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Transparent Pricing</h4>
                        <p className="text-gray-400 text-sm">
                          No hidden fees. Get a clear, upfront quote for your project.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700/50">
                    <div className="text-center">
                      <div className="text-yellow-400 text-2xl font-bold">24h</div>
                      <div className="text-gray-300 text-sm mt-1">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 text-2xl font-bold">100%</div>
                      <div className="text-gray-300 text-sm mt-1">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 text-2xl font-bold">50+</div>
                      <div className="text-gray-300 text-sm mt-1">Projects Done</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-900/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-700/50">
                <h2 className="
                  text-white font-semibold 
                  text-lg sm:text-xl md:text-2xl 
                  mb-4 sm:mb-6
                  text-center lg:text-left
                ">
                  Connect With Us
                </h2>
                
                {/* Social Media Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                  {[
                    { icon: FaFacebookF, label: "Facebook", color: "hover:text-blue-500" },
                    { icon: FaTwitter, label: "Twitter", color: "hover:text-sky-400" },
                    { icon: FaInstagram, label: "Instagram", color: "hover:text-pink-500" },
                    { icon: FaLinkedinIn, label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: FaDribbble, label: "Dribbble", color: "hover:text-pink-400" },
                    { icon: FaBehance, label: "Behance", color: "hover:text-blue-300" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className={`
                        flex items-center justify-between
                        p-3 sm:p-4
                        rounded-xl
                        bg-gray-900/60
                        border border-gray-700
                        text-gray-300
                        ${social.color}
                        hover:border-gray-600
                        hover:bg-gray-800/50
                        transition-all duration-300
                        group yellow-text
                      `}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="
                          w-8 h-8 sm:w-10 sm:h-10
                          rounded-lg
                          bg-gray-800
                          flex items-center justify-center
                          group-hover:scale-110
                          transition-transform
                        ">
                          <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <span className="font-medium text-sm sm:text-base">
                          {social.label}
                        </span>
                      </div>
                      <HiArrowRight className="
                        w-4 h-3 sm:w-4 sm:h-4 
                        opacity-0 group-hover:opacity-100 -rotate-45 
                        group-hover:translate-x-1 
                        transition-all
                      " />
                    </a>
                  ))}
                </div>

                {/* Quick Contact */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700/50">
                  <p className="text-gray-400 text-sm sm:text-base text-center lg:text-left mb-3">
                    Quick Response Guaranteed
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                      <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">hello@example.com</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                      <FaPhone className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Mon-Fri: 9AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     
      </div>
 
  );
};

export default Contact;