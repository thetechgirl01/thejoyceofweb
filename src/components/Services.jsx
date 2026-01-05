import React from 'react';
import { 
  MdDesignServices, 
  MdCode, 
  MdMobileFriendly, 
  MdSearch,
  MdAnalytics,
  MdSecurity,
  MdCloud,
  MdSettings
} from 'react-icons/md';

export const Services = () => {
  const services = [
    {
      icon: <MdDesignServices className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement. eautiful, intuitive interfaces that provide exceptional user experiences and drive eautiful, intuitive interfaces that provide exceptional user experiences and drive engagementengagement',
    },
    {
      icon: <MdCode className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
    },
    {
      icon: <MdMobileFriendly className="w-12 h-12" />,
      title: 'Mobile Responsive',
      description: 'Fully responsive designs that work perfectly on all devices from desktop to mobile.',
    },
    {
      icon: <MdSearch className="w-12 h-12" />,
      title: 'SEO Optimization',
      description: 'Search engine optimized websites that rank higher and attract more organic traffic.',
    },
    {
      icon: <MdAnalytics className="w-12 h-12" />,
      title: 'Analytics & Tracking',
      description: 'Comprehensive analytics setup to track performance and user behavior.',
    },
    {
      icon: <MdSecurity className="w-12 h-12" />,
      title: 'Security Solutions',
      description: 'Enterprise-grade security measures to protect your website and user data.',
    },
    {
      icon: <MdCloud className="w-12 h-12" />,
      title: 'Cloud Hosting',
      description: 'Reliable cloud hosting solutions with high uptime and fast loading speeds.',
    },
    {
      icon: <MdSettings className="w-12 h-12" />,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support to keep your website running smoothly.',
    }
  ];

  return (
    <>
     
      {/* Services Grid Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  hover:transform hover:-translate-y-2
                  transition-all duration-300
                  cursor-pointer
                "
              >
                {/* Service Icon */}
                <div className="
                  w-16 h-16
                  mx-auto
                  bg-gradient-to-br from-blue-500 to-blue-700
                  rounded-2xl
                  flex items-center justify-center
                  mb-4
                ">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-white text-xl font-bold mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section in Glass Card Style */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-white text-3xl font-bold text-center mb-2">
              Our <span className="text-blue-300">Process</span>
            </h3>
            
            <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {[
                { number: '01', title: 'Discovery', desc: 'Research & Planning' },
                { number: '02', title: 'Design', desc: 'UI/UX Creation' },
                { number: '03', title: 'Develop', desc: 'Coding & Building' },
                { number: '04', title: 'Deploy', desc: 'Launch & Support' }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="
                    w-16 h-16
                    bg-gradient-to-br from-blue-500 to-blue-700
                    rounded-2xl
                    flex items-center justify-center
                    mb-4
                  ">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-white text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and project estimate tailored to your needs
          </p>
          
          <button className="
            bg-gradient-to-r from-blue-500 to-blue-700
            hover:from-blue-600 hover:to-blue-800
            text-white
            font-semibold
            py-3 px-8
            rounded-xl
            transition-all duration-300
            hover:scale-105
            flex items-center gap-2
            mx-auto
          ">
            <MdSettings className="w-5 h-5" />
            Get Started Today
          </button>
        </div>
      </section>
    </>
  );
};
export default Services