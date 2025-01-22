import React from 'react'
import { jobSolutions } from './Model'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const EventsPage: React.FC = () => {
  return (
    <section className="mt-10 bg-cyan-600 px-6 py-16">
      {/*  why chosing our Services */}
      <h2 className="mb-8 text-center text-4xl font-extrabold">
        Why Choose Our Solutions
      </h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {jobSolutions.whyChoose.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Services List */}
      <h2 className="my-12 text-center text-4xl font-extrabold">
        Our Solutions
      </h2>
      <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
        {jobSolutions.solutions.map((solution, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform duration-500 hover:scale-105 lg:flex-row lg:items-start"
          >
            <div className="relative w-full overflow-hidden rounded-lg lg:mr-8 lg:w-1/2">
              <img
                src={solution.image}
                alt={solution.title}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="mt-4 flex flex-col lg:mt-0 lg:w-1/2">
              <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
                {solution.title}
              </h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <h2 className="my-12 text-center text-4xl font-extrabold">
        Additional Services We Offer
      </h2>
      <ul className="flex flex-col items-center text-center">
        {jobSolutions.additionalServices.map((service, index) => (
          <li
            key={index}
            className="mb-4 flex items-center text-lg text-gray-200"
          >
            <FaCheckCircle className="mr-3 text-2xl text-green-200" />{' '}
            {/* Fancy icon added */}
            {service}
          </li>
        ))}
      </ul>
      <div className="mt-12 rounded-lg bg-blue-100 py-10 text-center">
        <p className="mb-6 text-lg text-gray-700">
          Need more information or personalized support? Get in touch with our
          team today.
        </p>
        <Link
          to="/contact"
          className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-indigo-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
  /* const [showReadMoreModal, setShowReadMoreModal] = useState(false)
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

      {/* Read More Modal }
      /*<Modal
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

      {/* Registration Form Modal }
      <Modal
        showModal={showRegisterModal}
        handleClose={handleCloseRegisterModal}
      >
        {selectedEvent && <RegisterForm event={selectedEvent} />}
      </Modal>
    </section>
  )*/
}

export default EventsPage
