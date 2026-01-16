 import React, { useState } from 'react'; 

const WorkContentPage = () => {
  // Sample data - you'll fetch this from Strapi
  const [projectData] = useState({
    logo: 'https://shakuro.com/logo-ajp.svg',
    title: 'Amaka',
    description: 'Accounting Integrations and Business Automation',
    excerpt: '100% Precise Accounting Integrations currently saving thousands of hours for 65,000+ small businesses globally.',
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ],
    content: [
      {
        id: 'overview',
        title: 'The Accounting Integration Leader',
        text: 'Amaka represents a unique synergy of modern accounting automation and business process optimization.'
      },
      {
        id: 'challenge',
        title: 'The Challenge',
        text: 'Present complex accounting integrations in an accessible way for 65,000+ businesses.'
      },
      {
        id: 'solution',
        title: 'Our Solution',
        text: 'Designed a clean dashboard and integration system that simplifies complex financial data.'
      }
    ],
    paymentLink: 'https://buy.stripe.com/test_...',
    paymentText: 'Get Started'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={projectData.logo} 
              alt={`${projectData.title} Logo`}
              className="h-12 w-auto"
            />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {projectData.title}
          </h1>
          
          {/* Description */}
          <h2 className="text-xl md:text-2xl text-blue-200 mb-6">
            {projectData.description}
          </h2>
          
          {/* Excerpt */}
          <p className="text-lg text-blue-100 max-w-3xl">
            {projectData.excerpt}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* First Image */}
        {projectData.images[0] && (
          <div className="mb-16 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={projectData.images[0]} 
              alt="Project showcase"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto mb-16">
          {projectData.content.map((section, index) => (
            <div key={section.id} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {section.text}
              </p>
              
              {/* Additional Image between sections */}
              {projectData.images[index + 1] && (
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={projectData.images[index + 1]} 
                    alt={`${section.title} visual`}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment/Link Section */}
        <div className="max-w-4xl mx-auto text-center py-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 65,000+ businesses already using Amaka to automate their accounting.
            </p>
            <a
              href={projectData.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
            >
              {projectData.paymentText} →
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Secure payment powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkContentPage; 