import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<number | string>('') // Can accept number or string to handle input field correctly
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', { name, email, phone, message })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
