//import React from 'react'
import BackgroundSection from './Image'
import Paragraphs from './Paragraphs'
import VisionMissionValues from './Vision'

const About = () => {
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

      {/* Your main content here */}
    </main>
  )
}

export default About
