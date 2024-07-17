import React, { useState } from 'react'
import wrd from '../public/wrd.jpg'
import volunteering from '../public/volunteering.jpg'
import workshop from '../public/workshop.jpg'
import '../main.scss'

// Example event data (replace with actual data or fetch from API)
const eventsData = [
  {
    id: 1,
    title: 'UPCOMING EVENTS',
    subtitle: "WORLD'S REFUGEE DAY",
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
      'Honoring our volunteers for their incredible work in our organization.',
    link: '#', // Example link for "Read More" button
  },
  {
    id: 3,
    title: 'UPCOMING EVENTS',
    subtitle: 'WORKSHOP',
    image: workshop, // Use the imported image directly
    description:
      'Giving former refugees opportunity to showcase their traditional cultural treasures.',
    link: '#', // Example link for "Read More" button
  },
]

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
              width: '250px', // Adjust width as needed
              height: '250px', // Adjust height as needed
              margin: '0 auto', // Center align thumbnails
              maxWidth: '100%', // Ensure thumbnails don't exceed container width
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
      <div className="mb-6 mt-4 flex justify-center">
        <a href={eventsData[currentEventIndex].link} className="btn ">
          Read More
        </a>
      </div>
    </div>
  )
}

export default Event
