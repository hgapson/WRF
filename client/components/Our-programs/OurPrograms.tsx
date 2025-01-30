// src/components/OurPrograms.tsx

import React, { useState } from 'react'
import youth from '../public/youth.jpg'
import orientation from '../public/orientation.jpg'
import support from '../public/support.jpg'
import student from '../public/students.jpg'
//import ProgramModal from './Modal'
import { motion } from 'framer-motion'
//import { Program, programs } from './Models'

type Program = {
  id: number
  title: string
  description: string
  duration: string
  format: string
  image: string // URL for the program image
}

// Sample data for programs
const programs: Program[] = [
  {
    id: 1,
    title: 'World Refugee Day',
    description:
      'Learn or improve your English language skills through beginner, intermediate, and advanced classes.',
    duration: 'Flexible',
    format: 'In-Person & Online',
    image: youth, // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Meaning Refugee Participation',
    description:
      'Gain practical skills in areas like hospitality, construction, healthcare, and IT.',
    duration: '3–6 months',
    format: 'In-Person',
    image: orientation, // Replace with actual image URL
  },
  {
    id: 3,
    title: 'PCVE',
    description: 'Access free mental health support from licensed therapists.',
    duration: 'Ongoing',
    format: 'In-Person & Virtual Sessions',
    image: support, // Replace with actual image URL
  },
  {
    id: 4,
    title: 'Food Safety Program',
    description:
      'Learn or improve your English language skills through beginner, intermediate, and advanced classes.',
    duration: 'Flexible',
    format: 'In-Person & Online',
    image: youth, // Replace with actual image URL
  },
  {
    id: 5,
    title: 'First Aid Program',
    description:
      'Gain practical skills in areas like hospitality, construction, healthcare, and IT.',
    duration: '3–6 months',
    format: 'In-Person',
    image: orientation, // Replace with actual image URL
  },
  {
    id: 6,
    title: 'Our Women',
    description: 'Access free mental health support from licensed therapists.',
    duration: 'Ongoing',
    format: 'In-Person & Virtual Sessions',
    image: support, // Replace with actual image URL
  },
]
// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Upcoming program dates
const upcomingPrograms = [
  {
    id: 1,
    title: 'English Language Classes',
    startDate: 'January 15, 2024',
  },
  {
    id: 2,
    title: 'Career Skills Training',
    startDate: 'February 1, 2024',
  },
  {
    id: 3,
    title: 'Cultural Orientation Workshops',
    startDate: 'March 10, 2024',
  },
]

const OurPrograms = () => {
  return (
    <div className="mt-4 min-h-screen bg-blue-950 py-12">
      <section
        className=" h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${student})` }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="mb-4 text-5xl font-bold">Our Programs</h1>
          <p className="text-lg">
            Explore the various programs we offer to help former refugees settle
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-300">
            At Waikato Refugee Forum, we are dedicated to supporting former
            refugees as they rebuild their lives and thrive in their new
            communities.
          </p>
        </motion.div>

        {/* Programs List */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                className="group overflow-hidden rounded-lg bg-white text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-48 w-full transform object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-semibold text-blue-900">
                    {program.title}
                  </h2>
                  <p className="mb-4 text-gray-600">{program.description}</p>
                  <p className="text-sm text-gray-500">
                    <strong>Duration:</strong> {program.duration} |{' '}
                    <strong>Format:</strong> {program.format}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Program Dates */}
        <motion.div
          className="mt-16 rounded-lg bg-blue-50 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold text-blue-900">
            Upcoming Program Dates
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {upcomingPrograms.map((program) => (
              <motion.div
                key={program.id}
                className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 p-6 shadow-md "
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-blue-950 ">
                  {program.title}
                </h3>
                <p className="text-gray-800">
                  <strong>Start Date:</strong> {program.startDate}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Get Involved */}
        <motion.div
          className="mt-16 rounded-lg bg-white p-8 text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold text-blue-900">
            How to Get Involved
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-blue-900">
                For Participants
              </h3>
              <p className="mb-4 text-gray-600">
                Ready to join a program? Contact us to get started!
              </p>
              <motion.a
                href="projects@wrf.org.nz"
                className="inline-block rounded-lg bg-blue-900 px-6 py-3 text-white transition-colors duration-300 hover:bg-blue-800"
                whileHover={{ scale: 1.05 }}
              >
                Contact Us
              </motion.a>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-blue-900">
                For Volunteers
              </h3>
              <p className="mb-4 text-gray-600">
                Help us make a difference! Learn how you can support our
                programs.
              </p>
              <motion.a
                href="/contact" // Replace with actual link
                className="inline-block rounded-lg bg-blue-900 px-6 py-3 text-white transition-colors duration-300 hover:bg-blue-800"
                whileHover={{ scale: 1.05 }}
              >
                Get Involved
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-16 rounded-lg bg-blue-900 py-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
          <p className="mb-4 text-lg">
            Have questions or need assistance? Our team is here to help!
          </p>
          <p className="text-lg">
            Email:{' '}
            <a
              href="projects@wrf.org.nz"
              className="underline hover:text-green-600"
            >
              projects@wrf.org.nz
            </a>{' '}
            | Phone:{' '}
            <a href="+64273948990" className="underline hover:text-green-600">
              +64273948990
            </a>{' '}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default OurPrograms
