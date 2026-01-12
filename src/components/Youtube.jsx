import React, { useState } from 'react';
import { MdPlayArrow, MdAccessTime, MdThumbUp, MdChevronRight, MdChevronLeft, MdSubscriptions } from 'react-icons/md';
import { FaYoutube } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';

const YoutubeSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const youtubeVideos = [
    {
      id: 1,
      title: "Building a Modern Dashboard with React & Tailwind CSS",
      description: "Learn how to create a responsive admin dashboard with modern UI patterns and dark mode support.",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "15:24",
      views: "24.5K",
      likes: "1.2K",
      uploadDate: "2 days ago",
      category: "Tutorial",
      channel: "CrownTech Tutorials"
    },
    {
      id: 2,
      title: "Performance Optimization Techniques for Web Apps",
      description: "Advanced techniques to improve your web application's performance and user experience.",
      thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "22:18",
      views: "18.3K",
      likes: "890",
      uploadDate: "1 week ago",
      category: "Performance",
      channel: "CrownTech Labs"
    },
    {
      id: 3,
      title: "Modern Animations with Framer Motion & GSAP",
      description: "Create stunning animations and micro-interactions for your React applications.",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "18:45",
      views: "32.7K",
      likes: "2.1K",
      uploadDate: "2 weeks ago",
      category: "Animations",
      channel: "CrownTech Animations"
    },
    {
      id: 4,
      title: "Microservices Architecture: A Practical Guide",
      description: "Implementing microservices architecture with Node.js, Docker, and Kubernetes.",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "34:12",
      views: "45.9K",
      likes: "3.4K",
      uploadDate: "3 weeks ago",
      category: "Architecture",
      channel: "CrownTech Backend"
    },
    {
      id: 5,
      title: "State Management with Zustand vs Redux Toolkit",
      description: "Comparing modern state management solutions for React applications.",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "28:36",
      views: "29.1K",
      likes: "1.8K",
      uploadDate: "1 month ago",
      category: "React",
      channel: "CrownTech React"
    },
    {
      id: 6,
      title: "Building Secure Authentication Systems",
      description: "Complete guide to implementing secure auth with JWT, cookies, and OAuth2.",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "26:45",
      views: "38.4K",
      likes: "2.5K",
      uploadDate: "1 month ago",
      category: "Security",
      channel: "CrownTech Security"
    }
  ];

  const categories = [
    { name: 'All', count: 24 },
    { name: 'Tutorial', count: 8 },
    { name: 'React', count: 6 },
    { name: 'Performance', count: 4 },
    { name: 'Animations', count: 3 },
    { name: 'Architecture', count: 2 },
    { name: 'Security', count: 1 }
  ];

  const stats = [
    { label: 'Subscribers', value: '25K+', icon: <MdSubscriptions className="w-5 h-5" /> },
    { label: 'Total Views', value: '1.2M+', icon: <FiEye className="w-5 h-5" /> },
    { label: 'Videos', value: '120+', icon: <MdPlayArrow className="w-5 h-5" /> },
    { label: 'Avg Watch Time', value: '12:45', icon: <MdAccessTime className="w-5 h-5" /> }
  ];

  const featuredVideo = {
    id: 7,
    title: "Complete Web Development Roadmap 2024",
    description: "Learn the exact path to become a full-stack developer in 2024 with modern technologies and best practices.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    duration: "42:18",
    views: "156.8K",
    likes: "8.4K",
    uploadDate: "3 days ago",
    category: "Roadmap",
    channel: "CrownTech Academy"
  };

  const scrollLeft = () => {
    const container = document.getElementById('video-scroll');
    container.scrollLeft -= 400;
  };

  const scrollRight = () => {
    const container = document.getElementById('video-scroll');
    container.scrollLeft += 400;
  };

  return (
    <div className="min-h-screen py-10 sm:py-16">
      
      {/* HERO HEADER */}
      <header className="px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="
                w-12 h-12
                bg-gradient-to-br from-red-500 to-red-700
                rounded-xl
                flex items-center justify-center
              ">
                <FaYoutube className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  CrownTech on YouTube
                </h2>
                <h1 className="
                  text-white font-bold leading-tight
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  mt-1
                ">
                  Video Tutorials & Insights
                </h1>
              </div>
            </div>
            
            <p className="
              text-white/70
              text-base sm:text-lg md:text-xl
              leading-relaxed mt-4
            ">
              Dive into our video tutorials, tech talks, and behind-the-scenes content. 
              Learn modern web development techniques from industry professionals.
            </p>
          </div>

          {/* STATS */}
          <div className="
            grid grid-cols-2 sm:grid-cols-4 gap-4
            max-w-2xl lg:max-w-none
            w-full lg:w-auto
          ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  backdrop-blur-xl bg-white/5
                  border border-white/10
                  rounded-xl
                  p-4
                  text-center
                  hover:bg-white/10
                  transition
                "
              >
                <div className="flex justify-center mb-2 text-red-400">
                  {stat.icon}
                </div>
                <div className="text-white text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* FEATURED VIDEO */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16">
        <div className="
          backdrop-blur-xl bg-white/5
          border border-white/10
          rounded-2xl
          overflow-hidden
        ">
          <div className="relative">
            {/* Thumbnail with play button */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Play Button */}
              <button className="
                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-16 h-16 sm:w-20 sm:h-20
                bg-red-600
                rounded-full
                flex items-center justify-center
                hover:bg-red-700
                hover:scale-110
                transition-all duration-300
                group
              ">
                <MdPlayArrow className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
              </button>

              {/* Duration */}
              <div className="
                absolute bottom-4 right-4
                px-2 py-1
                bg-black/80 backdrop-blur-sm
                rounded
                text-white text-sm font-medium
              ">
                {featuredVideo.duration}
              </div>
            </div>

            {/* Featured Content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="
                      px-3 py-1
                      bg-red-500/20
                      rounded-full
                      text-red-300 text-xs font-medium
                    ">
                      Featured
                    </span>
                    <span className="text-white/60 text-sm">
                      {featuredVideo.uploadDate}
                    </span>
                  </div>

                  <h3 className="
                    text-white
                    text-xl sm:text-2xl md:text-3xl
                    font-bold
                    mb-3
                    leading-tight
                  ">
                    {featuredVideo.title}
                  </h3>

                  <p className="
                    text-gray-300
                    text-sm sm:text-base
                    mb-6
                    max-w-3xl
                  ">
                    {featuredVideo.description}
                  </p>

                  <div className="flex flex-wrap gap-4 items-center text-sm">
                    <div className="flex items-center gap-2 text-white/70">
                      <FiEye className="w-4 h-4" />
                      <span>{featuredVideo.views} views</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <MdThumbUp className="w-4 h-4" />
                      <span>{featuredVideo.likes} likes</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <span className="text-white/50">•</span>
                      <span>{featuredVideo.channel}</span>
                    </div>
                  </div>
                </div>

                <button className="
                  group
                  flex items-center justify-center gap-3
                  px-6 py-4
                  bg-red-600
                  rounded-xl
                  text-white font-semibold
                  hover:bg-red-700
                  hover:scale-105
                  transition-all
                  whitespace-nowrap
                  w-full lg:w-auto
                ">
                  Watch Featured
                  <MdPlayArrow className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            Browse Categories
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="
                w-10 h-10
                backdrop-blur-xl bg-white/10
                border border-white/20
                rounded-full
                flex items-center justify-center
                text-white
                hover:bg-white/20
                transition
                disabled:opacity-30
              "
            >
              <MdChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="
                w-10 h-10
                backdrop-blur-xl bg-white/10
                border border-white/20
                rounded-full
                flex items-center justify-center
                text-white
                hover:bg-white/20
                transition
                disabled:opacity-30
              "
            >
              <MdChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            id="video-scroll"
            className="
              flex gap-2
              overflow-x-auto
              scrollbar-hide
              pb-4
              scroll-smooth
            "
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`
                  flex items-center gap-2
                  px-4 py-3
                  rounded-xl
                  whitespace-nowrap
                  transition-all
                  ${activeCategory === cat.name
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'backdrop-blur-xl bg-white/10 text-white hover:bg-white/20'
                  }
                `}
              >
                <span className="font-medium">{cat.name}</span>
                <span className={`
                  px-2 py-0.5 rounded-full text-xs font-medium
                  ${activeCategory === cat.name
                    ? 'bg-black/20 text-black'
                    : 'bg-white/20 text-white/70'
                  }
                `}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="
                group
                backdrop-blur-xl bg-white/5
                border border-white/10
                rounded-2xl
                overflow-hidden
                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Duration Overlay */}
                <div className="
                  absolute bottom-3 right-3
                  px-2 py-1
                  bg-black/80 backdrop-blur-sm
                  rounded
                  text-white text-xs font-medium
                ">
                  {video.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="
                  absolute inset-0
                  bg-black/40
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-center justify-center
                ">
                  <div className="
                    w-12 h-12
                    bg-red-600
                    rounded-full
                    flex items-center justify-center
                    transform scale-90 group-hover:scale-100
                    transition-transform duration-300
                  ">
                    <MdPlayArrow className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="
                    px-3 py-1
                    bg-black/60 backdrop-blur-sm
                    rounded-full
                    text-white text-xs font-medium
                  ">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="
                    w-8 h-8
                    bg-gradient-to-br from-red-500 to-red-700
                    rounded-full
                    flex items-center justify-center
                  ">
                    <span className="text-white text-xs font-bold">CT</span>
                  </div>
                  <div className="text-white/70 text-sm">
                    {video.channel}
                  </div>
                </div>

                <h4 className="
                  text-white
                  text-lg font-bold
                  mb-2
                  line-clamp-2
                  group-hover:text-red-300
                  transition-colors
                ">
                  {video.title}
                </h4>

                <p className="
                  text-gray-300
                  text-sm
                  mb-4
                  line-clamp-2
                ">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="flex items-center gap-1">
                      <FiEye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdThumbUp className="w-4 h-4" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  <div className="text-white/50 text-xs">
                    {video.uploadDate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex items-center gap-3
              px-8 py-4
              bg-gradient-to-r from-red-600 to-red-800
              rounded-xl
              text-white font-semibold
              hover:from-red-700 hover:to-red-900
              hover:scale-105
              transition-all
            "
          >
            <FaYoutube className="w-6 h-6" />
            View Channel on YouTube
            <MdChevronRight className="
              w-5 h-5
              group-hover:translate-x-1
              transition-transform
            " />
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="
          backdrop-blur-xl bg-gradient-to-r from-black/30 to-red-900/10
          border border-white/10
          rounded-2xl
          p-8 sm:p-12
          text-center
          relative overflow-hidden
        ">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="
              w-16 h-16
              bg-gradient-to-br from-red-500 to-red-700
              rounded-xl
              flex items-center justify-center
              mx-auto mb-6
            ">
              <FaYoutube className="w-8 h-8 text-white" />
            </div>

            <h3 className="
              text-white
              text-2xl sm:text-3xl font-bold
              mb-4
            ">
              Never Miss an Update
            </h3>
            <p className="
              text-white/70
              text-base sm:text-lg
              max-w-2xl mx-auto
              mb-8
            ">
              Subscribe to our YouTube channel for weekly tutorials, tech deep dives, 
              and industry insights delivered straight to your feed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="
                  w-12 h-12
                  bg-gradient-to-br from-red-500 to-red-700
                  rounded-full
                  flex items-center justify-center
                ">
                  <MdPlayArrow className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white text-lg font-bold">120+ Videos</div>
                  <div className="text-white/60 text-sm">Tutorials & Talks</div>
                </div>
              </div>

              <button className="
                px-8 py-4
                bg-white
                text-black font-semibold
                rounded-xl
                hover:bg-white/90
                hover:scale-105
                transition-all
                flex items-center gap-3
              ">
                <FaYoutube className="w-5 h-5" />
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YoutubeSection;

// Add this to your global CSS for scrollbar hiding
// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }