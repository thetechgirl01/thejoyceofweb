import React, { useEffect, useRef } from 'react';
import { FaRocket, FaUsers, FaAward, FaLightbulb, FaHeart, FaCode } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '../components/contact';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const aboutRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".about-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });

      // Hero icon animation
      gsap.from(".hero-icon", {
        scale: 0,
        rotation: 180,
        duration: 1,
        delay: 0.4,
        ease: "back.out(1.7)"
      });

      // Stats cards staggered animation
      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.6,
        ease: "power3.out"
      });

      // Section animations with scroll trigger
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          gsap.from(section, {
            y: 80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse"
            },
            ease: "power3.out"
          });
        }
      });

      // Team members animation
      gsap.from(".team-member", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse"
        },
        ease: "power3.out"
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <FaRocket className="w-6 h-6" />, value: "100+", label: "Projects Delivered" },
    { icon: <FaUsers className="w-6 h-6" />, value: "50+", label: "Happy Clients" },
    { icon: <FaAward className="w-6 h-6" />, value: "5+", label: "Years Experience" },
    { icon: <FaLightbulb className="w-6 h-6" />, value: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Passion Driven",
      description: "We genuinely care about every project. Our team pours creativity and dedication into every line of code."
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "We stay updated with the latest technologies and best practices to deliver cutting-edge solutions."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Client Partnership",
      description: "We work with you, not just for you. Your success is our success, and we're committed to your goals."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      expertise: "React, Node.js, Cloud Architecture",
      description: "10+ years experience in full-stack development"
    },
    {
      name: "Sarah Miller",
      role: "UI/UX Designer",
      expertise: "Figma, User Research, Prototyping",
      description: "Creates intuitive and beautiful user experiences"
    },
    {
      name: "David Chen",
      role: "Project Manager",
      expertise: "Agile, Scrum, Client Relations",
      description: "Ensures projects stay on track and on budget"
    }
  ];

  return (
    <div ref={aboutRef} className="min-h-screen pt-32 pb-10">
      
      {/* HERO SECTION */}
      <header className="about-header px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
             
              <div>
              
                <h1 className="
                  text-white font-bold leading-tight
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  mt-1
                ">
                  Building Digital Excellence
                </h1>
              </div>
            </div>
            
            <p className="
              text-white/70
              text-base sm:text-lg md:text-xl
              leading-relaxed mt-4 max-w-3xl
            ">
              We are a passionate team of web developers and designers dedicated to creating 
              exceptional digital experiences. Based in Lagos, Nigeria, we serve clients 
              worldwide with cutting-edge web solutions.
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
                bg-blue-300
                rounded-xl
                flex items-center justify-center
                mx-auto mb-4
              ">
                <FaAward className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                Our Numbers
              </h3>
              <p className="text-blue-300 text-sm mb-4">
                Quality over quantity
              </p>
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              ref={el => sectionRefs.current[index] = el}
            >
              <div className="
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-xl
                p-6
                text-center
                hover:bg-white/10
                transition-colors duration-300
              ">
                <div className="
                  w-12 h-12
                  bg-blue-300
                  rounded-xl
                  flex items-center justify-center
                  mx-auto mb-4
                ">
                  <div className="text-black">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-white text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* OUR STORY SECTION */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
        <div
          ref={el => sectionRefs.current[4] = el}
          className="
            backdrop-blur-xl bg-white/5
            border border-white/10
            rounded-2xl
            p-6 sm:p-8 md:p-12
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="
              w-10 h-10
              bg-blue-300
              rounded-lg
              flex items-center justify-center
            ">
              <FaLightbulb className="w-5 h-5 text-black" />
            </div>
            <h3 className="
              text-white
              text-2xl sm:text-3xl font-bold
            ">
              Our Story
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="
                text-gray-300
                text-base sm:text-lg
                leading-relaxed mb-6
              ">
                Founded in 2019, CrownTech began as a small team of developers with a 
                shared vision: to create digital solutions that actually make a difference. 
                We believed that great web development should be accessible, transparent, 
                and results-driven.
              </p>
              
              <p className="
                text-gray-300
                text-base sm:text-lg
                leading-relaxed mb-6
              ">
                Over the years, we've grown into a full-service web development agency, 
                but our core philosophy remains the same. We're still that passionate 
                team, now with more experience and skills, ready to tackle complex 
                challenges and deliver exceptional results.
              </p>
            </div>
            
            <div>
              <p className="
                text-gray-300
                text-base sm:text-lg
                leading-relaxed mb-6
              ">
                What sets us apart is our commitment to understanding our clients' 
                unique needs. We don't just build websites; we create strategic 
                digital assets that help businesses grow and thrive in today's 
                competitive online landscape.
              </p>
              
              <div className="
                mt-6 p-4
                backdrop-blur-xl bg-white/5
                border border-blue-300/30
                rounded-xl
              ">
                <p className="text-white text-sm sm:text-base italic">
                  "Our mission is simple: Deliver outstanding web solutions that exceed 
                  expectations and drive real business results."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES SECTION */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
        <div
          ref={el => sectionRefs.current[5] = el}
          className="text-center mb-12"
        >
          <h3 className="
            text-white
            text-2xl sm:text-3xl font-bold
            mb-4
          ">
            Our Core Values
          </h3>
          <p className="
            text-white/70
            text-base sm:text-lg
            max-w-2xl mx-auto
          ">
            These principles guide everything we do and every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              ref={el => sectionRefs.current[6 + index] = el}
              className="
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                hover:bg-white/10
                transition-colors duration-300
                group
              "
            >
              <div className="
                w-14 h-14
                bg-blue-300
                rounded-xl
                flex items-center justify-center
                mb-6
                group-hover:scale-110
                transition-transform duration-300
              ">
                <div className="text-black">
                  {value.icon}
                </div>
              </div>
              
              <h4 className="
                text-white
                text-xl font-bold
                mb-3
              ">
                {value.title}
              </h4>
              
              <p className="
                text-gray-300
                text-sm leading-relaxed
              ">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
        <div
          ref={el => sectionRefs.current[9] = el}
          className="text-center mb-12"
        >
          <h3 className="
            text-white
            text-2xl sm:text-3xl font-bold
            mb-4
          ">
            Meet Our Team
          </h3>
          <p className="
            text-white/70
            text-base sm:text-lg
            max-w-2xl mx-auto
          ">
            The talented individuals behind CrownTech's success.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
            >
              <div className="
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                text-center
                hover:bg-white/10
                transition-colors duration-300
                h-full
              ">
                <div className="
                  w-20 h-20
                  bg-blue-300
                  rounded-full
                  flex items-center justify-center
                  mx-auto mb-4
                ">
                  <span className="text-black text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                
                <h4 className="
                  text-white
                  text-xl font-bold
                  mb-1
                ">
                  {member.name}
                </h4>
                
                <div className="
                  text-blue-300
                  text-sm font-medium
                  mb-3
                ">
                  {member.role}
                </div>
                
                <div className="
                  text-white/80
                  text-sm
                  mb-4
                ">
                  {member.expertise}
                </div>
                
                <p className="
                  text-gray-400
                  text-sm leading-relaxed
                ">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
  
     <Contact/>
 

      {/* SPACER FOR NAVBAR */}
      <div className="h-16 sm:h-20"></div>
    </div>
  );
};

export default AboutUs;