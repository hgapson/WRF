//import React from 'react'
import BackgroundSection from './Image'
import Paragraphs from './Paragraphs'
import ValuesSection from './ValuesSection'
import VisionMissionValues from './Vision'
import TeamSection from './Team'

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
      <div className="values">
        <ValuesSection />
      </div>
      <div className="team">
        <TeamSection />
      </div>

      {/* Your main content here */}
    </main>
  )
}

export default About
