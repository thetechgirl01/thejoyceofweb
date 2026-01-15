import React, { useState, useEffect, useRef } from 'react';


const WorkContentPage = () => {
  const [activeSection, setActiveSection] = useState('mission');
  const [isIdentityFixed, setIsIdentityFixed] = useState(false);
  const [isUiFixed, setIsUiFixed] = useState(false);
  
  const sectionRefs = useRef({});
  const identitySectionRef = useRef(null);
  const uiSectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Project data structure matching the AJP layout
  const projectData = {
    logo: 'https://shakuro.com/logo-ajp.svg',
    title: 'Amaka',
    subtitle: 'Accounting Integrations and Business Automation',
    excerpt: '100% Precise Accounting Integrations currently saving thousands of hours for 65,000+ small businesses globally.',
    landingImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    sections: [
      {
        id: 'overview',
        title: 'The Accounting Integration Leader',
        content: 'Amaka represents a unique synergy of modern accounting automation and business process optimization. The platform has quickly expanded globally and now serves businesses in over 40 countries worldwide.'
      },
      {
        id: 'mission',
        title: 'The Mission',
        content: 'We were brought in to showcase our passion for accounting automation and as a token of gratitude to the platform that has elevated business efficiency to an unprecedented level. We\'ve had the honor to work on the visual brand update and design of a new global dashboard experience.'
      },
      {
        id: 'challenge',
        title: 'The Challenge',
        content: 'As a platform serving 65,000+ small businesses, Amaka was already thriving. What they needed was a way to gain control over the infrastructure, customize the user experience uniquely, and present complex accounting integrations in an accessible way.',
        scope: [
          'Interactive integration dashboard',
          'Multi-platform connection management',
          'Real-time reconciliation display',
          'Automated financial reporting',
          'Scalable pricing structure',
          'Global compliance features'
        ]
      },
      {
        id: 'identity',
        title: 'Identity System',
        content: 'Amaka needed a brand identity that communicates precision, reliability, and modern automation while maintaining clarity for financial operations across diverse business sizes.',
        subsections: [
          {
            title: 'Palette',
            content: 'The color palette is inspired by financial dashboards and accounting software interfaces. The accent colors represent different integration statuses, transaction types, and data categories.',
            type: 'palette',
            colors: ['#1E3A8A', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
          },
          {
            title: 'Logo Update',
            content: 'The Amaka logo represents precision integration. The connected elements symbolize seamless data flow between platforms, while the clean geometry reflects accounting accuracy.',
            type: 'logo'
          },
          {
            title: 'Sub-brands & Apps',
            content: 'Amaka builds educational resources, partner integrations, and specialized tools under one banner to cater to businesses of all sizes across various industries.',
            type: 'apps',
            items: ['Amaka Pro Dashboard', 'Mobile Reconciliation App', 'API Developer Portal', 'Partner Integration Suite']
          }
        ]
      },
      {
        id: 'uiux',
        title: 'UI/UX Design',
        content: 'Our biggest challenge was creating a welcoming platform while maintaining the technical complexity of multi-platform accounting integrations. We rediscovered how businesses manage connections, monitor sync status, and analyze financial data.',
        subsections: [
          {
            title: 'Dashboard',
            content: 'The central hub displays all active integrations, sync status, transaction counts, and reconciliation alerts in a single, comprehensive view.'
          },
          {
            title: 'Integration Setup',
            content: 'Step-by-step wizard for connecting accounting platforms like Xero, QuickBooks, Sage, and MYOB with visual guidance and real-time feedback.'
          },
          {
            title: 'Pricing Tiers',
            content: 'Clear visual comparison between Free, Premium, and Premium+ plans with interactive toggles for annual/monthly billing.'
          },
          {
            title: 'Partner Directory',
            content: 'Showcase of 65,000+ businesses using the platform with searchable categories and integration statistics.'
          }
        ]
      },
      {
        id: 'outcome',
        title: 'Outcome',
        content: 'The Amaka platform went live in 2024 and became a cornerstone in the company\'s journey toward innovative digital accounting experiences, now processing millions of transactions monthly.'
      }
    ],
    fullImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ],
    testimonial: {
      quote: '"Partnering with Amaka to deliver key integrations provides our customers with unmatched automation technology and support for their e-commerce transactions at an affordable price."',
      author: 'Dale Dixon, MYOB Head of Solution Consulting and Partners',
      role: 'Executive Partner'
    }
  };

  // Handle scroll events for section tracking and sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Update active section
      projectData.sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3) {
            setActiveSection(section.id);
          }
        }
      });
      
      // Check sticky states for identity and UI sections
      if (identitySectionRef.current) {
        const identityRect = identitySectionRef.current.getBoundingClientRect();
        setIsIdentityFixed(identityRect.top <= 120 && identityRect.bottom > windowHeight + 200);
      }
      
      if (uiSectionRef.current) {
        const uiRect = uiSectionRef.current.getBoundingClientRect();
        setIsUiFixed(uiRect.top <= 120 && uiRect.bottom > windowHeight + 200);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="work-content-case-study" ref={scrollContainerRef}>
      {/* Hero Section with Fixed Background */}
      <section 
        className="case-study-hero"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${projectData.landingImage})`
        }}
      >
        <div className="hero-content-wrapper">
          <div className="hero-logo-container">
            <img 
              src={projectData.logo} 
              alt={`${projectData.title} Logo`} 
              className="project-logo-small"
            />
          </div>
          <h1 className="project-title-large">{projectData.title}</h1>
          <h2 className="project-subtitle">{projectData.subtitle}</h2>
          <p className="project-excerpt-text">{projectData.excerpt}</p>
        </div>
      </section>
      
      {/* Main Content Area - Split Layout */}
      <div className="case-study-container">
        {/* Left Navigation Sidebar */}
        <aside className="case-study-sidebar">
          <nav className="section-navigation">
            <ul>
              {projectData.sections.map(section => (
                <li key={section.id}>
                  <button
                    className={`nav-section-btn ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    <span className="nav-section-title">{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        
        {/* Right Content Area */}
        <main className="case-study-content">
          {projectData.sections.map((section, sectionIndex) => (
            <React.Fragment key={section.id}>
              {/* Main Section Content */}
              <section 
                id={section.id}
                ref={el => {
                  if (section.id === 'identity') identitySectionRef.current = el;
                  if (section.id === 'uiux') uiSectionRef.current = el;
                }}
                className={`content-section-block ${section.id === 'identity' || section.id === 'uiux' ? 'has-sticky-sidebar' : ''}`}
              >
                <div className="section-header">
                  <h2 className="section-title-main">{section.title}</h2>
                  <p className="section-description">{section.content}</p>
                </div>
                
                {/* Scope List for Challenge Section */}
                {section.id === 'challenge' && section.scope && (
                  <div className="scope-container">
                    <h3 className="scope-title">THE SCOPE</h3>
                    <div className="scope-grid">
                      {section.scope.slice(0, Math.ceil(section.scope.length / 2)).map((item, idx) => (
                        <div key={idx} className="scope-column">
                          <ul className="scope-list">
                            {section.scope.slice(idx * 3, idx * 3 + 3).map((scopeItem, scopeIdx) => (
                              <li key={scopeIdx} className="scope-item">{scopeItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Special Handling for Identity Section with Fixed Sidebar */}
                {section.id === 'identity' && section.subsections && (
                  <div className={`identity-system-wrapper ${isIdentityFixed ? 'sticky-active' : ''}`}>
                    <div className="sticky-sidebar">
                      <h3 className="sticky-sidebar-title">{section.title}</h3>
                      <p className="sticky-sidebar-description">{section.content}</p>
                    </div>
                    
                    <div className="sticky-content">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="subsection-block">
                          <h4 className="subsection-title">{subsection.title}</h4>
                          <p className="subsection-description">{subsection.content}</p>
                          
                          {/* Color Palette */}
                          {subsection.type === 'palette' && subsection.colors && (
                            <div className="color-palette-display">
                              {subsection.colors.map((color, colorIdx) => (
                                <div 
                                  key={colorIdx} 
                                  className="color-swatch"
                                  style={{ backgroundColor: color }}
                                >
                                  <span className="color-hex">{color}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Logo Display */}
                          {subsection.type === 'logo' && (
                            <div className="logo-display-container">
                              <div className="logo-display-box">
                                <img 
                                  src={projectData.logo} 
                                  alt="Updated Logo" 
                                  className="updated-logo"
                                />
                              </div>
                            </div>
                          )}
                          
                          {/* Apps List */}
                          {subsection.type === 'apps' && subsection.items && (
                            <div className="apps-list-container">
                              <div className="apps-grid">
                                {subsection.items.map((app, appIdx) => (
                                  <div key={appIdx} className="app-card">
                                    <div className="app-icon"></div>
                                    <span className="app-name">{app}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Special Handling for UI/UX Section */}
                {section.id === 'uiux' && section.subsections && (
                  <div className={`uiux-system-wrapper ${isUiFixed ? 'sticky-active' : ''}`}>
                    <div className="sticky-sidebar">
                      <h3 className="sticky-sidebar-title">{section.title}</h3>
                      <p className="sticky-sidebar-description">{section.content}</p>
                    </div>
                    
                    <div className="sticky-content">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="subsection-block">
                          <h4 className="subsection-title">{subsection.title}</h4>
                          <p className="subsection-description">{subsection.description || subsection.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
              
              {/* Full-width Images Between Sections */}
              {sectionIndex < projectData.sections.length - 1 && projectData.fullImages[sectionIndex] && (
                <div 
                  className="full-width-image-block"
                  style={{ 
                    backgroundImage: `url(${projectData.fullImages[sectionIndex]})`,
                    backgroundAttachment: 'fixed'
                  }}
                >
                  <div className="image-overlay"></div>
                </div>
              )}
            </React.Fragment>
          ))}
          
          {/* Testimonial Section */}
          <section className="testimonial-section">
            <div className="testimonial-content">
              <h3 className="testimonial-title">Producer Comment</h3>
              <blockquote className="testimonial-quote">
                {projectData.testimonial.quote}
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">{projectData.testimonial.author}</div>
                <div className="author-role">{projectData.testimonial.role}</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default WorkContentPage;