// src/components/ContactPage/Contact.tsx

import React, { useState } from 'react'
import '../main.scss'

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string | number>('') // Can accept number or string to handle input field correctly
  const [message, setMessage] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const contactData = {
      name,
      email,
      phone,
      message,
    }

    try {
      const response = await fetch('http://localhost:5173/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        setStatus('Error sending message. Please try again.')
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('Error sending message. Please try again.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-10 pt-[80px] ">
      {' '}
      {/* Add top padding */}
      <h2 className="mb-4 p-16 text-3xl font-bold">Contact Us</h2>
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
        {status && <p className="mt-4 text-red-500">{status}</p>}
      </form>
    </div>
  )
}

export default Contact
