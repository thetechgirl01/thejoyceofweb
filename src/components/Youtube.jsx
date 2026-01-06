import React from "react";
import { HiPlay, HiArrowRight, HiExternalLink } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";

const YoutubeSection = () => {
  const videos = [
    {
      id: 1,
      title: "Building a Modern Portfolio with React & Tailwind CSS",
      description: "Learn how to create a stunning portfolio website from scratch using React and Tailwind CSS.",
      duration: "15:42",
      views: "12.5K",
      date: "2 weeks ago",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://youtube.com/watch?v=example1",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "Advanced CSS Grid Techniques You Should Know",
      description: "Master CSS Grid with these advanced techniques for complex layouts.",
      duration: "22:18",
      views: "8.3K",
      date: "1 month ago",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://youtube.com/watch?v=example2",
      category: "CSS"
    },
    {
      id: 3,
      title: "React Hooks Explained: From Basics to Advanced",
      description: "Complete guide to React Hooks with practical examples and use cases.",
      duration: "38:15",
      views: "25.7K",
      date: "2 months ago",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://youtube.com/watch?v=example3",
      category: "React"
    },
    {
      id: 4,
      title: "Website Performance Optimization Guide",
      description: "Improve your website's loading speed and Core Web Vitals with these techniques.",
      duration: "29:47",
      views: "15.2K",
      date: "3 months ago",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://youtube.com/watch?v=example4",
      category: "Performance"
    },
    {
      id: 5,
      title: "Building a Full-Stack Web App with Next.js",
      description: "Step-by-step guide to creating a complete full-stack application using Next.js.",
      duration: "45:32",
      views: "32.1K",
      date: "4 months ago",
      thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://youtube.com/watch?v=example5",
      category: "Full-Stack"
    },
    {
      id: 6,
      title: "UI/UX Design Principles for Developers",
      description: "Essential design principles every web developer should know.",
      duration: "18:25",
      views: "9.8K",
      date: "5 months ago",
      thumbnail: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://youtube.com/watch?v=example6",
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Left Aligned */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Left Side - Header Content */}
            <div className="lg:w-2/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="
                  w-12 h-12 sm:w-14 sm:h-14
                  bg-gradient-to-br from-red-600 to-red-800
                  rounded-xl
                  flex items-center justify-center
                ">
                  <FaYoutube className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h1 className="
                  text-white font-bold
                  text-3xl sm:text-4xl md:text-5xl
                  leading-tight
                ">
                  We are now on YouTube
                </h1>
              </div>
              
              <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
                Watch our latest tutorials, web development guides, and tech insights on YouTube.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://youtube.com/channel/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3
                    bg-red-600
                    text-white
                    rounded-lg
                    hover:bg-red-700
                    transition-colors
                    group
                    text-sm sm:text-base font-medium
                  "
                >
                  <FaYoutube className="w-5 h-5" />
                  Subscribe to Channel
                </a>
                
                <a
                  href="https://youtube.com/channel/example/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3
                    bg-gray-800
                    border border-gray-700
                    text-white
                    rounded-lg
                    hover:bg-gray-700
                    transition-colors
                    group
                    text-sm sm:text-base font-medium
                  "
                >
                  View All Videos
                  <HiExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              {/* Channel Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-white text-xl sm:text-2xl font-bold">50+</div>
                  <div className="text-gray-400 text-sm">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-xl sm:text-2xl font-bold">100K+</div>
                  <div className="text-gray-400 text-sm">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-xl sm:text-2xl font-bold">5K+</div>
                  <div className="text-gray-400 text-sm">Subscribers</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Featured Video Preview */}
            <div className="lg:w-3/5">
              <div className="
                bg-gray-800/30
                rounded-xl sm:rounded-2xl
                border border-gray-700/50
                overflow-hidden
                hover:border-gray-600
                transition-all duration-300
                group
              ">
                <div className="relative">
                  {/* Video Thumbnail */}
                  <div className="h-48 sm:h-64 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="
                        w-16 h-16 sm:w-20 sm:h-20
                        bg-red-600
                        rounded-full
                        flex items-center justify-center
                        hover:scale-110
                        transition-transform
                        cursor-pointer
                      ">
                        <HiPlay className="text-white w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                      </div>
                    </div>
                    
                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="px-2 py-1 bg-red-600/80 text-white text-xs rounded">
                            Latest Video
                          </span>
                          <span className="text-white text-sm">25:18</span>
                        </div>
                        <span className="text-gray-300 text-sm">2 days ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="
                      text-white
                      text-lg sm:text-xl md:text-2xl
                      font-semibold
                      mb-2
                      group-hover:text-red-400
                      transition-colors
                    ">
                      How We Built This Website - Complete Walkthrough
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                      Join us as we walk through the complete process of building this portfolio website, from design to deployment.
                    </p>
                    
                    <a
                      href="https://youtube.com/watch?v=latest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        text-red-400
                        hover:text-red-300
                        transition-colors
                        font-medium
                        text-sm sm:text-base
                      "
                    >
                      Watch Now
                      <HiArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Grid */}
        <div className="mb-12 sm:mb-16">
          <h2 className="
            text-white
            text-2xl sm:text-3xl md:text-4xl
            font-bold
            mb-6 sm:mb-8
          ">
            Latest Uploads
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="
                  bg-gray-800/30
                  rounded-xl sm:rounded-2xl
                  border border-gray-700/50
                  overflow-hidden
                  hover:border-gray-600
                  hover:bg-gray-800/40
                  transition-all duration-300
                  group
                "
              >
                {/* Video Thumbnail */}
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="
                        w-12 h-12
                        bg-red-600/80
                        rounded-full
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        transition-opacity
                        cursor-pointer
                      ">
                        <HiPlay className="text-white w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                    
                    {/* Video Duration */}
                    <div className="absolute bottom-3 right-3">
                      <span className="
                        px-2 py-1
                        bg-black/80
                        text-white
                        text-xs
                        rounded
                      ">
                        {video.duration}
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="
                        px-2 py-1
                        bg-gray-900/80
                        text-gray-300
                        text-xs
                        rounded
                      ">
                        {video.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="
                    text-white
                    text-lg sm:text-xl
                    font-semibold
                    mb-2
                    line-clamp-2
                    group-hover:text-red-400
                    transition-colors
                  ">
                    {video.title}
                  </h3>
                  
                  <p className="
                    text-gray-400
                    text-sm
                    mb-4
                    line-clamp-2
                    leading-relaxed
                  ">
                    {video.description}
                  </p>
                  
                  {/* Video Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-gray-400 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <span>{video.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{video.date}</span>
                      </div>
                    </div>
                    
                    <span className="text-red-400 text-xs font-medium">
                      YouTube
                    </span>
                  </div>
                  
                  {/* Watch Button */}
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full
                      flex items-center justify-center gap-2
                      py-2.5
                      bg-gray-800
                      border border-gray-700
                      text-gray-300
                      rounded-lg
                      text-sm font-medium
                      hover:bg-gray-700
                      hover:border-red-500/50
                      hover:text-red-400
                      transition-colors
                      group-hover:bg-gray-800/50
                    "
                  >
                    <HiPlay className="w-4 h-4" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="
          bg-gradient-to-r from-gray-800/30 to-gray-900/30
          rounded-2xl sm:rounded-3xl
          p-6 sm:p-8 md:p-10
          border border-gray-700/50
          text-center
        ">
          <div className="max-w-3xl mx-auto">
            <div className="
              w-16 h-16 sm:w-20 sm:h-20
              bg-gradient-to-br from-red-600 to-red-800
              rounded-xl
              flex items-center justify-center
              mx-auto mb-6
            ">
              <FaYoutube className="text-white w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            
            <h3 className="
              text-white
              text-xl sm:text-2xl md:text-3xl
              font-bold
              mb-4
            ">
              Never Miss an Update
            </h3>
            
            <p className="
              text-gray-400
              text-base sm:text-lg
              mb-8
              leading-relaxed
            ">
              Subscribe to our YouTube channel and turn on notifications to get the latest web development tutorials and tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/channel/example"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-3
                  px-8 py-3
                  bg-red-600
                  text-white
                  rounded-full
                  hover:bg-red-700
                  transition-colors
                  font-medium
                  text-sm sm:text-base
                "
              >
                <FaYoutube className="w-5 h-5" />
                Subscribe Now
              </a>
              
              <a
                href="https://youtube.com/channel/example/playlists"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-3
                  px-8 py-3
                  bg-gray-800
                  border border-gray-700
                  text-white
                  rounded-full
                  hover:bg-gray-700
                  transition-colors
                  font-medium
                  text-sm sm:text-base
                "
              >
                Browse Playlists
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;