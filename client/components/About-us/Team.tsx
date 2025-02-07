import React, { useState } from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'
import { teamData, TeamMember } from './models'

const Team: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'boardMembers' | 'staf'>(
    'boardMembers',
  )

  const handleClick = (section: 'boardMembers' | 'staf') => {
    setActiveSection(section)
  }

  return (
    <section className="bg-blue-950 px-4 py-12 md:px-8 lg:px-16">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-300">Meet Our Team</h1>
        <div className="mb-6 flex justify-center gap-6">
          <button
            onClick={() => handleClick('boardMembers')}
            className={`text-lg font-semibold transition-all duration-300 ${activeSection === 'boardMembers' ? 'text-blue-600 underline' : 'text-gray-400'}`}
          >
            Board Members
          </button>
          <button
            onClick={() => handleClick('staf')}
            className={`text-lg font-semibold transition-all duration-300 ${activeSection === 'staf' ? 'text-blue-600 underline' : 'text-gray-400'}`}
          >
            Staf Team
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {teamData[activeSection].map((member: TeamMember, index: number) => {
          // const socialUrls = getSocialMediaUrls(member.name)
          return (
            <div
              key={index}
              className="w-full max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative flex items-center justify-center p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-24 w-24 rounded-full border-4 border-gray-200 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  {member.name}
                </h2>
                <h3 className="mb-2 text-base font-medium text-gray-600">
                  {member.position}
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  {member.description}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.facebook.com/credu.gapson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com/@gapson10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/gapson10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/credu.gapson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Team
