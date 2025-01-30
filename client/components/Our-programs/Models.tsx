// src/components/types.ts
import youth from '../public/youth.jpg'
import orientation from '../public/orientation.jpg'
import support from '../public/support.jpg'

export type Program = {
  id: number
  title: string
  description: string
  duration: string
  format: string
  image: string // URL for the program image
}

// Sample data for programs
export const programs: Program[] = [
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

// Upcoming program dates
export const upcomingPrograms = [
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
