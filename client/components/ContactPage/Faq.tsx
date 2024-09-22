// components/FaqSection.tsx

import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a wide range of services including job assistance, educational support, and settlement guidance for migrants and refugees.',
  },
  {
    question: 'How can I partner with your organization?',
    answer:
      'You can partner with us by visiting our Partners page and filling out the form, or by reaching out to us directly through our Contact page.',
  },
  {
    question: 'Do you provide legal advice?',
    answer:
      'While we do not provide legal advice, we can connect you with trusted partners who specialize in legal services for migrants and refugees.',
  },
  {
    question: 'How can I donate to support your mission?',
    answer:
      'You can support us by making a donation through our Donations page, where we accept various forms of payment to help us continue our work.',
  },
  // Add more FAQs as needed
]

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-indigo-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ${
                activeIndex === index ? 'bg-indigo-50' : ''
              }`}
            >
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-indigo-600" />
                ) : (
                  <FaChevronDown className="text-indigo-600" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'mt-4 max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
