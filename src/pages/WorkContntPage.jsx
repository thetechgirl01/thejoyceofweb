import React, { useState, useEffect, useRef } from 'react';


// Example project data - replace with your actual data
const projectData = {
  logo: 'https://shakuro.com/logo-ajp.svg', // Replace with your logo URL
  title: 'Amaka',
  excerpt: '100% Precise Accounting Integrations & Business Automation',
  landingImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', // Replace with your image
  topics: [
    { 
      id: 'mission', 
      title: 'The Mission', 
      content: 'We were brought in as a result of a concept design we delivered to showcase our passion for accounting automation as a token of gratitude to the organization that has elevated business efficiency to an unprecedented level.'
    },
    { 
      id: 'challenge', 
      title: 'The Challenge', 
      content: 'As a platform serving 65,000+ small businesses globally, Amaka needed a way to gain control over their infrastructure, customize their user experience, and present complex pricing tiers clearly.'
    },
    { 
      id: 'identity', 
      title: 'Identity System', 
      content: 'Amaka needed a brand identity that communicates precision, reliability, and modern automation while maintaining clarity for financial operations.'
    },
    { 
      id: 'uiux', 
      title: 'UI/UX Design', 
      content: 'Our biggest challenge was creating an intuitive experience while maintaining the technical complexity of accounting integrations across multiple platforms like Xero, QuickBooks, and MYOB.'
    }
  ],
  fullPageImages: [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  ],
  palette: ['#2D3748', '#4FD1C5', '#F56565', '#ED8936', '#ECC94B'],
  subBrands: ['Amaka Pro', 'Amaka Lite', 'Amaka Enterprise'],
  apps: ['Web Dashboard', 'Mobile App', 'API Integration']
};

const WorkContentPage = () => {
  const [activeSection, setActiveSection] = useState('mission');
  const [isIdentityFixed, setIsIdentityFixed] = useState(false);
  const [isUIFixed, setIsUIFixed] = useState(false);
  
  const identityRef = useRef(null);
  const uiRef = useRef(null);
  const contentRef = useRef(null);

  // Handle scroll to update active section and sticky states
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Update active section based on scroll
      projectData.topics.forEach(topic => {
        const element = document.getElementById(topic.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3) {
            setActiveSection(topic.id);
          }
        }
      });
      
      // Check if we should fix identity section
      if (identityRef.current) {
        const identityRect = identityRef.current.getBoundingClientRect();
        setIsIdentityFixed(identityRect.top <= 100 && identityRect.bottom > windowHeight);
      }
      
      // Check if we should fix UI/UX section
      if (uiRef.current) {
        const uiRect = uiRef.current.getBoundingClientRect();
        setIsUIFixed(uiRect.top <= 100 && uiRect.bottom > windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="work-content-page">
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${projectData.landingImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <img 
              src={projectData.logo} 
              alt={`${projectData.title} Logo`} 
              className="project-logo" 
            />
            <h1 className="project-title">{projectData.title}</h1>
            <h2 className="project-excerpt">{projectData.excerpt}</h2>
          </div>
        </div>
      </section>

      {/* Main Content Area - Split Layout */}
      <div className="content-container" ref={contentRef}>
        {/* Left Side - Navigation Topics */}
        <div className="left-sidebar">
          <div className="topics-nav">
            {projectData.topics.map(topic => (
              <button
                key={topic.id}
                className={`topic-btn ${activeSection === topic.id ? 'active' : ''}`}
                onClick={() => scrollToSection(topic.id)}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="right-content">
          {/* Mission Section */}
          <section id="mission" className="content-section">
            <h3 className="section-title">The Mission</h3>
            <p className="section-content">
              {projectData.topics.find(t => t.id === 'mission')?.content}
            </p>
          </section>

          {/* Full Page Image 1 */}
          <div className="full-image-container">
            <img 
              src={projectData.fullPageImages[0]} 
              alt="Mission visualization" 
              className="full-page-image"
            />
          </div>

          {/* Challenge Section */}
          <section id="challenge" className="content-section">
            <h3 className="section-title">The Challenge</h3>
            <p className="section-content">
              {projectData.topics.find(t => t.id === 'challenge')?.content}
            </p>
            <div className="scope-list">
              <h4>THE SCOPE</h4>
              <ul>
                <li>Interactive platform dashboard</li>
                <li>Multi-tier pricing presentation</li>
                <li>Integration management system</li>
                <li>Real-time reconciliation display</li>
              </ul>
            </div>
          </section>

          {/* Full Page Image 2 */}
          <div className="full-image-container">
            <img 
              src={projectData.fullPageImages[1]} 
              alt="Challenge visualization" 
              className="full-page-image"
            />
          </div>

          {/* Identity System Section - with sticky behavior */}
          <div ref={identityRef} className={`identity-section ${isIdentityFixed ? 'fixed' : ''}`}>
            <section id="identity" className="content-section">
              <h3 className="section-title">Identity System</h3>
              <p className="section-content">
                {projectData.topics.find(t => t.id === 'identity')?.content}
              </p>
            </section>

            {/* Palette */}
            <div className="palette-container">
              <h4>Palette</h4>
              <p>The color palette is inspired by financial dashboards and accounting software, with accents representing different integration statuses and data types.</p>
              <div className="color-palette">
                {projectData.palette.map((color, index) => (
                  <div 
                    key={index} 
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                  >
                    <span className="color-code">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo Update */}
            <div className="logo-update">
              <h4>Logo Update</h4>
              <p>The Amaka logo represents precision integration with clean lines and connected elements symbolizing seamless data flow between platforms.</p>
              <div className="logo-display">
                <img src={projectData.logo} alt="Updated Logo" />
              </div>
            </div>

            {/* Sub-brands */}
            <div className="sub-brands">
              <h4>Sub-brands</h4>
              <p>Amaka builds a variety of solutions under one banner to cater to businesses of all sizes.</p>
              <div className="brand-list">
                {projectData.subBrands.map((brand, index) => (
                  <div key={index} className="brand-item">
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Apps */}
            <div className="apps-section">
              <h4>Apps & Platforms</h4>
              <div className="apps-list">
                {projectData.apps.map((app, index) => (
                  <div key={index} className="app-item">
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Page Image 3 */}
          <div className="full-image-container">
            <img 
              src={projectData.fullPageImages[2]} 
              alt="Identity visualization" 
              className="full-page-image"
            />
          </div>

          {/* UI/UX Design Section - with sticky behavior */}
          <div ref={uiRef} className={`ui-section ${isUIFixed ? 'fixed' : ''}`}>
            <section id="uiux" className="content-section">
              <h3 className="section-title">UI/UX Design</h3>
              <p className="section-content">
                {projectData.topics.find(t => t.id === 'uiux')?.content}
              </p>
            </section>

            {/* UI Components */}
            <div className="ui-components">
              <h4>Key Design Elements</h4>
              <div className="design-grid">
                <div className="design-item">
                  <h5>Dashboard</h5>
                  <p>Clean overview of all integrations, sync status, and transaction counts</p>
                </div>
                <div className="design-item">
                  <h5>Integration Setup</h5>
                  <p>Step-by-step wizard for connecting accounting platforms</p>
                </div>
                <div className="design-item">
                  <h5>Pricing Tiers</h5>
                  <p>Clear comparison between Free, Premium, and Premium+ plans</p>
                </div>
                <div className="design-item">
                  <h5>Partner Directory</h5>
                  <p>Showcase of 65,000+ businesses using the platform</p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Section */}
          <section className="outcome-section">
            <h3 className="section-title">Outcome</h3>
            <p className="outcome-content">
              The Amaka platform now serves 65,000+ small businesses globally with 100% precise accounting integrations, saving thousands of hours in manual reconciliation.
            </p>
            <div className="testimonial">
              <p className="quote">
                "Partnering with Amaka to deliver key integrations provides our customers with unmatched automation technology and support for their e-commerce transactions at an affordable price."
              </p>
              <p className="author">— Dale Dixon, MYOB Head of Solution Consulting</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkContentPage;