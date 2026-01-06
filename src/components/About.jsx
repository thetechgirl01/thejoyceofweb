import React from 'react'
import AboutPic from '../assets/director.jpg'
import { HiArrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-black font-bold uppercase text-5xl sm:text-6xl leading-tight">
            Behind <br /> The Pixels
          </h1>

          <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
            “Excellence is not an act, but a habit. It is achieved through discipline,
            precision, and a commitment to doing things right even when no one is watching.
            That is why we focus on delivering quality, performance, and reliability in
            every line of code we write.”
            <span className="block mt-4 text-gray-400 text-sm">
              — Inspired by Aristotle
            </span>
          </p>

          {/* BUTTON — LEFT AS REQUESTED */}
          <a
            href="#"
            className="
              group
              mt-10
              inline-flex items-center justify-between
              gap-4
              border border-black
              rounded-full
              px-6 py-3
              hover:bg-black/5
              transition
            "
          >
            <span className="text-black font-medium">
              Read more about us
            </span>

            <span
              className="
                w-9 h-9
                bg-yellow-400
                rounded-full
                flex items-center justify-center
                group-hover:translate-x-1
                transition
              "
            >
              <HiArrowRight className="text-black w-5 h-5 -rotate-18" />
            </span>
          </a>
        </div>

        {/* RIGHT IMAGE SLICES */}
        <div className="flex justify-center lg:justify-end gap-6">
          
          {/* Slice 1 */}
          <div
            className="w-[210px] h-[420px] rounded-3xl bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${AboutPic})`,
              backgroundSize: '300% 100%',
              backgroundPosition: 'left center',
            }}
          />

          {/* Slice 2 (center & taller) */}
          <div
            className="w-[240px] h-[480px] rounded-3xl bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${AboutPic})`,
              backgroundSize: '300% 100%',
              backgroundPosition: 'center center',
            }}
          />

          {/* Slice 3 */}
          <div
            className="w-[190px] h-[400px] rounded-3xl bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${AboutPic})`,
              backgroundSize: '300% 100%',
              backgroundPosition: 'right center',
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default About
