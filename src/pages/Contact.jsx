import React, { useState } from 'react';
import { FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    customBudget: '',
    message: ''
  });

  const projectTypes = [
    'Business Website',
    'E-commerce Store',
    'Web Application',
    'Portfolio Site',
    'Blog/Content',
    'SaaS Platform',
    'Landing Page',
    'Redesign/Update'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    'Over $10,000'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProjectTypeSelect = (type) => {
    setFormData(prev => ({
      ...prev,
      projectType: type
    }));
  };

  const handleBudgetSelect = (range) => {
    setFormData(prev => ({
      ...prev,
      budget: range,
      customBudget: '' // Clear custom budget when selecting a range
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen py-10 sm:py-16">
      
      {/* HERO */}
      <header className="px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          
          <div className="flex-1">
            <h1 className="
              text-white font-bold leading-tight text-center lg:text-left
              text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              max-w-lg sm:max-w-xl
            ">
              Let's Build Something Amazing
            </h1>

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
              <div className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
                <FaRegEnvelope className="w-4 h-4" />
                <span>contact@crownatech.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
                <FaPhoneAlt className="w-4 h-4" />
                <span>+234 123 456 7890</span>
              </div>
            </div>
          </div>

          {/* Envelope Icon */}
          <div className="
            w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32
            rounded-full border-2 border-blue-400 
            bg-blue-400
            flex items-center justify-center
            flex-shrink-0
            mt-6 lg:mt-0
            mx-auto lg:mx-0
          ">
            <FaRegEnvelope className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>

        </div>
      </header>

      {/* CONTENT SECTION */}
      <div className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - CONTACT INFO */}
          <div className="lg:col-span-1">
            <div className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl
              p-6 sm:p-8
              h-fit
              sticky top-6
            ">
              <h3 className="
                text-white
                text-xl sm:text-2xl font-bold
                mb-6
              ">
                Why Choose CrownTech
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="
                    w-10 h-10
                    bg-blue-500/20
                    rounded-lg
                    flex items-center justify-center
                    flex-shrink-0
                  ">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Expert Consultation</h4>
                    <p className="text-white/60 text-sm">
                      Free initial consultation to understand your needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="
                    w-10 h-10
                    bg-blue-500/20
                    rounded-lg
                    flex items-center justify-center
                    flex-shrink-0
                  ">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Transparent Pricing</h4>
                    <p className="text-white/60 text-sm">
                      Clear quotes with no hidden fees
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="
                    w-10 h-10
                    bg-blue-500/20
                    rounded-lg
                    flex items-center justify-center
                    flex-shrink-0
                  ">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Fast Response</h4>
                    <p className="text-white/60 text-sm">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="
                    w-10 h-10
                    bg-blue-500/20
                    rounded-lg
                    flex items-center justify-center
                    flex-shrink-0
                  ">
                    <span className="text-blue-400 text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Ongoing Support</h4>
                    <p className="text-white/60 text-sm">
                      Post-launch support and maintenance included
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                  <h4 className="text-white font-medium">Our Location</h4>
                </div>
                <p className="text-white/60 text-sm">
                  Lagos, Nigeria<br />
                  Available for worldwide projects
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl
              p-6 sm:p-8
            ">
              <h3 className="
                text-white
                text-xl sm:text-2xl font-bold
                mb-6
              ">
                Tell Us About Your Project
              </h3>

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full
                      px-4 py-3
                      backdrop-blur-xl bg-white/10
                      border border-white/20
                      rounded-xl
                      text-white
                      placeholder:text-white/40
                      focus:outline-none focus:border-blue-500
                      transition
                    "
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full
                      px-4 py-3
                      backdrop-blur-xl bg-white/10
                      border border-white/20
                      rounded-xl
                      text-white
                      placeholder:text-white/40
                      focus:outline-none focus:border-blue-500
                      transition
                    "
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-6">
                <label className="block text-white/70 text-sm mb-3">
                  Project Type *
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleProjectTypeSelect(type)}
                      className={`
                        px-4 py-2
                        rounded-full
                        text-sm font-medium
                        transition-all
                        ${formData.projectType === type
                          ? 'bg-blue-500 text-white'
                          : 'backdrop-blur-xl bg-white/10 text-white hover:bg-white/20'
                        }
                      `}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label className="block text-white/70 text-sm mb-3">
                  Estimated Budget *
                </label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => handleBudgetSelect(range)}
                      className={`
                        px-4 py-2
                        rounded-full
                        text-sm font-medium
                        transition-all
                        ${formData.budget === range
                          ? 'bg-blue-500 text-white'
                          : 'backdrop-blur-xl bg-white/10 text-white hover:bg-white/20'
                        }
                      `}
                    >
                      {range}
                    </button>
                  ))}
                </div>

                {/* Custom Budget Input */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Or enter a custom budget (optional)
                  </label>
                  <input
                    type="text"
                    name="customBudget"
                    value={formData.customBudget}
                    onChange={handleInputChange}
                    placeholder="Enter specific amount"
                    className="
                      w-full
                      px-4 py-3
                      backdrop-blur-xl bg-white/10
                      border border-white/20
                      rounded-xl
                      text-white
                      placeholder:text-white/40
                      focus:outline-none focus:border-blue-500
                      transition
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-white/70 text-sm mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="
                    w-full
                    px-4 py-3
                    backdrop-blur-xl bg-white/10
                    border border-white/20
                    rounded-xl
                    text-white
                    placeholder:text-white/40
                    focus:outline-none focus:border-blue-500
                    transition
                    resize-none
                  "
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  group
                  flex items-center justify-between
                  w-full
                  border border-white/20
                  rounded-full
                  px-6 py-4
                  text-sm sm:text-base
                  hover:bg-white/10
                  transition
                "
              >
                <span className="text-white font-medium">
                  Send Request
                </span>

                <span className="
                  w-8 h-8
                  sm:w-10 sm:h-10
                  bg-yellow-400
                  rounded-full
                  flex items-center justify-center
                  group-hover:translate-x-1
                  transition
                ">
                  <FaPaperPlane className="text-black w-4 h-4 -rotate-45" />
                </span>
              </button>

              {/* Privacy Note */}
              <p className="
                text-white/40 text-xs sm:text-sm
                text-center mt-6
              ">
                By submitting this form, you agree to our Privacy Policy. 
                We'll never share your information with third parties.
              </p>
            </form>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-xl
                p-4
                text-center
              ">
                <div className="text-blue-400 text-lg font-bold mb-1">
                  24-48 Hours
                </div>
                <div className="text-white/60 text-sm">
                  Average Response Time
                </div>
              </div>

              <div className="
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-xl
                p-4
                text-center
              ">
                <div className="text-blue-400 text-lg font-bold mb-1">
                  100+ Projects
                </div>
                <div className="text-white/60 text-sm">
                  Successfully Delivered
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