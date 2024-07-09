import React, { useState } from 'react'
import wrd from '../public/wrd.jpg'
import volunteering from '../public/volunteering.jpg'
import workshop from '../public/workshop.jpg'

// Example event data (replace with actual data or fetch from API)
const eventsData = [
  {
    id: 1,
    title: 'WORLD"S REFUGEE DAY',
    subtitle: 'Celebrating World Refugee Day with former refugee 2024 ',
    image: wrd, // Use the imported image directly
    description:
      'Description for Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '#', // Example link for "Read More" button
  },
  {
    id: 2,
    title: 'VOLUNTEERING',
    subtitle:
      'Giving honor our volunteers for their incredible work in our organization',
    image: volunteering, // Use the imported image directly
    description:
      'Description for Event 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '#', // Example link for "Read More" button
  },
  {
    id: 3,
    title: 'WORKSHOP',
    subtitle: 'Giving former refugees opportunit',
    image: workshop, // Use the imported image directly
    description:
      'Description for Event 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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