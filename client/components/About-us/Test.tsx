import React from 'react'
//import backgroundImage from '../public/ant-rasism.jpg'

const values = [
  {
    title: 'Compassion',
    description:
      'We believe in acting with empathy and kindness in all our interactions and decisions.',
    icon: '❤️',
  },
  {
    title: 'Integrity',
    description:
      'Our commitment to honesty and transparency guides everything we do.',
    icon: '🔒',
  },
  {
    title: 'Collaboration',
    description:
      'We work together with partners and communities to achieve common goals.',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description:
      'We embrace new ideas and approaches to better serve our community.',
    icon: '💡',
  },
]

const Values: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-12 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-opacity-40"></div>
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="mb-8 text-4xl font-bold text-black">Our Values</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-80 p-6 text-center shadow-lg"
            >
              <div className="mb-4 text-5xl">{value.icon}</div>
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                {value.title}
              </h2>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
