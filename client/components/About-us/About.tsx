//import React from 'react'
import BackgroundSection from './Image'
import Paragraphs from './Paragraphs'
import VisionMissionValues from './Vision'

const About = () => {
  return (
    <main className="main-container">
      <div className="about-image">
        <BackgroundSection />
      </div>
      <div className="about-image">
        <Paragraphs />
      </div>
      <div className="about-image">
        <VisionMissionValues />
      </div>

      {/* Your main content here */}
    </main>
  )
}

export default About
