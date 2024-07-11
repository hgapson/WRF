import React from 'react'
import volunteering from '../public/volunteering.jpg'
import awareness from '../public/awareness.jpg'
import partnership from '../public/partnership.jpeg'
import '../styles/main.scss'

const SectionWithCards = () => {
  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      {/* Title and Subtitle */}
      <h2 className="mb-4 text-center text-3xl font-bold">Get Involved</h2>
      <h3 className="mb-6 text-center text-lg italic">
        Join Us in Making a Difference
      </h3>

      {/* Paragraph with Gray Background */}
      <p className="mb-8 bg-gray-200 p-4 text-center">
        Your support is crucial to helping refugees rebuild their lives. <br />
        Here’s how you can get involved:
      </p>

      {/* Cards Section */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* Card 1 */}
        <div className="card  max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
          <h3 className="mb-2 text-center text-xl font-medium italic">
            VOLUNTEER OPPORTUNITIES
          </h3>
          <img
            src={volunteering}
            alt="Card 1"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <p className="mb-4 text-center text-gray-700">
              Mentor a Refugee: Help refugees adapt to their new community.
              <br />
              Event Volunteering: Assist in organizing and running our events
            </p>
            <div className="flex justify-center">
              <button
                className="btn"
                onClick={() => (window.location.href = '/apply')}
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card  max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
          <h3 className="mb-2 text-center text-xl font-medium italic">
            ADVOCACY AND AWARENESS
          </h3>
          <img
            src={awareness}
            alt="Card 2"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <p className="mb-4 text-center text-gray-700">
              Use your voice to advocate for refugee rights. Share our message
              <br />
              on social media or sign our petitions.
            </p>
            <div className="flex justify-center">
              <button
                className="btn"
                onClick={() => (window.location.href = '/take-action')}
              >
                Take Action
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
          <h3 className="mb-2 text-center text-xl font-medium italic">
            PARTNERSHIP OPPORTUNITIES
          </h3>
          <img
            src={partnership}
            alt="Card 3"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <p className="mb-4 text-center text-gray-700">
              Partner with us to create meaningful change.
              <br />
              Learn more about our partnership programs.
            </p>
            <div className="flex justify-center">
              <button
                className="btn"
                onClick={() => (window.location.href = '/become-partner')}
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWithCards