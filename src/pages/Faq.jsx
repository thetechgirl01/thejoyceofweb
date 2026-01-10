import React, { useState } from "react";

const FAQComponentExact = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const faqItems = [
    {
      id: 1,
      question: "How long does it take to build a website?",
      answer: null
    },
    {
      id: 2,
      question: "Do you offer website maintenance after the project is completed?",
      answer: null
    },
    {
      id: 3,
      question: "Will my website be mobile-friendly?",
      answer: [
        "Absolutely! Every website I develop is fully responsive, meaning it will look and function perfectly on all devices, including desktops, tablets, and smartphones.",
        "A mobile-friendly design is critical for user experience and SEO, so it's always a top priority in my work."
      ]
    },
    {
      id: 4,
      question: "What do I need to provide before we start?",
      answer: null
    }
  ];

  return (
     <div className="min-h-screen py-10 sm:py-16">
    

        {/* Header Section */}
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

       

        {/* FAQ Container */}
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                border border-gray-300
                rounded-xl
                overflow-hidden
                transition-all duration-200
                ${openIndex === index ? 'shadow-lg' : 'shadow-sm'}
                hover:shadow-md
              `}
            >
              {/* Clickable Question Area */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="
                  w-full 
                  p-6 sm:p-8
                  flex 
                  justify-between 
                  items-center
                  hover:bg-gray-100/20
                  active:bg-gray-100/40
                  transition-colors
                "
              >
                {/* Question Text */}
                <div className="flex-1 pr-4 sm:pr-8">
                  <span className="
                    text-lg sm:text-xl md:text-2xl 
                    font-medium 
                    text-gray-900 
                    leading-relaxed
                    text-left
                  ">
                    {item.question}
                  </span>
                </div>

                {/* Plus/Minus Indicator */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-light text-gray-700">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Answer Content */}
              {openIndex === index && item.answer && (
                <div className="border-t border-gray-200 px-6 sm:px-8 pb-6 pt-4 sm:pt-6">
                  <div className="space-y-4 sm:space-y-6">
                    {item.answer.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed font-normal tracking-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-16"></div>
      </div>

  );
};

export default FAQComponentExact;
