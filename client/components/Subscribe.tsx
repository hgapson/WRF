//import React from 'react'
import '../styles/main.scss'

function SubscriptionForm() {
  return (
    <div className="mb-6 flex flex-col space-y-4 md:mb-0 md:w-1/2 md:flex-row md:items-center md:space-x-2 md:space-y-0">
      <h2 className="text-xl font-semibold">Subscribe to our Newsletter</h2>
      <form className="flex items-center space-x-2">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="flex-grow rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default SubscriptionForm
