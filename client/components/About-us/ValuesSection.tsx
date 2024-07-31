import React, { useState } from 'react'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

interface Value {
  id: number
  title: string
  subtitle: string
  explanation: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  image: string
}

const values: Value[] = [
  {
    id: 1,
    title: 'Economic Empowerment',
    subtitle: 'Value 1',
    explanation:
      'We provide job training and placement services to help refugees gain sustainable employment and achieve economic independence.',
    icon: BriefcaseIcon,
    image: 'path/to/value1.jpg', // replace with actual image paths
  },
  {
    id: 2,
    title: 'Education Support',
    subtitle: 'Value 2',
    explanation:
      'Our programs offer educational resources and support to help refugees and their families access quality education and improve their lives.',
    icon: AcademicCapIcon,
    image: 'path/to/value2.jpg',
  },
  {
    id: 3,
    title: 'Community Integration',
    subtitle: 'Value 3',
    explanation:
      'We facilitate community integration by organizing social events and cultural exchange programs to build strong, supportive communities.',
    icon: GlobeAltIcon,
    image: 'path/to/value3.jpg',
  },
  {
    id: 4,
    title: 'Healthcare Services',
    subtitle: 'Value 4',
    explanation:
      'Our healthcare programs ensure that refugees have access to essential medical services and mental health support.',
    icon: HeartIcon,
    image: 'path/to/value4.jpg',
  },
  // Add more values as needed
]

const getNextValues = (values: Value[], index: number) => {
  return [
    values[index % values.length],
    values[(index + 1) % values.length],
    values[(index + 2) % values.length],
  ]
}

function ValuesSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + values.length) % values.length,
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length)
  }

  const currentValues = getNextValues(values, currentIndex)

  const renderValueItem = (value: Value, isActive: boolean) => {
    const IconComponent = value.icon
    return (
      <div
        key={value.id}
        className={`flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform ${
          isActive ? 'scale-100' : 'scale-90 opacity-50'
        }`}
        style={{ flex: '1 0 30%', minWidth: '250px', maxWidth: '300px' }}
      >
        <img
          src={value.image}
          alt={value.title}
          className="mb-2 h-32 w-full rounded-md object-cover"
        />
        <div className="text-center">
          <IconComponent className="mx-auto h-16 w-16 text-blue-500" />
          <h3 className="mt-2 text-lg font-semibold">{value.title}</h3>

          {isActive && (
            <p className="mt-1 text-sm text-gray-600">{value.explanation}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-semibold">Our Values</h2>
        <div className="flex items-center justify-between px-4">
          <ChevronLeftIcon
            onClick={handlePrev}
            className="h-8 w-8 cursor-pointer text-blue-500"
          />
          <div className="flex w-full max-w-full space-x-4 overflow-x-auto">
            {currentValues.map((value, index) =>
              renderValueItem(value, index === 1),
            )}
          </div>
          <ChevronRightIcon
            onClick={handleNext}
            className="h-8 w-8 cursor-pointer text-blue-500"
          />
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
