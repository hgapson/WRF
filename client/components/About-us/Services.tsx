import React from 'react'
import {
  FaLaptopCode,
  FaBriefcase,
  FaChalkboardTeacher,
  FaPeopleArrows,
} from 'react-icons/fa'

const OurServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description:
        'Crafting responsive, modern websites that deliver an exceptional user experience.',
    },
    {
      icon: <FaBriefcase />,
      title: 'Business Solutions',
      description:
        'Tailored strategies to help your business thrive in a competitive market.',
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Mentorship Programs',
      description:
        'Guiding individuals towards personal and professional growth with expert mentors.',
    },
    {
      icon: <FaPeopleArrows />,
      title: 'Networking Opportunities',
      description:
        'Connecting professionals to build meaningful relationships and opportunities.',
    },
  ]

  return (
    <section className="from-bg-blue-950 to-bg-blue-950 bg-gradient-to-br py-16 text-center text-white">
      <h2 className="mb-8 text-4xl font-bold text-black">Our Services</h2>
      <p className="mb-12 text-lg font-light text-black">
        Explore the services we offer to help you achieve your goals.
      </p>
      <div className="container mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative transform rounded-lg bg-white p-8 text-center shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-80"></div>
            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white transition-colors group-hover:bg-white group-hover:text-blue-600">
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServicesSection
