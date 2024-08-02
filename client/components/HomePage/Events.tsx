import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { eventsData } from '../models'
import '../main.scss'

// Example event data (replace with actual data or fetch from API)

const Event = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)

  const navigateToPreviousEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : eventsData.length - 1,
    )
  }

  const navigateToNextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex < eventsData.length - 1 ? prevIndex + 1 : 0,
    )
  }

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      {/* Title and Subtitle */}
      <h2 className="mb-6 text-center text-3xl font-bold text-black ">
        {eventsData[currentEventIndex].title}
      </h2>
      <h3 className="mb-6 text-center text-lg font-medium text-black">
        {eventsData[currentEventIndex].subtitle}
      </h3>

      {/* Event Content */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Previous Event Navigation */}
        <button
          className="prev-event-btn text-white-500 mr-4 cursor-pointer text-4xl transition-transform duration-300 hover:scale-125"
          onClick={navigateToPreviousEvent}
        >
          &lt;
        </button>

        {/* Event Thumbnails */}
        {eventsData.map((event, index) => (
          <div
            key={event.id}
            className={`event-thumbnail overflow-hidden rounded-lg ${
              index === currentEventIndex ? 'current-event' : 'opacity-50'
            }`}
            style={{
              flex: '0 0 auto',
              width: '250px',
              height: '250px',
              margin: '0 auto',
              maxWidth: '100%',
            }}
          >
            <img
              src={event.image}
              alt=""
              className="h-full w-full rounded-t-lg object-cover"
            />
          </div>
        ))}

        {/* Next Event Navigation */}
        <button
          className="next-event-btn text-white-500 ml-4 cursor-pointer text-4xl transition-transform duration-300 hover:scale-125"
          onClick={navigateToNextEvent}
        >
          &gt;
        </button>
      </div>

      {/* Read More Button */}
      <Link to="/Events">
        <div className="mb-6 mt-4 flex justify-center">
          <a href={eventsData[currentEventIndex].link} className="btn ">
            Read More
          </a>
        </div>
      </Link>
    </div>
  )
}

export default Event
