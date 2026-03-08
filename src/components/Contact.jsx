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
      <header className="px-auto  max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          
          <h1 className="
            text-white font-bold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            text-center lg:text-left
            max-w-xl
          ">
           
                  Have an idea? 
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
                       w-fit
                      border border-gray-500
                      rounded-4xl
                      px-4 py-2
                      text-sm sm:text-base
                      hover:bg-gray-800
                      transition-all duration-300
                    "
                  >
                    <span className="text-white font-medium mx-auto pr-7 group-hover:text-white transition-colors">
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
                    contact@crownatech.com
                  </a>
                </div>
              </div>
     


        </div>
      </header>


   
        
   
      
    </div>
  );
};

export default Contact;