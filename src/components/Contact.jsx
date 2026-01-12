import React, { useState } from 'react';
import { 
  FaRegEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaPaperPlane,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaDribbble
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// Import your logo image
import Logo from '../assets/tklogo.png'; // Update this path to your actual logo

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

  const socialLinks = [
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com/crownatech' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/company/crownatech' },
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/crownatech' },
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://instagram.com/crownatech' },
    { icon: <FaYoutube />, label: 'YouTube', url: 'https://youtube.com/@crownatech' },
    { icon: <FaDribbble />, label: 'Dribbble', url: 'https://dribbble.com/crownatech' }
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
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          
          <h1 className="
            text-white font-bold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            text-center lg:text-left
            max-w-xl
          ">
           
                  Have an idea? <br />
                    We can help.

          </h1>

           {/* Have an idea? Section */}
              <div className="mb-10 sm:mb-12">
                
                
                <div className="mb-8">
                  <button
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    className="
                      group
                      flex items-center justify-between
                      w-full max-w-sm
                      border border-gray-500
                      rounded-full
                      px-6 py-4
                      text-sm sm:text-base
                      hover:bg-gray-800
                      transition-all duration-300
                    "
                  >
                    <span className="text-white font-medium group-hover:text-white transition-colors">
                      Get in Touch
                    </span>

                    <span className="
                      w-10 h-10
                      bg-yellow-400
                      rounded-full
                      flex items-center justify-center
                      group-hover:translate-x-1
                      transition-transform
                    ">
                      <HiArrowRight className="text-black w-5 h-5 -rotate-45" />
                    </span>
                  </button>
                </div>
                
                {/* Email Contact */}
                <div className="flex items-center gap-3">
                  <FaRegEnvelope className="w-5 h-5 text-gray-600" />
                  <a 
                    href="mailto:hello@crownatech.com" 
                    className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors"
                  >
                    hello@crownatech.com
                  </a>
                </div>
              </div>
     


        </div>
      </header>


   
        
   
         {/* SOCIALS & LOGO SECTION */}
            <div className="mt-20 px-4 sm:px-6 max-w-7xl mx-auto">
              <div className="
                bg-white
                rounded-2xl sm:rounded-3xl
                overflow-hidden
                shadow-2xl
              ">
                
                <div className="flex flex-col lg:flex-row">
                  
                  {/* LEFT SIDE - SOCIALS */}
                  
                  <div className="
                    lg:w-1/2
                    p-8 sm:p-12 md:p-16
                    bg-gradient-to-br from-blue-50 to-gray-50
                  ">
                    <h3 className="
                      text-gray-800
                      text-2xl sm:text-3xl md:text-4xl
                      font-bold
                      mb-6 sm:mb-8
                    ">
                      Connect With Us
                    </h3>
                    
                    <p className="
                      text-gray-600
                      text-base sm:text-lg
                      mb-8 sm:mb-10
                      leading-relaxed
                    ">
                      Follow CrownaTech on social media to stay updated with our latest projects, 
                      tech insights, and company news.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group
                            flex flex-col items-center
                            p-4
                            bg-white
                            border border-gray-200
                            rounded-xl
                            hover:bg-blue-50
                            hover:border-blue-300
                            hover:shadow-lg
                            transition-all duration-300
                          "
                        >
                          <div className="
                            w-12 h-12
                            flex items-center justify-center
                            text-gray-700
                            group-hover:text-blue-600
                            transition-colors
                            mb-3
                          ">
                            <div className="w-6 h-6">
                              {social.icon}
                            </div>
                          </div>
                          <span className="
                            text-gray-800
                            text-sm font-medium
                            group-hover:text-blue-700
                            transition-colors
                          ">
                            {social.label}
                          </span>
                        </a>
                      ))}
                    </div>
                    
                    <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-200">
                      <p className="text-gray-500 text-sm">
                        Connect with our community of developers, designers, and innovators.
                      </p>
                    </div>
                  </div>
                  
                  {/* RIGHT SIDE - LOGO */}
                  <div className="
                    lg:w-1/2
                    p-8 sm:p-12 md:p-16
                    flex flex-col items-center justify-center
                    bg-gray-900/95
                    relative
                    overflow-hidden
                  ">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-10 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 translate-y-20"></div>
                    
                    {/* Logo Container */}
                    <div className="relative z-10 text-center">
                      <div className="
                        w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48
                        mx-auto
                        mb-6 sm:mb-8
                        relative
                      ">
                        {/* Logo Placeholder - Replace with your actual logo */}
                        <div className="">
      
                          <img src={Logo} alt="" />
                        </div>
                        {/* Decorative Ring */}
                        <div className="
                          absolute inset-0
                        
                          rounded-3xl
                          animate-pulse
                        "></div>
                      </div>
                      
                      {/* Logo Text */}
                      <h2 className="
                        text-white
                        text-3xl sm:text-4xl md:text-5xl
                        font-bold
                        mb-3
                        tracking-tight
                      ">
                        CrownaTech
                      </h2>
                 
                    
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
    </div>
  );
};

export default Contact;