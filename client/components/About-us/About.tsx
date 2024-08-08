// src/components/About-us/About.tsx

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BackgroundSection from './Image'
import Paragraphs from './Paragraphs'
import Testimonies from './Testimonies'
import VisionMissionValues from './Vision'
import TeamSection from './Team'
import Values from './Values'
import OurStorySection from './History'

const About = () => {
  const location = useLocation()

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash === '#testimonies') {
        // Use setTimeout to ensure the page has rendered
        setTimeout(() => {
          const element = document.getElementById('testimonies')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100) // Adjust delay as needed
      }
    }

    handleHashScroll()
    // Run this effect whenever location.hash changes
  }, [location.hash])

  return (
    <main className="main-container bg-gray-100">
      <div className="about-image">
        <BackgroundSection />
      </div>
      <div className="paragraph">
        <Paragraphs />
      </div>
      <div className="vision">
        <VisionMissionValues />
      </div>
      <div className="test">
        <Values />
      </div>

      <div className="story">
        <OurStorySection />
      </div>

      <div className="team">
        <TeamSection />
      </div>

      <div id="testimonies">
        <Testimonies />
      </div>

      <div className="getinvolved p-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Get Involved
          </h2>
          <p>
            There are many ways you can support our cause. Whether through
            volunteering, donations, or advocacy, your involvement makes a
            difference.
          </p>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
            onClick={() => (window.location.href = '/getInvolved')}
          >
            Get Involved
          </button>
        </div>
      </div>
    </main>
  )
}

export default About
