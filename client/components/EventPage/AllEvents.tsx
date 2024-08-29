import React, { useState } from 'react'
import Modal from '../Our-Partners/Modal'
import { eventsData } from './Model'
import Gallery from './Gallery'
import RegisterForm from './RegisterForm'

const EventsPage: React.FC = () => {
  const [showReadMoreModal, setShowReadMoreModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  const handleOpenReadMoreModal = (event: any) => {
    setSelectedEvent(event)
    setShowReadMoreModal(true)
  }

  const handleCloseReadMoreModal = () => {
    setShowReadMoreModal(false)
    setSelectedEvent(null)
  }

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true)
  }

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false)
  }

  const isUpcomingEvent = (date: string) => {
    return new Date(date) > new Date()
  }

  return (
    <section className="mt-10 bg-blue-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto pt-[64px]">
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Our Events
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg"
            >
              {event.image.includes('video') ? (
                <video controls className="h-48 w-full object-cover">
                  <source src={event.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                <p className="text-gray-600">
                  {new Date(event.date).toDateString()}
                </p>
                <p className="mb-4 text-gray-700">{event.description}</p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleOpenReadMoreModal(event)}
                    className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Read More Modal */}
      <Modal
        showModal={showReadMoreModal}
        handleClose={handleCloseReadMoreModal}
      >
        {selectedEvent && (
          <div>
            <h2 className="mb-4 text-2xl font-bold">{selectedEvent.title}</h2>
            <p className="mb-4 text-gray-700">{selectedEvent.description}</p>

            {!isUpcomingEvent(selectedEvent.date) && (
              <Gallery event={selectedEvent} />
            )}

            {isUpcomingEvent(selectedEvent.date) && (
              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleOpenRegisterModal} // Open registration form modal
                  className="rounded bg-green-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-green-600"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Registration Form Modal */}
      <Modal
        showModal={showRegisterModal}
        handleClose={handleCloseRegisterModal}
      >
        {selectedEvent && <RegisterForm event={selectedEvent} />}
      </Modal>
    </section>
  )
}

export default EventsPage
