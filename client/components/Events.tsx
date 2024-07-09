import React, { useState } from 'react'
import wrd from '../public/wrd.jpg'
import volunteering from '../public/volunteering.jpg'
import workshop from '../public/workshop.jpg'

// Example event data (replace with actual data or fetch from API)
const eventsData = [
  {
    id: 1,
    title: 'UPCOMING EVENTS',
    subtitle: 'WORLD"S REFUGEE DAY ',
    image: wrd, // Use the imported image directly
    description: 'Celebrating World Refugee Day with former refugee 2024.',
    link: '#', // Example link for "Read More" button
  },
  {
    id: 2,
    title: 'UPCOMING EVENTS',
    subtitle: 'VOLUNTEERING',
    image: volunteering, // Use the imported image directly
    description:
      'Giving honor our volunteers for their incredible work in our organization.',
    link: '#', // Example link for "Read More" button
  },
  {
    id: 3,
    title: 'UPCOMING EVENTS',
    subtitle: 'WORKSHOP',
    image: workshop, // Use the imported image directly
    description:
      'Giving former refugees opportunity to show their origin traditional culture tresors.',
    link: '#', // Example link for "Read More" button
  },
]

const EventsSection = () => {
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
    <div className="container mx-auto mt-8">
      {/* Title and Subtitle */}
      <h2 className="mb-4 text-center text-3xl font-bold">
        {eventsData[currentEventIndex].title}
      </h2>
      <h3 className="mb-6 text-center text-lg font-medium">
        {eventsData[currentEventIndex].subtitle}
      </h3>

      {/* Event Content */}
      <div className="flex items-center justify-between">
        {/* Previous Event Navigation */}
        <button
          className="prev-event-btn mr-4 cursor-pointer text-blue-500"
          onClick={navigateToPreviousEvent}
        >
          &lt; Previous
        </button>

        {/* Event Details */}
        <div className="flex flex-col items-center">
          {/* Event Image */}
          <img
            src={eventsData[currentEventIndex].image}
            alt={eventsData[currentEventIndex].title}
            className="mb-4 rounded-lg"
          />

          {/* Event Description */}
          <p className="mb-4 text-center text-gray-700">
            {eventsData[currentEventIndex].description}
          </p>

          {/* Read More Button */}
          <a href={eventsData[currentEventIndex].link} className="btn">
            Read More
          </a>
        </div>

        {/* Next Event Navigation */}
        <button
          className="next-event-btn ml-4 cursor-pointer text-blue-500"
          onClick={navigateToNextEvent}
        >
          Next &gt;
        </button>
      </div>

      {/* Event Thumbnails */}
      <div className="mt-8 flex justify-center">
        {eventsData.map((event, index) => (
          <div
            key={event.id}
            className={`event-thumbnail mx-2 overflow-hidden rounded-lg ${
              index === currentEventIndex ? '' : 'opacity-50'
            }`}
            style={{ flex: '0 0 auto', width: '150px', height: '150px' }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full rounded-t-lg object-cover"
            />
            <div className="rounded-b-lg bg-white p-2">
              <h3 className="mb-2 text-center text-lg font-medium">
                {event.title}
              </h3>
              <p className="text-center text-sm text-gray-500">
                {event.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsSection
