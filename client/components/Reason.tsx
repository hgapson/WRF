import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Reason = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {/* First Card */}
          <div className="rounded-lg  p-6">
            <h2 className="mb-4 text-4xl font-semibold">Why refugees</h2>
            <p className="text-gray-700">
              We focus on finding lasting solutions for at-risk refugees. We
              believe that everyone benefits when refugees are given a chance to
              use their talents and skills to contribute to their host countries
              and to the world.
            </p>
          </div>

          {/* Second Card */}
          <div className="flex items-center rounded-lg bg-red-700 p-6 shadow-md">
            <div className="relative mr-4 flex w-3/5 items-center justify-center">
              <FaSpinner className="w-3/4 animate-spin text-9xl text-gray-500 opacity-50" />
              <h2 className="absolute text-6xl font-semibold text-white">
                80%
              </h2>
            </div>
            <p className="w-2/5 text-white">
              of them need orientation in new country and advocacy.
            </p>
          </div>

          {/* Third Card */}
          <div className="flex items-center rounded-lg bg-red-700 p-6 shadow-md">
            <div className="relative mr-4 flex w-3/5 items-center justify-center">
              <FaSpinner className="w-3/4 animate-spin text-9xl text-gray-500 opacity-50" />
              <h2 className="absolute text-6xl font-semibold text-white">
                92%
              </h2>
            </div>
            <p className="w-2/5 text-white">
              of refugees need good life and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reason
