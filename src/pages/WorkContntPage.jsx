import React, { useState } from 'react';

const WorkContentPage = () => {
  const [projectData] = useState({
    title: 'AJP: World\'s fastest growing jiu jitsu tournament organization',
    excerpt: 'Abu Dhabi Jiu Jitsu Pro (AJP) is a professional Brazilian Jiu Jitsu organization created with the goal of developing the sport of jiu jitsu around the world. In 2023, Shakuro has been privileged to design and build a website for AJP.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    sections: [
      {
        id: 'the-jiu-jitsu-mecca',
        title: 'The jiu jitsu Mecca',
        content: 'AJP represents a unique synergy of a modern grass-roots combat subculture and a national sport in the UAE all due to the vision and support of jiu jitsu by Sheikh Mohammed bin Zayed. The federation that he had founded has quickly expanded beyond the UAE and now hosts local and international events in over 40 countries worldwide.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
      },
      {
        id: 'the-mission',
        title: 'The mission',
        content: 'We were brought in as a result of a concept design we delivered to showcase our passion for the sport as practitioners and as a token of gratitude to the organization that has elevated the level of professional jiu jitsu competition to an unprecedented level. We\'ve had the honor to work on the visual brand update and the design of a new global website experience.',
        image: null
      },
      {
        id: 'the-challenge',
        title: 'The challenge',
        content: 'As a sports organization with over 7,000 registered athletes, AJP was already thriving. What they needed was a way to gain control over the infrastructure of the platform, customize it in a way that would be unique for the organization. Brand visuals update and modern UX practices came as important additions to the new platform.',
        features: [
          'Interactive event map',
          'New navigation',
          'Redesigned athlete profile',
          'New content library',
          'Redefined event registration experience',
          'New mobile experience',
          'Brand visual language'
        ]
      },
      {
        id: 'identity-system',
        title: 'Identity system',
        content: 'AJP, being a part of the UAEJJF is under the brand umbrella but is not limited to the assets used by this larger parent entity. This gave us the freedom to create a dynamic but strict style of the website and brand visuals, dominated by the dark theme and dramatic heroic effects in posters and event graphics.',
        subsections: [
          {
            title: 'Palette',
            content: 'The color palette is inspired by faded colors of the desert at day- and nighttime. The bright accent colors are chosen to represent the solidity of jiu jitsu levels represented by the belts athletes tie around their waist.'
          },
          {
            title: 'Logo update',
            content: 'The AJP logo is more complex than it looks. The square represents the mat where since the ancient times two athletes meet in the middle to settle on who is the best. The city of Abu Dhabi has its own mark and features a strong presence on the AJP logo. The subtle update made by our team is improved geometry of the type, symmetry, and organization of the negative space.'
          },
          {
            title: 'Sub-brands',
            content: 'AJP is more than just a sports competition network. It\'s a platform that connects athletes, staff, coaches, students, and enthusiasts of jiu jitsu. To cater to them, AJP builds a variety of educational and informational resources under one banner. Our goal was to create a diverse system allowing to scale different divisions as they emerge.'
          },
          {
            title: 'Art',
            content: 'To support AJP\'s global expansion, we have developed a distinct visual style to replace stock photography used to produce event posters. The main idea is to represent the style of AJP\'s vision while also promoting international tourism through jiu jitsu.'
          }
        ]
      },
      {
        id: 'ui-ux-design',
        title: 'UI/UX design',
        content: 'Our biggest challenge in creating the experience was making it a welcoming platform while maintaining the technical complexity of a sports league. That means we had to rediscover the way athletes approach registration, plan their competitive calendar, analyze stats and opponets\' performance based on past tournaments.',
        uiComponents: [
          {
            title: 'Home page',
            content: 'The Home page attributes to the main goal of the website – help athletes in their competition career by providing the avenue to maximize their potential. To do that, we heave created a layout that keeps them motivated, provides visual guidance, and sets them up for a safe and exciting jiu jitsu journey.'
          },
          {
            title: 'Rankings',
            content: 'Ranked athletes rack up points and get qualified to take part in World Championships for a chance to win a title, cash prizes, and cement themselves as exceptional competitors. AJP is a very meticulous organization that rewards consistent performance. Our goal for the Rankings section was to help athletes navigate through categories and divisions, discover other competitors, and analyze their performance.'
          },
          {
            title: 'Athlete profile',
            content: 'As a sports league, AJP puts emphasis on individual athlete performance. The profiles are public, so the information has to be visual, stats easily identifiable, and achievements thoroughly displayed. Our athlete profile design caters to professionals and super stars as well as hobbyists, beginners, and kids. Minimal, straight-to-the-point, and universal.'
          },
          {
            title: 'Events',
            content: 'AJP jiu jitsu competitions are festive events that players and academies plan months ahead. Our goal here was to create an interactive experience with easy and intuitive registration, clear distinction of different caliber events, and unfold the global reach of the organization.'
          }
        ]
      },
      {
        id: 'outcome',
        title: 'Outcome',
        content: 'The ajp.world website went live in 2024 and became a stepping stone in the company\'s journey towards an innovative digital experience.',
        testimonial: {
          text: 'As a team that consists of avid jiu jitsu practitioners, this was a dream project for us and a chance to give back to the organization that grows our sport like no other league on the planet.',
          author: 'Moses Kim',
          role: 'Creative Producer'
        }
      }
    ]
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image */}
        <div className="h-screen max-h-[90vh] overflow-hidden">
          <img 
            src={projectData.heroImage} 
            alt="AJP Jiu Jitsu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {projectData.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              {projectData.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        {projectData.sections.map((section, index) => (
          <section key={section.id} className="mb-24 last:mb-0">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl">
                  {section.content}
                </p>
              )}
            </div>

            {/* Section Image */}
            {section.image && (
              <div className="mb-12 rounded-xl overflow-hidden">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}

            {/* Features List */}
            {section.features && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div>
                  <h3 className="text-lg font-semibold mb-4">THE SCOPE</h3>
                  <ul className="space-y-3">
                    {section.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 md:pt-0">
                  <ul className="space-y-3">
                    {section.features.slice(4).map((feature, idx) => (
                      <li key={idx} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Subsections */}
            {section.subsections && (
              <div className="space-y-12">
                {section.subsections.map((subsection, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-bold mb-4">
                      {subsection.title}
                    </h3>
                    <p className="text-gray-600">
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* UI Components */}
            {section.uiComponents && (
              <div className="space-y-12">
                {section.uiComponents.map((component, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-bold mb-4">
                      {component.title}
                    </h3>
                    <p className="text-gray-600">
                      {component.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Testimonial */}
            {section.testimonial && (
              <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
                <div className="max-w-3xl">
                  <h3 className="text-lg font-semibold mb-4">Producer comment</h3>
                  <p className="text-xl italic text-gray-700 mb-6">
                    "{section.testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{section.testimonial.author}</p>
                    <p className="text-gray-600">{section.testimonial.role}</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Footer Note */}
      <div className="border-t border-gray-200 py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm text-gray-500 text-center">
            This website uses cookies to ensure you get the best experience on our website. Learn More.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkContentPage;