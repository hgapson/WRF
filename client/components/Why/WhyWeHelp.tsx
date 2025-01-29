import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../public/about-cover.jpg'
import ambrella from '../public/umbrella.jpg'
import smile1 from '../public/smilling 1.jpg'
import artist from '../public/artist.jpg'
import hard from '../public/hard.jpg'
import how1 from '../public/working-hard.jpg'
import classes from '../public/classes.jpg'
import legal from '../public/legal.jpg'
import sport from '../public/sport.jpg'

const WhyWeHelp = () => {
  return (
    <section className="mt-4 bg-blue-950 px-4 py-14 text-gray-800 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Transparent Cover Image with Title */}
        <div className="relative mb-12">
          <img
            src={cover}
            alt="Cover"
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-semibold text-white">
              Why We Do What We Do
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            Our Mission and Vision
          </h2>
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={ambrella}
              alt="Mission and Vision"
              className="mb-4 w-full rounded-lg shadow-lg md:mb-0 md:mr-4 md:w-1/2"
            />
            <p className="text-gray-100">
              Our mission is to provide lasting solutions for at-risk refugees,
              empowering them to use their talents and skills to contribute to
              their host countries and the world. Our vision is a world where
              every refugee has the opportunity to thrive and reach their full
              potential.
            </p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <img
                src={smile1}
                alt="Success Story 1"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-100">
                Sarah, a talented engineer, found a new home and a promising
                career through our programs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={artist}
                alt="Success Story 2"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-100">
                Rwema, a gifted artist, now shares her art with the world,
                thanks to the support she received.
              </p>
            </div>
          </div>
        </div>

        {/* Challenges Faced by Refugees */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            Challenges Faced by Refugees
          </h2>
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={hard}
              alt={'Challenges Faced by Refugees'}
              className="mb-4 w-full rounded-lg shadow-lg md:mb-0 md:mr-4 md:w-1/2"
            />
            <p className="text-gray-100">
              Former refugees face numerous challenges, including cultural
              adaptation, language barriers, and finding employment. WRF aim to
              address collectively these settlement issues facing the former
              refugees communities in Waikato region.
            </p>
          </div>
        </div>

        {/* How We Help */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            How We Help
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <img
                src={how1}
                alt="Program 1"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-100">
                Help in office by volunteers which give them opportunity to grow
                and gain experience.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={classes}
                alt="Program 2"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-100">
                Filling forms which help former refugees to get services from
                govermancy in smoothy way
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={legal}
                alt="Program 3"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-100">
                Legal assistance ensures that former refugees have the support
                they need to navigate complex legal systems.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={sport}
                alt="Program 4"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-100">
                Basic Food Hygien Training that help in gaining skills on how to
                take care of their life.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={artist}
                alt="Program 4"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-100">
                First Aid Training that help former refugee to have basic
                knowlwdge in saving life.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={sport}
                alt="Program 4"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-100">
                Heritage language Classes that help in keeping and mentain
                culture and values.
              </p>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-200">
            Get Involved
          </h2>
          <p className="text-gray-100">
            There are many ways you can support our cause. Whether through
            volunteering, or advocacy, your involvement makes a difference.
          </p>
          <Link to="/get-involved">
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
              Get Involved
            </button>
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-200">FAQ</h2>
          <p className="text-gray-100">
            Have questions? Check out our FAQ section for answers to common
            questions about our organization and how we help refugees.
          </p>
          {/* Add FAQ content here */}
        </div>
      </div>
    </section>
  )
}

export default WhyWeHelp
