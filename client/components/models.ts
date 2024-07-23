export interface Fruit {
  id: number
  name: string
  email: string
  phone: string
}

export interface FruitData {
  name: string
  email: string
  phone: string
}
// Define the Job type
export interface Job {
  id: string
  title: string
  location: string
  description: string
}

// Example job data
export const jobList: Job[] = [
  {
    id: '1',
    title: 'Software Engineer',
    location: 'New York',
    description: 'Develop and maintain software applications.',
  },
  {
    id: '2',
    title: 'Product Manager',
    location: 'San Francisco',
    description: 'Manage product development lifecycle.',
  },
  {
    id: '3',
    title: 'Designer',
    location: 'Los Angeles',
    description: 'Design user interfaces and experiences.',
  },
  // Add more job objects as needed
]
