import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaLightbulb, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    { 
      name: 'Development Process', 
      icon: <FaLightbulb className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Pricing & Budget', 
      icon: <FaShieldAlt className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Technical Details', 
      icon: <FaRocket className="w-5 h-5" />,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a custom website?",
      answer: "The timeline varies based on project complexity. A simple website typically takes 2-4 weeks, while complex web applications can take 8-12 weeks. We provide a detailed project timeline during our initial consultation.",
      category: 'Development Process'
    },
    {
      question: "What is your development process?",
      answer: "Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Coding, 4) Testing & Quality Assurance, 5) Launch & Deployment, and 6) Ongoing Support. We maintain transparent communication throughout all stages.",
      category: 'Development Process'
    },
    {
      question: "Do you offer maintenance after launch?",
      answer: "Yes, we provide comprehensive post-launch support packages including security updates, performance monitoring, content updates, and technical support. We offer monthly, quarterly, and annual maintenance plans tailored to your needs.",
      category: 'Development Process'
    },
    {
      question: "What is your typical pricing structure?",
      answer: "We offer project-based pricing with transparent quotes. Prices vary based on complexity: Basic websites start at $1,500, business websites at $3,000-$7,000, e-commerce at $5,000-$15,000, and custom web applications from $10,000+. We provide detailed quotes after understanding your requirements.",
      category: 'Pricing & Budget'
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes, we offer flexible payment plans. Typically, we structure payments as: 30% upfront, 40% upon design approval, and 30% upon project completion. For larger projects, we can create custom payment schedules.",
      category: 'Pricing & Budget'
    },
    {
      question: "Are there any hidden costs?",
      answer: "No hidden costs. Our quotes include all development, design, testing, and project management. Third-party costs (domain, hosting, premium plugins) are clearly outlined upfront. We're transparent about all expenses before starting.",
      category: 'Pricing & Budget'
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies including React.js, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and various APIs. We choose technologies based on project requirements, scalability needs, and long-term maintenance.",
      category: 'Technical Details'
    },
    {
      question: "Do you work with existing websites?",
      answer: "Yes, we specialize in website redesigns, updates, and migrations. We can work with your existing codebase, improve performance, add new features, or completely rebuild with modern technologies while maintaining your brand identity.",
      category: 'Technical Details'
    },
    {
      question: "How do you ensure website security?",
      answer: "We implement multiple security layers: SSL certificates, secure authentication, regular security updates, malware scanning, DDoS protection, and following OWASP security best practices. All websites include basic security features by default.",
      category: 'Technical Details'
    },
    {
      question: "Will my website be mobile-responsive?",
      answer: "Absolutely. We build all websites with a mobile-first approach, ensuring perfect performance across all devices. We test on various screen sizes and browsers to guarantee consistent user experience everywhere.",
      category: 'Technical Details'
    },
    {
      question: "Who owns the website after completion?",
      answer: "You own 100% of the website, design, and custom code. We transfer all rights upon final payment. We only ask to showcase the project in our portfolio (with your permission). Source code and assets are delivered to you.",
      category: 'Pricing & Budget'
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, we offer managed hosting solutions optimized for speed and security. We can also help you choose and set up third-party hosting if preferred. Our hosting includes automatic backups, SSL certificates, and 24/7 monitoring.",
      category: 'Technical Details'
    }
  ];

  const filteredFAQs = (category) => {
    if (category === 'All') return faqs;
    return faqs.filter(faq => faq.category === category);
  };

  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen py-10 sm:py-16">
      
      {/* HERO HEADER */}
      <header className="px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="
                w-12 h-12
                bg-gradient-to-br from-blue-500 to-purple-600
                rounded-xl
                flex items-center justify-center
              ">
                <FaQuestionCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  Frequently Asked
                </h2>
                <h1 className="
                  text-white font-bold leading-tight
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  mt-1
                ">
                  Questions Answered
                </h1>
              </div>
            </div>
            
            <p className="
              text-white/70
              text-base sm:text-lg md:text-xl
              leading-relaxed mt-4
            ">
              Find answers to common questions about our services, process, and pricing. 
              Can't find what you're looking for? Get in touch with our team.
            </p>
          </div>

          {/* STATS CARD */}
          <div className="
            backdrop-blur-xl bg-white/5
            border border-white/10
            rounded-2xl
            p-6 sm:p-8
            max-w-sm w-full
          ">
            <div className="text-center">
              <div className="
                w-16 h-16
                bg-gradient-to-br from-green-500 to-emerald-600
                rounded-xl
                flex items-center justify-center
                mx-auto mb-4
              ">
                <FaQuestionCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                Quick Answers
              </h3>
              <p className="text-blue-300 text-sm mb-4">
                95% of questions answered here
              </p>
              <p className="text-gray-300 text-sm leading-snug mb-6">
                Most common questions about development, pricing, and process
              </p>
              <button className="
                group
                flex items-center justify-center gap-2
                w-full
                px-4 py-3
                backdrop-blur-xl bg-white/10
                border border-white/20
                rounded-xl
                text-white font-medium
                hover:bg-white/10
                transition
              ">
                Still Have Questions?
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CATEGORY FILTERS */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            Browse by Category
          </h3>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`
                flex items-center gap-2
                px-4 py-2
                rounded-full
                text-sm font-medium
                transition-all
                ${selectedCategory === 'All'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'backdrop-blur-xl bg-white/10 text-white hover:bg-white/20'
                }
              `}
            >
              <FaQuestionCircle className="w-4 h-4" />
              All Questions
            </button>
            
            {faqCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`
                  flex items-center gap-2
                  px-4 py-2
                  rounded-full
                  text-sm font-medium
                  transition-all
                  ${selectedCategory === category.name
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'backdrop-blur-xl bg-white/10 text-white hover:bg-white/20'
                  }
                `}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="mb-12">
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search for specific questions..."
              className="
                w-full
                px-6 py-4
                backdrop-blur-xl bg-white/10
                border border-white/20
                rounded-2xl
                text-white
                placeholder:text-white/40
                focus:outline-none focus:border-blue-500
                transition
                pl-12
              "
            />
            <FaQuestionCircle className="
              absolute left-4 top-1/2 transform -translate-y-1/2
              w-5 h-5 text-white/40
            " />
          </div>
        </div>
      </section>

      {/* FAQ GRID */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredFAQs(selectedCategory).map((faq, index) => (
            <div
              key={index}
              className="
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-xl sm:rounded-2xl
                overflow-hidden
                hover:border-white/20
                transition-all duration-300
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  text-left
                  p-4 sm:p-6
                  flex items-start justify-between
                  hover:bg-white/5
                  transition
                "
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`
                      px-3 py-1
                      rounded-full
                      text-xs font-medium
                      ${
                        faq.category === 'Development Process' 
                          ? 'bg-purple-500/20 text-purple-300'
                          : faq.category === 'Pricing & Budget'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-orange-500/20 text-orange-300'
                      }
                    `}>
                      {faq.category}
                    </div>
                  </div>
                  
                  <h4 className="
                    text-white
                    text-base sm:text-lg font-semibold
                    mb-2
                    pr-8
                  ">
                    {faq.question}
                  </h4>
                  
                  <div className={`
                    overflow-hidden transition-all duration-300
                    ${activeIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}
                  `}>
                    <p className="
                      text-gray-300
                      text-sm sm:text-base
                      leading-relaxed
                      pr-4
                    ">
                      {faq.answer}
                    </p>
                    
                    {activeIndex === index && (
                      <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm">
                        <span>Was this helpful?</span>
                        <button className="hover:text-blue-300 transition">Yes</button>
                        <span className="text-white/30">•</span>
                        <button className="hover:text-blue-300 transition">No</button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="
                  ml-4
                  w-8 h-8
                  flex-shrink-0
                  flex items-center justify-center
                  text-white/60
                ">
                  {activeIndex === index ? (
                    <FaChevronUp className="w-5 h-5" />
                  ) : (
                    <FaChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* STILL HAVE QUESTIONS */}
        <div className="
          mt-16 sm:mt-20
          backdrop-blur-xl bg-gradient-to-r from-black/30 to-blue-900/10
          border border-white/10
          rounded-2xl
          p-8 sm:p-12
          relative overflow-hidden
        ">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="
                w-16 h-16
                bg-gradient-to-br from-blue-500 to-purple-600
                rounded-xl
                flex items-center justify-center
                mx-auto mb-6
              ">
                <FaQuestionCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="
                text-white
                text-2xl sm:text-3xl font-bold
                mb-4
              ">
                Still Have Questions?
              </h3>
              <p className="
                text-white/70
                text-base sm:text-lg
                max-w-2xl mx-auto
                mb-8
              ">
                Can't find what you're looking for? Our team is ready to answer 
                any specific questions about your project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="
                  group
                  flex items-center justify-center gap-3
                  px-8 py-4
                  bg-white
                  text-black font-semibold
                  rounded-xl
                  hover:bg-white/90
                  hover:scale-105
                  transition-all
                ">
                  Get in Touch
                  <HiArrowRight className="
                    w-5 h-5
                    group-hover:translate-x-1
                    transition-transform
                  " />
                </button>
                
                <button className="
                  group
                  flex items-center justify-center gap-3
                  px-8 py-4
                  backdrop-blur-xl bg-white/5
                  border border-white/10
                  text-white font-semibold
                  rounded-xl
                  hover:bg-white/10
                  hover:scale-105
                  transition-all
                ">
                  Schedule a Call
                  <FaQuestionCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK TIPS */}
        <div className="mt-12">
          <h3 className="
            text-white
            text-xl sm:text-2xl font-bold
            mb-6 text-center
          ">
            Quick Tips Before Contacting
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-xl
              p-6
              text-center
              hover:bg-white/10
              transition
            ">
              <div className="
                w-12 h-12
                bg-gradient-to-br from-green-500 to-emerald-600
                rounded-xl
                flex items-center justify-center
                mx-auto mb-4
              ">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Be Specific
              </h4>
              <p className="text-gray-300 text-sm">
                Provide details about your project goals and requirements
              </p>
            </div>
            
            <div className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-xl
              p-6
              text-center
              hover:bg-white/10
              transition
            ">
              <div className="
                w-12 h-12
                bg-gradient-to-br from-blue-500 to-cyan-600
                rounded-xl
                flex items-center justify-center
                mx-auto mb-4
              ">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Prepare Examples
              </h4>
              <p className="text-gray-300 text-sm">
                Share websites you like or reference designs
              </p>
            </div>
            
            <div className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-xl
              p-6
              text-center
              hover:bg-white/10
              transition
            ">
              <div className="
                w-12 h-12
                bg-gradient-to-br from-purple-500 to-pink-600
                rounded-xl
                flex items-center justify-center
                mx-auto mb-4
              ">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Timeline & Budget
              </h4>
              <p className="text-gray-300 text-sm">
                Have an idea of your timeline and budget range
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;